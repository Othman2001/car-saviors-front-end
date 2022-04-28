import React from "react";
import { KeyboardAvoidingView, Platform, View, Image } from "react-native";
import LoginForm from "../../containers/LoginForm/LoginForm";

export default function Register() {
  return (
    <View>
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
      <LoginForm />
    </View>
  );
}
