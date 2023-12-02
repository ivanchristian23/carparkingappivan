import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card,Avatar } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import { Button } from "@rneui/base";
import { getDocs, collection,getDoc,doc,setDoc } from "firebase/firestore";
import { db } from "./config";
const PaymentDetails = ({navigation,route}) => {
  const {paymentName,paymenticon,parkingname,address,parkingLot,id,vehicleName,startDate,startTime,endTime,payment} = route.params
  const [bookings,setBookings] = useState([])
  const [status,setStatus] = useState("Ongoing")
  useEffect(() => {
    fetchData();
    // console.log(vehicles);
    // console.log(radio);
  }, []);
  const fetchData = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    let temp = [];
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data().vehicles);
      const items = docSnap.data().bookings;
      if (items == undefined || items == null) {
        console.log("Creating a new Array");
      } else {
        items.forEach((i) => {
          temp.push(i);
        });
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setBookings(temp);
  };
  const store = async () => {
    let temp = [...bookings];
    temp.push({
      address: address,
      parkingname: parkingname,
      // picture: picture,
      status: status,
      // payment:payment
    });
    console.log(temp);
    setBookings(temp)
    const docRef = doc(db, "customers", id);
    await setDoc(docRef, { bookings: temp }, { merge: true })
      .then(() => {
        console.log("data submitted");
        setBookings([]);
        navigation.replace("ParkingTicket", {
          parkingname: parkingname,
          parkingLot: parkingLot,
          address: address,
          id: id,
          startDate: startDate,
          startTime: startTime,
          endTime: endTime,
          payment:payment
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <View>
      <Card width={"90%"} height={"45%"} containerStyle={{ borderRadius: 4 }}>
        <View style={styles.details}>
          <Text style={styles.title}>Parking Area</Text>
          <Text style={styles.content}>{parkingname}</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Address</Text>
          <Text style={styles.content}>{address}</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Vehicle</Text>
          <Text style={styles.content}>{vehicleName}</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Parking Spot</Text>
          <Text style={styles.content}>{parkingLot} </Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Date</Text>
          <Text style={styles.content}>{startDate}</Text>
        </View>
        <Text/>
        {/* <View style={styles.details}>
          <Text style={styles.title}>Duration</Text>
          <Text style={styles.content}>{duration}</Text>
        </View> */}
        {/* <Text/> */}
        <View style={styles.details}>
          <Text style={styles.title}>Hours</Text>
          <Text style={styles.content}>{startTime} - {endTime}</Text>
        </View>
      </Card>
      <Card
        width={"90%"}
        height={"20%"}
        containerStyle={{ borderRadius: 4 }}
      >
        <View>
        <View style={styles.details}>
          <Text style={styles.title}>Amount</Text>
          <Text style={styles.content}>{payment} Riyals</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Tax & Fees</Text>
          <Text style={styles.content}>1 Riyals</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.content}>{payment+1} Riyals</Text>
        </View>
        </View>
      </Card>
      <Card 
        width={"90%"}
        height={"10%"}
        containerStyle={{ borderRadius: 4 }} 
      >
        <View style={styles.details}>
          <Avatar rounded source={{ uri: paymenticon }} size="medium" />
          <Text style={{paddingTop:10}}>{paymentName}</Text>
          </View>
      </Card>
      <Button
        title="Confirm"
        color={"darkblue"}
        containerStyle={{ borderRadius: 5}}
        onPress={store}
      />
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    color: "black",
    fontSize: 16,

  },
  title: {
    fontSize: 16,
    color: "gray",
  },
});
