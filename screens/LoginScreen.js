// LoginScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  
} from "react-native";
import { auth } from "./config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signedIn, setSignedIn] = useState(false);
  const [registerflag, setRegisterFlag] = useState(false);
  useEffect(() => setSignedIn(false), []);

  const handleRegister = () => {
    setRegisterFlag(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("registered");
        setEmail();
        setPassword();
        setRegisterFlag(false);
      })
      .catch((error) => console.log(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logged in");
        setSignedIn(true);
        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        console.log(error.message);
        setSignedIn(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking App</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.register} onPress={()=> navigation.navigate("RegisterScreen")}>
        <Text style={styles.regText}>Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  register: {
    paddingTop:20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  regText: {
    color: "black",
    fontSize: 16,
  },
});

export default LoginScreen;
