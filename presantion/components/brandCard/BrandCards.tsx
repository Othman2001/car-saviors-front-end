import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { brandSchema } from "../../../application/workshops/types";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useWorkshopState } from "../../../application/custom-hooks/useWorkshopsState";
import { ScrollView, View } from "react-native";
import { Spinner } from "@ui-kitten/components";
import { useWorkshopsActions } from "../../../application/custom-hooks/useWorkshopsAction";

interface IBrandCardProps {
  brands: brandSchema[];
}

export default function BrandCards({ brands }: IBrandCardProps) {
  const navigation = useNavigation();
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { loading } = useWorkshopState();
  const { getUserCurrentLocation } = useWorkshopsActions();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      getUserCurrentLocation({
        userLocation: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <ScrollView>
      <Styled.BrandCardsContainer>
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
          brands.map((brand, index) => (
            <>
              {}
              <Styled.BrandCard
                key={index}
                onPress={() => {
                  navigation.navigate("Workshops", {
                    brandName: brand.name,
                    brandImage: brand.imageUrl,
                  });
                }}
              >
                <Styled.BrandImage
                  source={{
                    uri: brand.imageUrl,
                  }}
                />
              </Styled.BrandCard>
            </>
          ))
        )}
      </Styled.BrandCardsContainer>
    </ScrollView>
  );
}
