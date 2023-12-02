import { Dimensions, StyleSheet, Text, View,TouchableOpacity, Image } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CarSpot = (prop) => {
    
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={prop.select}  > 
        {/* disabled={!prop.st.disabled} */}
          <View style={styles.longbox}>
            {
                prop.st.available?<Text>{prop.st.parkingLot}</Text>
                :<Image
                style={{ width: windowWidth / 4, height: windowHeight / 4 }}
                source={require('../assets/car_icon.jpg')}
                resizeMode="center"
              />
            }
          </View>
        </TouchableOpacity>
      </View>
      <Text/>
    </View>
  );
};

export default CarSpot;
const styles = StyleSheet.create({
  longbox: {
    borderWidth:1,
    borderRadius:6,
    width:windowWidth*0.25,
    height:windowHeight*0.25,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end"
  },
})

