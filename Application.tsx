import { View, Image, KeyboardAvoidingView, Platform } from "react-native";
import Login from "./presantion/screens/LoginScreen/Login";
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { createStackNavigator } from "@react-navigation/stack";
// @ts-ignore
import React from "react";
import Register from "./presantion/screens/RegisterScreen/RegisterScreen";
import { useAppState } from "./config";
import HomeScreen from "./presantion/screens/HomeScreen/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkShopScreen from "./presantion/screens/WorkShopsScreen/WorkShopScreen";
import RentScreen from "./presantion/screens/RentScreen/RentScreen";
import WinchScreen from "./presantion/screens/WinchScreen/WinchScreen";

const Taps = createBottomTabNavigator();
const Application = () => {
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({ OpenSans_700Bold });
  const {
    authentication: { user },
  } = useAppState();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E5E5E5",
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {user ? (
          <Taps.Navigator
            tabBarOptions={{
              activeTintColor: "#265A60",
              inactiveTintColor: "#000",
              style: {
                backgroundColor: "#fff",
              },
            }}
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let IconName;
                let rn = route.name;
                if (rn === "Home") {
                  IconName = focused
                    ? require("./assets/home_active.png")
                    : require("./assets/home.png");
                } else if (rn === "Rent") {
                  IconName = focused
                    ? require("./assets/rent_active.png")
                    : require("./assets/rent.png");
                } else if (rn === "WorkShops") {
                  IconName = focused
                    ? require("./assets/workshop-active.png")
                    : require("./assets/workshop.png");
                } else if (rn === "Winch") {
                  IconName = focused
                    ? require("./assets/winch.png")
                    : require("./assets/winch.png");
                }
                return (
                  <Image source={IconName} style={{ width: 20, height: 20 }} />
                );
              },
            })}
          >
            <Taps.Screen name="Home" component={HomeScreen} />
            <Taps.Screen name="WorkShops" component={WorkShopScreen} />
            <Taps.Screen name="Rent" component={RentScreen} />
            <Taps.Screen name="Winch" component={WinchScreen} />
          </Taps.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Application;
