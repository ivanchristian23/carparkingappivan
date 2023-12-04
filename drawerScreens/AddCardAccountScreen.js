import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { db } from "../screens/config"
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  getDoc
} from "firebase/firestore";

const AddCardAccountScreen = ({ navigation,route }) => {
  const {id} = route.params
  const [radio,setRadio] = useState(0)
  const [image,setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png")
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [cards,setCards] = useState([])
  const fetchData = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    let temp = []
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data().vehicles);
      const items = docSnap.data().cards
      if (items == undefined || items == null){
        console.log('Creating a new Array');
      }
      else{
        items.forEach((i)=>{
          temp.push(i)
          setRadio(i.radio)
        })
      }
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setCards(temp)
  };
  const handlePayment = async () => {
    let temp = [...cards]
    temp.push({cardNumber:cardNumber,expiryDate:expiryDate,cvv:cvv,name:'****'+cardNumber.substring(cardNumber.length - 4),icon:image})
    console.log(temp);
    setCards(temp)
    const docRef = doc(db, "customers", id);
    await setDoc(
      docRef,
      {cards:temp},
      { merge: true }
    )
      .then(() => {
        console.log("data submitted");
        setCardNumber("");
        setExpiryDate("");
        setCVV("");
        alert("Card has been added succesfully");
        navigation.replace("Tabs",{id:id});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const addToCards = () => {
    let temp = [...cards]
    temp.push({cardNumber:cardNumber,expiryDate:expiryDate,cvv:cvv})
    // console.log(temp);
    setCards(temp)   
  }
  useEffect(()=>{
    // fetchData()
  },[])
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/credit-card.png")} />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter card number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCVV}
        />

        <Button title="Add Card" onPress={handlePayment} />
      </View>
    </SafeAreaView>
  );
};

export default AddCardAccountScreen;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
