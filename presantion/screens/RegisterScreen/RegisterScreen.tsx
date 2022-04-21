// @ts-ignore
import React from "react";
import { Image, View } from "react-native";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";
export default function RegisterScreen() {
  return (
    <>
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
            width: 240,
            height: 240,
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      </View>
      <RegisterForm />
    </>
  );
}
