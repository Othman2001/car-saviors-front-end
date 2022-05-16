import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { brandSchema } from "../../../application/workshops/types";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

interface IBrandCardProps {
  brands: brandSchema[];
}

export default function BrandCards({ brands }: IBrandCardProps) {
  const navigation = useNavigation();
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <Styled.BrandCardsContainer>
      {brands.map((brand, index) => (
        <>
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
      ))}
    </Styled.BrandCardsContainer>
  );
}