import { View, Image, KeyboardAvoidingView, Platform } from "react-native";
import Login from "./presantion/screens/LoginScreen/Login";
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Register from "./presantion/screens/RegisterScreen/RegisterScreen";
import { useAppState } from "./config";
import HomeScreen from "./presantion/screens/HomeScreen/HomeScreen";

const Application = () => {
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({ OpenSans_700Bold });
  const {
    authentication: { user },
  } = useAppState();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E5E5E5",
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          )}
        </Stack.Navigator>
      </KeyboardAvoidingView>

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
          source={require("./assets/circle.png")}
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
    </View>
  );
};

export default Application;
