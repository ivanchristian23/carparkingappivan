import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import {
    doc,
    setDoc,
    getDocs,
    collection,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "./config";

const AddVehicle = ({navigation,route}) => {
  const {id} = route.params
  const [vehicleName, setVehicleName] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicles,setVehicles] =useState([])
  const [image,setImage] = useState("https://i.fbcd.co/products/resized/resized-1500-1000/1d83834ba8fa525bbff21a3f201cc93870cf12a7715bd8cf12a426fc71c15005.jpg")
const store = async () => {
    const docRef = doc(db, "customers",id)
    await setDoc(docRef, { name:name,mobile: mobile, address: address,vehicles:vehicles },{merge:true} )
        .then(() => { console.log('data submitted')
        setVehicles([])
        readAll()
    })
        .catch((error) => { console.log(error.message) })

}
const addToVehicles = () => {
  let temp = [...vehicles]
  temp.push({
    vehicleName:vehicleName,
    licensePlate:licensePlate,
    image:image
  })
  setVehicleName("")
  setLicensePlate("")
  setVehicles(temp)
  
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Vehicle</Text>
      <TextInput
        style={styles.input}
        placeholder="Vehicle Name"
        onChangeText={(text) => setVehicleName(text)}
        value={vehicleName}
      />
      <TextInput
        style={styles.input}
        placeholder="License Plate"
        onChangeText={(text) => setLicensePlate(text)}
        value={licensePlate}
      />
      <Button title="Add Vehicle" onPress={addToVehicles} />
      <Button title="Click when done adding Vehicles" onPress={store} />
    </View>
  )
}

export default AddVehicle

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
    },
  });