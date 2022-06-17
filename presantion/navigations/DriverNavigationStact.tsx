import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FinishTrip from "../screens/DriverScreens/FinishTrip";
import HomeScreen from "../screens/DriverScreens/HomeScreen";
import Lodaing from "../screens/DriverScreens/Lodaing";
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
      <Stack.Screen name="DriverLoading" component={Lodaing} />
      <Stack.Screen name="DriverFinishing" component={FinishTrip} />
    </Stack.Navigator>
  );
}
