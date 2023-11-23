import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'
import {Feather } from 'react-native-vector-icons'

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text/>
      <View style={{alignItems:'center',paddingBottom:20}}> 
          <Avatar size="xlarge" rounded source={require("../assets/parking.jpg")}/>
          <Text/>
          <Text>Adam Marcus</Text>
          <Text/>
          <Text>adam@yahoo.com</Text>
      </View>
      <Text/>
      <View style={styles.icons}>
      <Feather name="user" size={40} />
        <Text style={styles.name}>Edit Profile</Text>
      </View>
      <Text/>
      <View style={styles.icons}>
      <Feather name="user" size={40} />
        <Text style={styles.name}>Add Card</Text>
      </View>
      <Text/>
      <View style={styles.icons}>
      <Feather name="user" size={40} />
        <Text style={styles.name}>Add Vehicle</Text>
      </View>
      <Text/>
      <View style={styles.icons}>
      <Feather name="user" size={40} />
        <Text style={styles.name}>Help</Text>
      </View>
      <Text/>
      <View style={styles.icons}>
      <Feather name="user" size={40} />
        <Text style={styles.name}>Logout</Text>
      </View>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20
    
  },
  icons:{
    flexDirection:'row'
  },
  name:{
    paddingTop:8,
    fontSize:20
    ,paddingLeft:10
  }
})