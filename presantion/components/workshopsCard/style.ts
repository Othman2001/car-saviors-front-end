import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const FlexContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const CardContainer = styled.TouchableOpacity`
  background: #ffffff;
  margin-top: 20px;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;

  justify-content: center;
`;

export const CardInfo = styled.View`
  display: flex;
`;

export const CardTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  padding-left: 20px;
  /* text-align: ${(props) => (props.isAr ? "right" : "left")}; */
`;
export const NormalText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 12px;
  padding-left: 20px;
  margin-bottom: 6px;
`;
export const CardLightText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 12px;
  color: #8f8f8f;
  margin-bottom: 6px;
`;
export const BrandImage = styled.Image`
  width: 69px;
  height: 55px;
  padding-left: 20px;
  padding-right: 20px;
  align-self: center;
  margin-right: 20px;
`;

export const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  padding-left: 15px;
`;

export const LocationImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 6px;
`;

export const SearchInput = styled.TextInput`
  background: #ffffff;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 70px;
  padding: 10px 80px 10px 20px;
  margin-bottom: 12px;
`;
