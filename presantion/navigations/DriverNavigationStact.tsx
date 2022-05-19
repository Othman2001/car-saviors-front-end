import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/DriverScreens/HomeScreen";
import WinchDriverMap from "../screens/DriverScreens/WinchDriverMap";

export default function DriverStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DriverMap" component={WinchDriverMap} />
    </Stack.Navigator>
  );
}
