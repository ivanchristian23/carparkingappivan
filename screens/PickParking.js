import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { db } from "./config";
import {doc, getDoc,setDoc,getDocs, collection,deleteDoc, addDoc,docRef,onSnapshot} from "firebase/firestore";
import CarSpot from "./CarSpot";
import { Button } from "@rneui/themed";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const PickParking = ({navigation,route}) => {
  const { address, name,id1,picture,payment } = route.params;
  const [info, setInfo] = useState([]);
  const [parkingLot,setParkingLot] = useState('')
  // const [flag, setFlag] = useState(true);
  const fetchData = async () => {
    const docRef = doc(db, "parkingAreas", name);
    const docSnap = await getDoc(docRef);
    let temp = []
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().parkings);
      const items = docSnap.data().parkings
      items.forEach((i)=>{
        temp.push(i)
      })
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setInfo(temp)
  };
  const select = (id) => {
    let temp = [...info];
    let ob = temp.find((x) => x.id == id);
    ob.available = !ob.available;
    setInfo(temp);
    store(ob)
    setParkingLot(ob.parkingLot)
    
  };
  const store = async (ob) => {
    const docRef = doc(db, "parkingAreas",name)
    await setDoc(docRef, { parkings:info },{merge:true} )
        .then(() => { console.log('data submitted')
        fetchData()
        
    })
        .catch((error) => { console.log(error.message) })

}
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <SafeAreaView style={styles.bookingpage}>
      <ScrollView>
        {/* <Text/>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: windowWidth * 0.05 }}>Book Your Slot</Text>
      </View> */}
      <Text></Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Text>Basement</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <Text>1st Floor</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <Text>Second Floor</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text />
      <View style={{flexDirection:"row",flexWrap:'wrap'}}>
      {info.map((x) => (
        <View style={{width:windowWidth/3}}>
        <CarSpot st={x} key={x.parkingLot} select={()=>select(x.id)} />
        </View>
      ))}
      </View>
      <Button title="Confirm" onPress={()=> navigation.navigate("TimePickerScreen",{name:name,address:address,parkingLot:parkingLot,id:id1,picture:picture,payment:payment})}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PickParking

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 5,
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  bookingpage: {
    flex: 1,
    justifyContent: "space-between",
  },
})