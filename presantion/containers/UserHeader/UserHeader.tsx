import { View, Text } from "react-native";
import React from "react";
import UserHeaderComponent from "../../components/userHeader/UserHeader";
import { useAppState } from "../../../config";

export default function UserHeader() {
  const {
    authentication: { user, rentedCar, rentingCar, visitedWorkShops },
  } = useAppState();
  return (
    <UserHeaderComponent
      user={user && user}
      rentedCar={rentedCar}
      visitedWorkshops={visitedWorkShops}
      rentingCar={rentingCar}
    />
  );
}
