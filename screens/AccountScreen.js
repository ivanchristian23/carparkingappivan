import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Avatar } from "@rneui/base";
import { Feather } from "react-native-vector-icons";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config"
const AccountScreen = ({ route }) => {
  const {id} = route.params
  useEffect(()=>{
    read()
  },[])
  const read = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <View style={styles.container}>
      <Text />
      <View style={{ alignItems: "center", paddingBottom: 20 }}>
        <Avatar
          size="xlarge"
          rounded
          source={require("../assets/parking.jpg")}
        />
        <Text />
        <Text>Adam Marcus</Text>
        <Text />
        <Text>adam@yahoo.com</Text>
      </View>
      <TouchableOpacity>
      <View style={styles.icons}>
        <Feather name="user" size={40} />
        <Text style={styles.name}>Edit Profile</Text>
      </View>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity>
      <View style={styles.icons}>
        <Feather name="user" size={40} />
        <Text style={styles.name}>Add Card</Text>
      </View>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity>
      <View style={styles.icons}>
        <Feather name="user" size={40} />
        <Text style={styles.name}>Add Vehicle</Text>
      </View>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity>
      <View style={styles.icons}>
        <Feather name="user" size={40} />
        <Text style={styles.name}>Help</Text>
      </View>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity>
      <View style={styles.icons}>
        <Feather name="user" size={40} />
        <Text style={styles.name}>Logout</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  icons: {
    flexDirection: "row",
  },
  name: {
    paddingTop: 8,
    fontSize: 20,
    paddingLeft: 10,
  },
});
