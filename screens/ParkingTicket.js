import { SafeAreaView, StyleSheet, Text, View,Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Card } from "@rneui/base";
// import QRCode from "react-native-qrcode-svg";
import { getDocs, collection,getDoc,doc } from "firebase/firestore";
import { db } from "./config";

const ParkingTicket = ({ navigation, route }) => {
  const {parkingname,address,parkingLot,id,vehicleName,startDate,startTime,endTime} = route.params
  const [data,setData] = useState({})
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  };
  return (
    <SafeAreaView>
      <Card width={"92%"} height={"95%"} containerStyle={{ borderRadius: 4 }}>
        <View style={{alignItems:"center" }}>
          {/* <QRCode value="salkjdhiowhdlksahd"  size={250}/> */}
          <Image source={{uri: 'https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png'}} style={{height:200,width:250}}/>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.textTitle}>Name</Text>
        <Text style={styles.textTitle}> Vehicle</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{vehicleName}</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.textTitle}>Parking Area</Text>
        <Text style={styles.textTitle}> Parking Spot</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.text}>{parkingname}</Text>
        <Text style={styles.text}> {parkingLot}</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.textTitle}>Time</Text>
        <Text style={styles.textTitle}> Date</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.text}>{startTime} - {endTime}</Text>
        <Text style={styles.text}> {startDate}</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.textTitle}>Phone</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.text}>{data.mobile}</Text>
        </View>
        <Text/>
        
        <Button title="Confirm" color={'darkblue'} onPress={()=> navigation.replace("Tabs",{id:id})} containerStyle={{width:'80%',alignSelf:"center",paddingTop:10,borderRadius:5}}/>
      </Card>

      
    </SafeAreaView>
  );
};

export default ParkingTicket;

const styles = StyleSheet.create({
  container: {
  marginHorizontal: 20,
},
rowstyle:{
  flexDirection:"row"
  ,justifyContent:"space-between",
},
textTitle: {
  fontSize: 17,
  marginLeft: 10,
  fontWeight: "600",
},
text: {
  fontSize: 20,
  marginLeft: 10,
  color: "grey",
},
});
