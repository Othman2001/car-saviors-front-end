import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text } from "@ui-kitten/components";
import TopHeader from "../../components/common/topHeader";
import CarDetailsCard from "../../components/carDetails/CarDetailsCard";
import CarTable from "../../components/carDetails/CarTable";
import { carSchema } from "../../../application/rental/state";
import i18n from "../../../config/i18n/config";
import DateRangePicker from "../../components/carDetails/DateRange";
import { Flex } from "../../components/carDetails/style";
import { useActions, useAppState } from "../../../config";

export default function CarDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const car: carSchema = route.params?.car;
  useEffect(() => {
    console.log(car, "car");
  }, []);
  const scrollViewRef = useRef();
  const {
    rental: { setDates, setTotal, rentCar },
  } = useActions();
  const {
    rental: { startDate, endDate, message },
  } = useAppState();
  const [isVisibale, setIsvisible] = useState(false);

  const handleDateChange = (startDate: string, endDate: string) => {
    setDates({ startDate, endDate });
    setTotal({ pricePerDay: car.pricePerDay });
  };
  const handleConfimration = () => {
    if (!startDate || !endDate) {
      alert(i18n.t("carDetails.alert"));
      return;
    } else {
      rentCar({
        carId: car.id,
        carOwnerId: car.carOwnerId,
      });
      navigation.navigate("Confirm");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <TopHeader />
        <Text style={styles.title} category="h6">
          {i18n.t("carDetails.title")}
        </Text>
        <CarDetailsCard {...car} />
        <CarTable
          carName={car.carBrand + car.carModel + car.carModelYear}
          price={car.pricePerDay}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              setIsvisible(true);
              scrollViewRef.current.scrollToEnd();
            }}
          >
            Book Now
          </Button>
          {isVisibale && (
            <View>
              <View style={{ flex: 1 }}>
                <DateRangePicker
                  onSuccess={(s, e) => handleDateChange(s, e)}
                  theme={{ markColor: "red", markTextColor: "white" }}
                />
              </View>
              <Flex
                style={{
                  marginLeft: 3,
                }}
              >
                <Button status="basic" onPress={handleConfimration}>
                  Confirm
                </Button>
                <Button
                  status="danger"
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                  onPress={() => {
                    setIsvisible(false);
                  }}
                >
                  Cancel{" "}
                </Button>
              </Flex>
            </View>
          )}
        </View>
      </ScrollView>
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
