import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card,Button } from '@rneui/themed'
import {doc, setDoc,getDocs, collection,deleteDoc, addDoc,docRef,onSnapshot} from "firebase/firestore";
import { db } from "../screens/config";
import { validatePassword } from 'firebase/auth';

const AddParking = () => {
  const [parkingName,setParkingName] = useState("")
  const [parkingLot,setparkingLot] = useState("")
  const [available,setavailable] = useState(true)
  const [data,setData] = useState([])
  const [fetchedData,setFetchedData] = useState([])
 useEffect(()=>{

 },[])
 const store = async () => {
  const docRef = doc(db, "parkingAreas", parkingName);
  await setDoc(docRef, {
    parkings:data
  },{merge:true})
    .then(() => {
      console.log("data submitted");
      setParkingName("");
      setparkingLot("");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const addParking = ()=>{
  let temp = [...data]
  console.log(temp);
  temp.push({
    parkingLot:parkingLot,
    available:available
  })
  setparkingLot("")
  console.log(temp);
  setData(temp)
}

  return (
    <View style={styles.container}>
      <View style={styles.row}> 
      <TextInput placeholder='Parking Name' onChangeText={text => setParkingName(text)} style={styles.input} value={parkingName}/>
      <TextInput placeholder='Parking Lot' onChangeText={text => setparkingLot(text)} style={styles.input} value={parkingLot}/>
      </View>
       
       <Button title="Add Parking Spot" onPress={addParking}/>
       <Text/>
       <Button title="Store in Database" onPress={store} />
    </View>
  )
}

export default AddParking

const styles = StyleSheet.create({
  container:{
    flex:1,marginHorizontal:20
  },
  input:{
    marginBottom:10,
    fontSize:18,
    padding:1,
    width:150
},
row:{
  flexDirection:'row',
  justifyContent:'space-between'
},

})