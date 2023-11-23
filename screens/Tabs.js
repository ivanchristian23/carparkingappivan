import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import AccountScreen from './AccountScreen';
import {FontAwesome } from 'react-native-vector-icons'
import Drawers from './Drawers';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:'darkblue'}}>
      <Tab.Screen name="Drawers" component={Drawers} options={{
            headerShown: false,tabBarButton: props => null,
          }}/>
      <Tab.Screen name="HomeScreen" component={HomeScreen}  options={{
      tabBarLabel: 'Home',
      
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="home" color={color} size={size} />
      ),}}/>
      <Tab.Screen name="BookingScreen" component={BookingScreen} options={{
      tabBarLabel: 'Bookings',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="calendar-check-o" color={color} size={size} />
      ),}}/>
      <Tab.Screen name="AccountScreen" component={AccountScreen} options={{
      tabBarLabel: 'Account',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="user" color={color} size={size} />
      ),headerTitle:"Profile"}}/>
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})