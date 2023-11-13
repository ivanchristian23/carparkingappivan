import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import AccountScreen from './AccountScreen';
const Drawer = createDrawerNavigator();
const Drawers = () => {
    
  return (
    <View>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="BookingScreen" component={BookingScreen} />
        <Drawer.Screen name="AccountScreen" component={AccountScreen} />
      </Drawer.Navigator>
    </View>
  )
}

export default Drawers

const styles = StyleSheet.create({})