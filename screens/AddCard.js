import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { db } from "./config";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  getDoc
} from "firebase/firestore";

const AddCard = ({ navigation,route }) => {
  const {id} = route.params
  const [radio,setRadio] = useState(0)
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
      if (items == undefined){
        null
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
    addToCards()
    const docRef = doc(db, "customers", id);
    await setDoc(
      docRef,
      {cards:cards},
      { merge: true }
    )
      .then(() => {
        console.log("data submitted");
        setCardNumber("");
        setExpiryDate("");
        setCVV("");
        alert("Payment successful!");
        navigation.replace("PaymentMethod");
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

        <Button title="Pay Now" onPress={handlePayment} />
      </View>
    </SafeAreaView>
  );
};

export default AddCard;

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
