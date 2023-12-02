// LoginScreen.js
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { auth } from "./config";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => setSignedIn(false), []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logged in");
        setSignedIn(true);
        if (email== 'admin@admin.com'){
          navigation.replace('AdminNavigator')
        }
        navigation.replace("Tabs",{id:email});
      })
      .catch((error) => {
        console.log(error.message);
        setSignedIn(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Image source={require('../assets/loginscreen.png')} style={{borderRadius:50}}/>
      <Text/>
      <TextInput
        autoCapitalize={false}
        autoCorrect={false}
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        // autoCapitalize={false}
        // autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.regText}>Register Now</Text>
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
    borderRadius:10
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  register: {
    paddingTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  regText: {
    color: "darkblue",
    fontSize: 16,
  },
});

export default LoginScreen;
