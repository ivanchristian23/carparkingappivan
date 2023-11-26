import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { Button,Card } from "@rneui/themed";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DetailScreen = ({ navigation, route }) => {
  const { address, distance, picture, name, status, vacant } = route.params;
  useEffect(() => {
    // do something
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={{ uri: picture }} />
      <Text />
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textAddress}>{address}</Text>
      <Text />
      <View style={styles.icons}>
        <View style={styles.iconText}>
          <Text style={{ alignSelf: "center", color: "darkblue" }}>
            {distance} Km
          </Text>
        </View>
        <View style={[styles.iconText]}>
          <Text style={{ alignSelf: "center", color: "darkblue" }}>
            {vacant}
          </Text>
        </View>
        <View style={styles.iconText}>
          <Text style={{ alignSelf: "center", color: "darkblue" }}>
            {status}
          </Text>
        </View>
      </View>
      <Text />
      <Text style={styles.textDescription}>Description</Text>
      <Text />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in cillum pariatur. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Read more...
      </Text>
      <Text/>
      <Text/>
      
      <Card width={"90%"} height={'10%'} containerStyle={{borderRadius:5,backgroundColor:'lightblue'}}> 
          <Text style={{alignSelf:"center",fontSize:17,fontWeight: "600",}}>2 QR</Text>
          <Text style={{alignSelf:"center",fontSize:13}}>per Hour</Text>
      </Card>
      <Text/>
      <Text/>
      <Text/>
      <Text/>
      <Text/>
      <Text/>
      
      
      <Button
        title="Book Parking"
        color={"darkblue"}
        containerStyle={{ borderRadius: 5}}
        onPress={() => navigation.navigate("PickParking", route.params)}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  mainImage: {
    alignSelf: "center",
    height: windowHeight / 4.5,
    width: windowWidth / 1,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconText: {
    borderRadius: 10,
    borderColor: "darkblue",
    borderWidth: 2,
    height: 25,
    width: 80,
  },
  textName: {
    fontSize: 20,
    fontWeight: "600",
  },
  textAddress: {
    fontSize: 17,
    color: "grey",
  },
  textDescription: {
    fontSize: 17,
    fontWeight: "600",
  },
});
