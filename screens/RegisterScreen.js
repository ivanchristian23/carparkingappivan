import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/base";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";
const User = 1
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const store = async () => {
    const docRef = doc(db, "customers", User);
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
        navigation.navigate("AddVehicle",{name: name,
            address: address,
            mobile: mobile,})
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Become a Member Now</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        secureTextEntry
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        secureTextEntry
        onChangeText={(text) => setMobile(text)}
        value={mobile}
      />
      <Button title="Register" onPress={store} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});
