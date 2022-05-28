import { Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import WinchScreen from "../screens/WinchScreen/WinchScreen";
import CarWorkshopsNavigation from "./CarWorkshopsNavigation";
import Profile from "../screens/Profile/Profile";
import Requests from "../screens/Requsets/Requests";

const Taps = createBottomTabNavigator();

export default function CarOwnerNavigation() {
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
          } else if (rn === "WorkShops") {
            IconName = focused
              ? require("../../assets/workshop-active.png")
              : require("../../assets/workshop.png");
          } else if (rn === "Winch") {
            IconName = focused
              ? require("../../assets/winchActive.png")
              : require("../../assets/winchActive.png");
          } else if (rn === "Offer") {
            IconName = focused
              ? require("../../assets/offer_active.png")
              : require("../../assets/offer.png");
          } else if (rn === "Profile") {
            IconName = focused
              ? require("../../assets/profileActive.png")
              : require("../../assets/profile.png");
          }
          return <Image source={IconName} style={{ width: 20, height: 20 }} />;
        },
      })}
    >
      <Taps.Screen name="Home" component={HomeScreen} />
      <Taps.Screen name="WorkShops" component={CarWorkshopsNavigation} />
      <Taps.Screen name="Winch" component={WinchScreen} />
      <Taps.Screen name="Request" component={Requests} />
      <Taps.Screen name="Profile" component={Profile} />
    </Taps.Navigator>
  );
}
