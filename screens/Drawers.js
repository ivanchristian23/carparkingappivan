import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import BookingScreen from "./BookingScreen";
import AccountScreen from "./AccountScreen";
import AddVehicle from "./AddVehicle";
import AddCard from "./AddCard";
import SecurityScreen from "../AdditionalScreens/SecurityScreen"
import NotificationScreen from "../AdditionalScreens/SecurityScreen"
const Drawer = createDrawerNavigator();
const Drawers = ({navigation,route}) => {
  const {id} = route.params
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        drawerPosition: "left",
        headerLeft: () => <DrawerToggleButton />,
        headerRight: false,
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => <DrawerToggleButton />,
          headerRight: false,
        }}
        initialParams={{id:id}}
      />
      <Drawer.Screen
        name="AddVehicle"
        component={AddVehicle}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => <DrawerToggleButton />,
          headerRight: false,
        }}
        initialParams={{id:id}}
      />
      <Drawer.Screen
        name="AddCard"
        component={AddCard}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => <DrawerToggleButton />,
          headerRight: false,
        }}
        initialParams={{id:id}}
      />
      <Drawer.Screen
        name="AccountScreen"
        component={AccountScreen}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => <DrawerToggleButton />,
          headerRight: false,
        }}
        initialParams={{id:id}}
      />
      
      <Drawer.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => <DrawerToggleButton />,
          headerRight: false,
        }}
      />
      <Drawer.Screen
        name="SecurityScreen"
        component={SecurityScreen}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => <DrawerToggleButton />,
          headerRight: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawers;

const styles = StyleSheet.create({});
