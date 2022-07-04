import * as Styled from "./style";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { workshopSchema } from "../../../application/workshops/types";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useActions } from "../../../config";
import { useWorkshopState } from "../../../application/custom-hooks/useWorkshopsState";
import { Spinner } from "@ui-kitten/components";
import i18n from "../../../config/i18n/config";

interface IWorkshopCard {
  workshops: workshopSchema[];
  brandImage: string;
}

export default function WorkshopCard({ workshops, brandImage }: IWorkshopCard) {
  const { fontFamily, lng } = useTheme();
  const [filteredWorkshops, setFilteredWorkshops] = useState<
    workshopSchema[] | undefined
  >(workshops);
  const { loading } = useWorkshopState();

  const handleSearch = (text: string) => {
    const newWorkshops = workshops?.filter((workshop) =>
      workshop.name.toLowerCase().includes(text.toLowerCase())
    );
    // @ts-ignore
    setFilteredWorkshops(newWorkshops);
  };

  const navigation = useNavigation();
  const {
    workshops: { setDistance },
  } = useActions();
  useEffect(() => {
    setDistance();
    setFilteredWorkshops(workshops);
    console.log(workshops, "workshops");
  }, [workshops]);
  return (
    <View>
      <Styled.SearchInput
        onChangeText={(text) => {
          handleSearch(text);
        }}
      />
      <ScrollView>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 200,
            }}
          >
            <Spinner />
          </View>
        ) : (
          filteredWorkshops?.map((workshop, index) => {
            return (
              <Styled.CardContainer
                key={index}
                onPress={() => {
                  navigation.navigate("WorkshopsDetails", {
                    workshop,
                    brandImage,
                  });
                }}
              >
                <Styled.FlexContainer>
                  <Styled.CardInfo>
                    <Styled.CardTitle
                      isAr={lng === "ar" ? true : false}
                      fontFamily={fontFamily}
                    >
                      {workshop.name?.length > 20
                        ? workshop.name.substring(0, 20)
                        : workshop.name}
                    </Styled.CardTitle>
                    <Styled.LocationContainer>
                      <Styled.LocationImage
                        source={require("../../../assets/location.jpg")}
                      />
                      <Styled.CardLightText
                        isAr={lng === "ar" ? true : false}
                        fontFamily={fontFamily}
                      >
                        {lng === "ar" ? workshop.locationAr : workshop.location}
                      </Styled.CardLightText>
                    </Styled.LocationContainer>

                    <Styled.NormalText
                      isAr={lng === "ar" ? true : false}
                      fontFamily={fontFamily}
                    >
                      {i18n.t("workshop.phoneNumber")}
                      <Styled.CardLightText
                        isAr={lng === "ar" ? true : false}
                        fontFamily={fontFamily}
                      >
                        {workshop.phoneNumber}
                      </Styled.CardLightText>
                    </Styled.NormalText>
                    <Styled.NormalText
                      isAr={lng === "ar" ? true : false}
                      fontFamily={fontFamily}
                    >
                      {i18n.t("workshop.workingHours")}:
                      <Styled.CardLightText
                        isAr={lng === "ar" ? true : false}
                        fontFamily={fontFamily}
                      >
                        {workshop.openHours}am - {workshop.closeHours}11pm
                      </Styled.CardLightText>
                    </Styled.NormalText>
                  </Styled.CardInfo>
                  <Styled.BrandImage
                    source={{
                      uri: brandImage,
                    }}
                  />
                </Styled.FlexContainer>
              </Styled.CardContainer>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
