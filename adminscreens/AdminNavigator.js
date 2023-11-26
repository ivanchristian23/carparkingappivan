import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexAdmin from './IndexAdmin';
import AddArea from './AddArea';
import AddParking from './AddParking';
const Stack = createNativeStackNavigator();
const AdminNavigator = () => {
    
  return (
    <Stack.Navigator initialRouteName="IndexAdmin">
        <Stack.Screen
          name="IndexAdmin"
          component={IndexAdmin}
        //   options={{
        //     headerShown: false,
        //   }}
        />
        <Stack.Screen
          name="AddArea"
          component={AddArea}
        //   options={{
        //     headerShown: false,
        //   }}
        />
         <Stack.Screen
          name="AddParking"
          component={AddParking}
        //   options={{
        //     headerShown: false,
        //   }}
        />
        </Stack.Navigator>
  )
}

export default AdminNavigator

const styles = StyleSheet.create({})