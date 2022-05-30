import React, { useEffect } from "react";
import { View, Image, UIManager, LayoutAnimation } from "react-native";
import LoginForm from "../../containers/LoginForm/LoginForm";

export default function Register() {
  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }, []);

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
