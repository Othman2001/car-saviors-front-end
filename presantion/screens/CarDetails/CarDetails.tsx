import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Text } from "@ui-kitten/components";
import TopHeader from "../../components/common/topHeader";
import CarDetailsCard from "../../components/carDetails/CarDetailsCard";
import CarTable from "../../components/carDetails/CarTable";
import { carSchema } from "../../../application/rental/state";
import moment from "moment";
import i18n from "../../../config/i18n/config";

export default function CarDetails() {
  const route = useRoute();
  // @ts-ignore
  const car: carSchema = route.params?.car;
  useEffect(() => {
    console.log(car, "car");
  }, []);
  const [date, setDate] = useState({
    startDate: 1,
    endDate: 3,
    displayedDate: moment(),
  });

  const handleDateChange = (dates: any) => {
    console.log(dates, "dates");
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader />
      <Text style={styles.title} category="h6">
        {i18n.t("carDetails.title")}
      </Text>
      <CarDetailsCard {...car} />
      <CarTable
        carName={car.carBrand + car.carModel + car.carModelYear}
        price={car.pricePerDay}
        daysCount={3}
        total={4600}
      />
      <View style={styles.buttonContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: {
    paddingTop: 70,
    color: "black",
    marginLeft: 60,
    marginBottom: 30,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    marginTop: 30,
    marginLeft: 90,
  },
  button: {},
});
