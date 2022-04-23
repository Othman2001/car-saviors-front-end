import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CarDetails from "../screens/CarDetails/CarDetails";
import RentScreen from "../screens/RentScreen/RentScreen";
import Booking from "../screens/Booking";
import Confirm from "../screens/ConfirmationScreen/ConfirmationScreen";

export default function RentalNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Rent" component={RentScreen} />
      <Stack.Screen
        component={CarDetails}
        name="RentalCarDetails"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
