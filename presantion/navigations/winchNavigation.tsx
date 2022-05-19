import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Location from "../components/LocationComponent/Location";
import Map from "../screens/Map/Map";

export default function WinchNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        component={Location}
        name="Location"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Map}
        name="Map"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
