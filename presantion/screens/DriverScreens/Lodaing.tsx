import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Lodaing() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DriverMap");
    }, 2000);
  }, []);
  return (
    <View>
      <Text>Lodaing</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
