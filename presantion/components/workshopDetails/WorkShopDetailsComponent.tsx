import React, { useRef, useState } from "react";
import TopHeader from "../common/topHeader";
import * as Styled from "./style";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { Button } from "@ui-kitten/components";
import { View, ScrollView, Alert } from "react-native";
import { Flex } from "../carDetails/style";
import DateRangePicker from "./SingleDatePicker";
import { useRoute } from "@react-navigation/native";
import { workshopSchema } from "../../../application/workshops/types";
interface IWorkshopDetailsProps {
  bookDate: (payload: {
    workshopName: string;
    workshopId: string;
    userId: string;
    userName: string;
    pickedDate: string | Date;
  }) => Promise<void>;
  userId: string | undefined;
  userName: string | null | undefined;
  description: string;
  descriptionAr: string;
  brandImage: string;
}
export default function WorkShopDetailsComponent({
  bookDate,
  userId,
  userName,
  brandImage,
  description,
}: IWorkshopDetailsProps) {
  const { fontFamily, lng } = useTheme();
  const [showBooking, setShowBooking] = useState<boolean>(false);
  const [date, setDate] = useState<string | Date | undefined>();

  const route = useRoute();
  // @ts-ignore
  const workshop: workshopSchema = route?.params?.workshop;
  const handleConfirmation = () => {
    if (!date) {
    }
    bookDate({
      workshopId: workshop.id,
      workshopName: workshop.name,
      userId,
      userName,
      pickedDate: date,
    });
  };
  const handleChange = (date: string) => {
    setDate(date);
  };
  return (
    <Styled.WorkshopDetailsContainer>
      <TopHeader />
      <ScrollView>
        <Styled.ScreenTitle
          isAr={lng === "ar" ? true : false}
          fontFamily={fontFamily}
        >
          Summary
        </Styled.ScreenTitle>
        <Styled.WorkshopContainer>
          <Styled.WorkshopTitle
            fontFamily={fontFamily}
            isAr={lng === "ar" ? true : false}
          >
            {" "}
            El nasr{" "}
          </Styled.WorkshopTitle>
          <Styled.BrandImage
            source={{
              uri: brandImage,
            }}
          />
        </Styled.WorkshopContainer>
        <Styled.WorkShopDescription
          isAr={lng === "ar" ? true : false}
          fontFamily={fontFamily}
        >
          {description}
        </Styled.WorkShopDescription>
        <Styled.ButtonWrapper>
          <Button
            onPress={() => {
              setShowBooking(!showBooking);
            }}
          >
            Book Now
          </Button>
          {showBooking && (
            <View>
              <View style={{ flex: 1 }}>
                <DateRangePicker
                  onSuccess={(s: string, e: string) => {}}
                  theme={{ markColor: "red", markTextColor: "white" }}
                  handleChange={handleChange}
                />
                {/* <Calendar /> */}
              </View>
              <Flex>
                <Button onPress={handleConfirmation}>Confirm</Button>
                <Button
                  status="danger"
                  style={{ marginLeft: 17 }}
                  onPress={() => {
                    setShowBooking(false);
                  }}
                >
                  Cancel
                </Button>
              </Flex>
            </View>
          )}
        </Styled.ButtonWrapper>
      </ScrollView>
    </Styled.WorkshopDetailsContainer>
  );
}
