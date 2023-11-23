import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Card, Avatar,Button } from "@rneui/themed";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./config";
import { FlatList } from "react-native";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const PaymentMethod = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  const [data, setData] = useState([]);
  const [info, setInfo] = useState()
  useEffect(() => {
    fetchData();
    setInfo({"icon": "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png", "name": "Paypal"})
  }, []);
  const fetchData = async () => {
    const docs = await getDocs(collection(db, "paymentMethods"));
    let temp = [];
    docs.forEach((doc) => {
      temp.push(doc.data());
    });
    setData(temp);
  };
const HandleInfo= (radio,name,icon)=>{
  setChecked(radio)
  setInfo({name:name,icon:icon})
}

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => {
          <Text></Text>;
        }}
        renderItem={({ item }) => (
          <Card
            containerStyle={{ borderRadius: 4 }}
          >
            <View style={styles.viewstyle}>
              <Avatar rounded source={{ uri: item.icon }} size="medium" />
              <Text style={{width:150,paddingTop:10}}>{item.name}</Text>
              <RadioButton
                value= {item.radio}
                status={checked === item.radio ? "checked" : "unchecked"}
                onPress={() => {HandleInfo(item.radio,item.name,item.icon)}}
              />
            </View>
          </Card>
        )}
      />
      <Text/>
      <Card containerStyle={{ borderRadius: 4 }}>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("AddCard")}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>
      </Card>
      
      <Button title="Confirm" containerStyle={styles.button}onPress={()=> navigation.navigate("PaymentDetails",{name:info.name,icon:info.icon})}/>
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container:{
    flex:0
  }
  ,viewstyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    alignSelf:"center"
  },
buttonText: {
    color: "black",
    fontSize: 16,
  },
});
