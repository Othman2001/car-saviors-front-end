import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TopHeader() {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 1000,
        top: -10,
        left: 0,
        right: 0,
        marginLeft: -100,
      }}
    >
      <Image
        source={require("../../../assets/circle.png")}
        style={{
          width: 140,
          height: 140,
          top: 0,
          left: 0,
          right: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
