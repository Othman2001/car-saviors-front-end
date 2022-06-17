import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import WorkshopDetails from "../components/workshopDetailes/WorkshopDetails";
import Brands from "../screens/Brands/Brands";
import Workshops from "../screens/WorkShops/Workshops";

export default function CarWorkshopsNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Brands" component={Brands} />
      <Stack.Screen name="Workshops" component={Workshops} />
      <Stack.Screen name="WorkshopsDetails" component={WorkshopDetails} />
    </Stack.Navigator>
  );
}
