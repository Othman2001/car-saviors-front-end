import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text } from "@ui-kitten/components";
import TopHeader from "../../components/common/topHeader";
import CarDetailsCard from "../../containers/CarDetailsCard/CarDetailsCard";
import CarTable from "../../components/carDetails/CarTable";
import { carSchema } from "../../../application/rental/state";
import i18n from "../../../config/i18n/config";
import DateRangePicker from "../../components/carDetails/DateRange";
import { Flex } from "../../components/carDetails/style";
import { useRentalActions } from "../../../application/custom-hooks/useRentalActions";
import { useRentalState } from "../../../application/custom-hooks/useRentalState";

export default function CarDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const car: carSchema = route.params?.car;
  const scrollViewRef = useRef();
  const { setDates, setTotal, rentCar } = useRentalActions();
  const { startDate, endDate, message, error } = useRentalState();

  const [isVisible, setInvisible] = useState(false);

  const handleDateChange = (startDate: string, endDate: string) => {
    setDates({ startDate, endDate });
    setTotal({ pricePerDay: car.pricePerDay });
  };

  const handleConfirmation = () => {
    if (!startDate || !endDate) {
      // @ts-ignore
      return;
    } else {
      rentCar({
        carId: car.id,
        carOwnerId: car.carOwnerId,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // @ts-ignore
        ref={scrollViewRef}
        onContentSizeChange={() =>
          // @ts-ignore
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
              setInvisible(true);
              scrollViewRef.current.scrollToEnd();
            }}
          >
            Book Now
          </Button>
          {isVisible && (
            <View>
              <View style={{ flex: 1 }}>
                <DateRangePicker
                  onSuccess={(s: string, e: string) => handleDateChange(s, e)}
                  theme={{ markColor: "red", markTextColor: "white" }}
                />
              </View>
              <Flex
                style={{
                  marginLeft: 3,
                }}
              >
                <Button status="basic" onPress={handleConfirmation}>
                  Confirm
                </Button>
                <Button
                  status="danger"
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                  onPress={() => {
                    setInvisible(false);
                  }}
                >
                  Cancel
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
