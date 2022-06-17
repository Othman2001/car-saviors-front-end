import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DateRangePicker from "../components/carDetails/DateRange";

export default function Booking() {
  const [startDate, endDate] = useState();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <DateRangePicker
          onSuccess={(s, e) => alert(s + "||" + e)}
          theme={{ markColor: "red", markTextColor: "white" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
