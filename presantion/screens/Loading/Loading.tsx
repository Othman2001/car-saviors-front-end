import { Alert, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { useWinchState } from "../../../application/custom-hooks/useWinchState";
import { useNavigation } from "@react-navigation/native";
import { useWinchActions } from "../../../application/custom-hooks/useWinchActions";
import { RequestSchema } from "../../../application/winch/types";
import { useUserInfo } from "../../../application/custom-hooks/useUserInfo";
import { setData } from "../../custom/setData";
import LottieView from "lottie-react-native";

export default function Loading() {
  const animation = useRef(null);
  const {
    currentWinchDriverId,
    winchDrivers,
    requestState,
    destination,
    origin,
    request,
  } = useWinchState();
  const {
    getTheNextDriver,
    setWinchDriverId,
    setRequest,
    setDriverOrigin,
    resetTheStore,
  } = useWinchActions();
  const { user } = useUserInfo();
  const { noOtherDrivers } = useWinchState();

  const navigation = useNavigation();
  useEffect(() => {
    winchDrivers[0].id
      ? console.log("driver found")
      : navigation.navigate("Location");
    noOtherDrivers && navigation.navigate("Home");
    if (currentWinchDriverId === "getTheNextDriver") {
      setTimeout(() => {
        if (winchDrivers[0].isLastDriver) {
          alert("done");
          navigation.navigate("Home");
        } else if (winchDrivers.length > 0) {
          getTheNextDriver();
          const Request: RequestSchema = {
            firstName: winchDrivers[0]?.firstName,
            lastName: winchDrivers[0]?.lastName,
            price: 200,
            winchDriverId: winchDrivers[0]?.id,
            userName: user?.displayName,
            userId: user?.uid,
            userDestination: {
              latitude: destination.lat,
              longitude: destination.lng,
            },
            destination: {
              latitude: origin.lat,
              longitude: origin.lng,
            },
            isAcccepted: true,
            isLastDriver: winchDrivers.length === 1 ? true : false,
          };
          setWinchDriverId({ winchDriverId: winchDrivers[0].id });
          setRequest({ request: Request });
          const latitude =
            winchDrivers[0].geopoint.latitude ||
            winchDrivers[0].geopoint._latitude;
          const longitude =
            winchDrivers[0].geopoint.longitude ||
            winchDrivers[0].geopoint._longitude;
          setDriverOrigin({
            driverOrigin: {
              latitude,
              longitude,
            },
          });
          request && setData(request);
          navigation.navigate("MapUser");
        }
      }, 3000);
    } else {
      if (currentWinchDriverId === "fake") {
        if (winchDrivers[0]) {
          setTimeout(() => {
            setWinchDriverId({ winchDriverId: winchDrivers[0].id });
            navigation.navigate("MapUser");
          }, 1500);
        } else {
          navigation.navigate("Home");
        }
      }
    }
  }, [requestState, origin, destination]);
  return (
    <SafeAreaView style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./animation.json")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#265A60",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
