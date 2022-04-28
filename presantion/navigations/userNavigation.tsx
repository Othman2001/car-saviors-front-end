import { Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import WorkShopScreen from "../screens/WorkShopsScreen/WorkShopScreen";
import WinchScreen from "../screens/WinchScreen/WinchScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RentalNavigation from "./RentalNavigation";
import OfferScreen from "../screens/OfferScreen/OfferScreen";

const Taps = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function UserNavigation() {
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
      <Taps.Screen name="Home" component={HomeScreen} />
      <Taps.Screen name="WorkShops" component={WorkShopScreen} />
      <Taps.Screen name="Rent" component={RentalNavigation} />
      <Taps.Screen name="Winch" component={WinchScreen} />
      <Taps.Screen name="Offer" component={OfferScreen} />
    </Taps.Navigator>
  );
}
