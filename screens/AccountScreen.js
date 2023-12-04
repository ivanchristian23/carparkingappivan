import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "@rneui/base";
import { Feather,FontAwesome,AntDesign,SimpleLineIcons } from "react-native-vector-icons";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config"
const AccountScreen = ({ navigation,route }) => {
  const {id} = route.params
  const [info,setInfo] = useState([])
  const [name,setName] = useState("")
  const [data,setData] = useState({})
  useEffect(()=>{
    read()
  },[])
  const read = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    let temp = []
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      temp.push(docSnap.data())
      setData(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setInfo(temp)
    temp.forEach((i)=>{
      setName(i.name)
    })
  };

  return (
    <View style={styles.container}>
      <Text />
      <View style={{ alignItems: "center", paddingBottom: 20 }}>
        <Avatar
          size="xlarge"
          rounded
          source={{uri:data.avatar}}
        />
        <Text />
        <Text style={styles.textName}>{name}</Text>
        {/* <Text /> */}
        <Text style={styles.textEmail}>{id}</Text>
      </View>
      <TouchableOpacity>
      <View style={styles.icons}>
        <Feather name="user" size={40} />
        <Text style={styles.name}>Edit Profile</Text>
      </View>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity onPress={()=> navigation.navigate("AddCardAccountScreen",{id:id})}>
      <View style={styles.icons}>
        <FontAwesome name="credit-card" size={40} />
        <Text style={styles.name}>Add Card</Text>
      </View>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity onPress={()=> navigation.navigate("AddVehicleAccountScreen",{id:id})}>
      <View style={styles.icons}>
        <AntDesign name="car" size={40} />
        <Text style={styles.name}>Add Vehicle</Text>
      </View>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity onPress={()=> navigation.navigate("HelpPage")}>
      <View style={styles.icons}>
        <Feather name="help-circle" size={40} />
        <Text style={styles.name}>Help</Text>
      </View>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity onPress={()=> navigation.replace("LoginScreen")}>
      <View style={styles.icons}>
        <SimpleLineIcons name="logout" size={40} />
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
  textName: {
    fontSize: 20,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 17,
    color: "grey",
  },
});
