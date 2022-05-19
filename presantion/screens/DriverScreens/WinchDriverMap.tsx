import { StyleSheet, Text, View } from "react-native";
import UserData from "../../components/driverComponents/userData/UserData";
import Map from "../../containers/DriverContainers/Map";

export default function WinchDriverMap() {
  return (
    <View>
      <Map />
      <View>
        <UserData />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
