import * as Styled from "./style";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../../application/custom-hooks/useTheme";
import { workshopSchema } from "../../../application/workshops/types";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useActions } from "../../../config";

interface IWorkshopCard {
  workshops: workshopSchema[];
  brandImage: string;
}

export default function WorkshopCard({ workshops, brandImage }: IWorkshopCard) {
  const { fontFamily } = useTheme();
  const [filteredWorkshops, setFilteredWorkshops] = useState<
    workshopSchema[] | undefined
  >(workshops);

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
  }, [workshops]);
  return (
    <View>
      <Styled.SearchInput
        onChangeText={(text) => {
          handleSearch(text);
        }}
      />
      <ScrollView>
        {filteredWorkshops?.map((workshop, index) => {
          return (
            <Styled.CardContainer
              key={index}
              onPress={() => {
                navigation.navigate("WorkshopsDetails", {
                  workshop,
                });
              }}
            >
              <Styled.FlexContainer>
                <Styled.CardInfo>
                  <Styled.CardTitle fontFamily={fontFamily}>
                    {workshop.name}
                  </Styled.CardTitle>
                  <Styled.LocationContainer>
                    <Styled.LocationImage
                      source={require("../../../assets/location.jpg")}
                    />
                    <Styled.CardLightText fontFamily={fontFamily}>
                      {workshop.location}
                    </Styled.CardLightText>
                  </Styled.LocationContainer>

                  <Styled.NormalText fontFamily={fontFamily}>
                    Phone Number:
                    <Styled.CardLightText fontFamily={fontFamily}>
                      01281084530
                    </Styled.CardLightText>
                  </Styled.NormalText>
                  <Styled.NormalText fontFamily={fontFamily}>
                    Hours:
                    <Styled.CardLightText fontFamily={fontFamily}>
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
        })}
      </ScrollView>
    </View>
  );
}
