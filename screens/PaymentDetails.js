import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card,Avatar } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
const PaymentDetails = ({navigation,route}) => {
  const {name,icon,parkingname,address,parkingLot,id,vehicleName} = route.params
  return (
    <View>
      <Card width={"90%"} height={"50%"} containerStyle={{ borderRadius: 4 }}>
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
          <Text style={styles.content}>January 16,2024</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Duration</Text>
          <Text style={styles.content}>2</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Hours</Text>
          <Text style={styles.content}>09:00AM - 13:00PM</Text>
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
          <Text style={styles.content}>2 Riyals</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Tax & Fees</Text>
          <Text style={styles.content}>1 Riyals</Text>
        </View>
        <Text/>
        <View style={styles.details}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.content}>3 Riyals</Text>
        </View>
        </View>
      </Card>
      <Card 
        width={"90%"}
        height={"10%"}
        containerStyle={{ borderRadius: 4 }} 
      >
        <View style={styles.details}>
          <Avatar rounded source={{ uri: icon }} size="medium" />
          <Text style={{paddingTop:10}}>{name}</Text>
          </View>
      </Card>
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
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: 16,
    color: "gray",
    fontFamily: "sans-serif",
  },
});
