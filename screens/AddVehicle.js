import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    doc,
    setDoc,
    getDocs,
    collection,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "./config";
const AddVehicle = ({navigation,route}) => {
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
      <Button title="Add Vehicle" onPress={handleAddVehicle} />
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