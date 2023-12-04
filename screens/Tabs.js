import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import AccountScreen from './AccountScreen';
import {FontAwesome, Feather } from 'react-native-vector-icons'
import Drawers from './Drawers';
import HelpPage from './HelpPage';
const Tab = createBottomTabNavigator();
const Tabs = ({navigation,route}) => {
  const {id} = route.params
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:'darkblue'}}>
      <Tab.Screen name="Drawers" component={Drawers} initialParams={{id:id}} options={{
        headerShown:false,
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="home" color={color} size={size} />
      ),}}/>
      <Tab.Screen name="BookingScreen" component={BookingScreen} initialParams={{id:id}} options={{
        headerTitle:"My Bookings",
      tabBarLabel: 'Bookings',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="calendar-check-o" color={color} size={size} />
      ),}}/>
      <Tab.Screen name="HelpPage" component={HelpPage} options={{
      tabBarLabel: 'Help',
      tabBarIcon: ({ color, size }) => (
        <Feather name="help-circle" color={color} size={size} />
      ),headerTitle:"Get to Know Us"}}/>
      <Tab.Screen name="AccountScreen" component={AccountScreen} initialParams={{id:id}} options={{
      tabBarLabel: 'Account',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="user" color={color} size={size} />
      ),headerTitle:"Profile"}}/>
      
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})