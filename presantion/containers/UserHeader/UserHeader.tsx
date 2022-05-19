import { View, Text } from "react-native";
import React from "react";
import UserHeaderComponent from "../../components/userHeader/UserHeader";
import { useAppState } from "../../../config";

interface IUserHeaderProps {
  isDriver?: boolean;
}
export default function UserHeader({ isDriver }: IUserHeaderProps) {
  const {
    authentication: { user, rentedCar, rentingCar, visitedWorkShops },
  } = useAppState();
  return (
    <UserHeaderComponent
      user={user && user}
      rentedCar={rentedCar}
      visitedWorkshops={visitedWorkShops}
      rentingCar={rentingCar}
      isDriver={isDriver}
    />
  );
}
