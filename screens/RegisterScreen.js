import { StyleSheet, Text, TextInput, View,Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "@rneui/base";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  // const [countUser, setCountUser] = useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  // const incrementUserCount = () => {
  //   setCountUser(countUser + 1);
  // };
  const handleRegister = () => {
    if (password != confirmpassword) {
      alert("Password Mismatch");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("registered");
        store()
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        // setRegisterFlag(false);
      })
      .catch((error) => console.log(error.message));
  };
  const store = async () => {
    // incrementUserCount();
    const docRef = doc(db, "customers", email);
    await setDoc(docRef, {
      name: name,
      address: address,
      mobile: mobile,
      vehicles:[],
      cards:[{name:'Paypal',radio:1,icon:'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png'},{name:'Google',radio:2,icon:'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'}],
      bookings:[],
      avatar:'https://static.thenounproject.com/png/349790-200.png'
    })
      .then(() => {
        console.log("data submitted");
        setName("");
        setAddress("");
        setMobile("");
        navigation.navigate("AddVehicleAccountScreen", {
          id: email
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Become a Member Now</Text>
      <Image source={require('../assets/registerscreen.png')} style={{borderRadius:50}}/>
      <Text/>
      <TextInput
        style={styles.input}
        autoCapitalize={false}
        autoCorrect={false}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        autoCapitalize={false}
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        placeholder="Confirm password"
        value={confirmpassword}
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        autoCapitalize={false}
        autoCorrect={false}
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        onChangeText={(text) => setMobile(text)}
        value={mobile}
      />
      <Button title="Register" onPress={handleRegister} />
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
    borderRadius:10
  },
});
