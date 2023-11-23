import { Dimensions, StyleSheet, Text, View,TouchableOpacity, Image } from "react-native";
import React from "react";

const CarSpot = (prop) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={prop.select}>
          <View style={styles.longbox}>
            {
                prop.st.disabled?<Image
                style={{ width: windowWidth / 4, height: windowHeight / 4 }}
                source={prop.st.pic}
                resizeMode="center"
              />:<Text>{prop.st.name}</Text>
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

