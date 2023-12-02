import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    doc,
    setDoc,
    getDocs,
    collection,
    deleteDoc,
    getDoc
  } from "firebase/firestore";
  import { db } from "../screens/config"


const AddVehicleAccountScreen = ({navigation,route}) => {
  const {id} = route.params
  const [radio,setRadio] = useState(0)
  const [vehicleName, setVehicleName] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicles,setVehicles] =useState([])
  const [image,setImage] = useState("https://i.fbcd.co/products/resized/resized-1500-1000/1d83834ba8fa525bbff21a3f201cc93870cf12a7715bd8cf12a426fc71c15005.jpg")
  useEffect(()=>{
    fetchData()
    // console.log(vehicles);
    // console.log(radio);
  },[])
  const fetchData = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    let temp = []
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data().vehicles);
      const items = docSnap.data().vehicles
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
    setVehicles(temp)
  };
const store = async () => {
    let temp = [...vehicles];
    temp.push({
      name: vehicleName,
      licensePlate: licensePlate,
      icon: image,
      radio: radio + 1,
    });
    console.log(temp);
    setVehicles(temp)
    const docRef = doc(db, "customers",id)
    await setDoc(docRef, {vehicles:temp },{merge:true} )
        .then(() => { console.log('data submitted')
        setVehicles([])
        navigation.replace("Tabs",{id:id})
    })
        .catch((error) => { console.log(error.message) })

}
// const addToVehicles = () => {
//   let temp = [...vehicles]
//   temp.push({
//     name:vehicleName,
//     licensePlate:licensePlate,
//     icon:image,
//     radio:radio+1
//   })
//   console.log(temp);
//   setVehicleName("")
//   setLicensePlate("")
//   setVehicles(temp)
  
// }
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
      {/* <Button title="Add Vehicle" onPress={addToVehicles} /> */}
      <Button title="Add Vehicle" onPress={store} />
    </View>
  )
}

export default AddVehicleAccountScreen

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