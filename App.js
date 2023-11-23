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
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectVehicle">
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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectVehicle"
        component={SelectVehicle}
        options={{
          headerShown: false,
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
