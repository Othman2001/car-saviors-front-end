import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Location from "../components/LocationComponent/Location";
import Map from "../screens/Map/Map";
import Rejected from "../screens/Rejected/Rejected";
import Loading from "../screens/Loading/Loading";
import Finished from "../screens/Finished/Finished";

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
        name="MapUser"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Rejected}
        name="Rejected"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Loading}
        name="Loading"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Finished}
        name="Finished"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
