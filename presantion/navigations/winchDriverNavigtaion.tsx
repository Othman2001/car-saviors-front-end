import { Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/DriverScreens/HomeScreen";
import DriverStack from "./DriverNavigationStact";

const Taps = createBottomTabNavigator();

export default function WinchDriverNavigation() {
  const routesNames = {
    Home: {
      en: "Home",
      ar: "الرئيسية",
    },
    WorkShop: {
      en: "WorkShop",
      ar: "الصيانة",
    },
    Winch: {
      en: "Winch",
      ar: "ونش",
    },
    Rental: {
      en: "Rental",
      ar: "احجز",
    },
    OFFER: {
      en: "Offer",
      ar: "عرض",
    },
  };
  return (
    <Taps.Navigator
      // @ts-ignore
      tabBarOptions={{
        activeTintColor: "#265A60",
        inactiveTintColor: "#000",

        style: {
          backgroundColor: "#fff",
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        title: route.name,
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          let rn = route.name;
          if (rn === "Home") {
            IconName = focused
              ? require("../../assets/home_active.png")
              : require("../../assets/home.png");
          } else if (rn === "Rent") {
            IconName = focused
              ? require("../../assets/rent_active.png")
              : require("../../assets/rent.png");
          } else if (rn === "WorkShops") {
            IconName = focused
              ? require("../../assets/workshop-active.png")
              : require("../../assets/workshop.png");
          } else if (rn === "Winch") {
            IconName = focused
              ? require("../../assets/winch.png")
              : require("../../assets/winch.png");
          } else if (rn === "Offer") {
            IconName = focused
              ? require("../../assets/offer_active.png")
              : require("../../assets/offer.png");
          }
          return <Image source={IconName} style={{ width: 20, height: 20 }} />;
        },
      })}
    >
      <Taps.Screen name="Driver" component={DriverStack} />
    </Taps.Navigator>
  );
}
