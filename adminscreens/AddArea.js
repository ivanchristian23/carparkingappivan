import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/themed'
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../screens/config";


const AddArea = () => {
  const [name,setName] = useState()
  const [address,setAddress] = useState()
  const [distance,setDistance] = useState()
  const [image,setImage] = useState()
  const store = async () => {
    // incrementUserCount();
    const docRef = doc(db, "parkingAreas", email);
    await setDoc(docRef, {
      name: name,
      address: address,
      mobile: mobile,
    })
      .then(() => {
        console.log("data submitted");
        setName("");
        setAddress("");
        setMobile("");
        navigation.navigate("AddVehicle", {
          id: email
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <TextInput placeholder='Parking Name' style={styles.input} onChange={(text)=> setName(text)} />
      <TextInput placeholder='Parking Address' style={styles.input} onChange={(text)=> setAddress(text)} />
      </View>
      <View style={styles.row}>
      <TextInput placeholder='Distance' style={styles.input} onChange={(text)=> setDistance(text)}/>
      <TextInput placeholder='Image' style={styles.input} onChange={(text)=> setImage(text)}/>
      </View>
      
      {/* <TextInput placeholder='Status' style={[styles.input]} /> */}
      <Button title="Add Parking Area" onPress={store}/>
    </View>
  )
}

export default AddArea

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:20
  },
  row:{
    flexDirection:'row'
    ,justifyContent:'space-between'
  },
  input:{
    marginBottom:10,
    fontSize:18,
    padding:1,
    width:150
},
})