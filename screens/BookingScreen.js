import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '@rneui/themed';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BookingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerIcons}>
        <View style={styles.icon}>
        <Text style={{alignSelf:'center'}}>Ongoing</Text>
        </View>
        <View style={styles.icon}>
        <Text style={{alignSelf:'center'}}>Completed</Text>
        </View>
        <View style={styles.icon}>
        <Text style={{alignSelf:'center'}}>Canceled</Text>
        </View>
        
      </View>
      <Card height={"38%"} width={'90%'} containerStyle={{borderRadius:10}}>
        <View style={styles.cardStyle}>
          <Image source={require("../assets/parking.jpg")} style={styles.image_right}/>
          <View style={{justifyContent:'space-evenly',paddingLeft:20}}>
            <Text>Al Wakra Parking</Text>
            <Text>Al Wakra</Text>
            <Text>10 QR/ 6 hours</Text>
            <View style={{borderWidth:2,borderColor:'red',borderRadius:5,height:30,width:75,paddingTop:5}}>
            <Text style={{alignSelf:'center'}}>Canceled</Text>
            </View>
            
          </View>
        </View>
        </Card>
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20
  },
  headerIcons:{
    flexDirection:'row'
    ,justifyContent:'space-around'
  },
  icon:{
    borderColor:'darkblue'
    ,borderWidth:2
    ,borderRadius:10
    ,height:35
    ,width:90,
    paddingTop:5
  },
  cardStyle:{
    flexDirection:'row',

  },
  image_right:{
    width:windowWidth/4
    ,height:windowHeight/11
  },
})