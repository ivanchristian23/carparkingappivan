import 'react-native-gesture-handler'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import Tabs from "./screens/Tabs";
import RegisterScreen from "./screens/RegisterScreen";
import AddVehicle from "./screens/AddVehicle";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import PaymentDetails from "./screens/PaymentDetails";
import SelectVehicle from "./screens/SelectVehicle";
import PaymentMethod from "./screens/PaymentMethod";
import AddCard from "./screens/AddCard";
import PickParking from "./screens/PickParking";
import AdminNavigator from './adminscreens/AdminNavigator';
import TimePickerScreen from './screens/TimePickerScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TimePickerScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddVehicle"
          component={AddVehicle}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
            
          }}
        />
        <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerTitle:"Parking Details"
        }}
      />
      
      <Stack.Screen
        name="PickParking"
        component={PickParking}
        options={{
          headerTitle:"Book Your Slot"
        }}
      />
      <Stack.Screen
        name="TimePickerScreen"
        component={TimePickerScreen}
        options={{
          headerTitle:"Pick a Time Slot"
        }}
      />
      <Stack.Screen
        name="SelectVehicle"
        component={SelectVehicle}
        options={{
          headerTitle: "Select a Vehicle"
        }}
      />
      <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{
            headerTitle:"Choose a Payment Method"
          }}
        />
        <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{
          headerTitle:"Summary Review"
        }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{
          headerTitle:"Add a New Card"
        }}
      />
      <Stack.Screen
        name="AdminNavigator"
        component={AdminNavigator}
        options={{
          headerShown: false,
        }}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
