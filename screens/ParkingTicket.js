import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Button, Card } from "@rneui/base";
// import QRCode from "react-native-qrcode-svg";

const ParkingTicket = ({ navigation, route }) => {
  const {parkingname,address,parkingLot,id,vehicleName,startDate,startTime,endTime} = route.params
  // useEffect(()=>{

  // },[])
  return (
    <SafeAreaView>
      <Card width={"92%"} height={"95%"} containerStyle={{ borderRadius: 4 }}>
        <View style={{alignItems:"center" }}>
          {/* <QRCode value="salkjdhiowhdlksahd"  size={250}/> */}
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.textTitle}>Name</Text>
        <Text style={styles.textTitle}> Vehicle</Text>
        </View>
        <Text/>
        <View style={styles.rowstyle}>
        <Text style={styles.text}>Hi</Text>
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
        <Text style={styles.text}>Ivan</Text>
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
  ,justifyContent:"space-evenly"
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
