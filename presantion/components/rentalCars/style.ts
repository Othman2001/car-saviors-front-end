import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const RentalTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 8px;
  color: #000000;
  margin-left: 30px;
  margin-top: 4px;
`;

export const RentalCarCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 21px;
  margin-top: 4px;
`;
export const RentalCarCard = styled.TouchableOpacity`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 15px;
  margin-top: 20px;
`;

export const RentalCardTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;
export const RentalCardLightText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 13px;
  line-height: 22px;
  color: #848484;
`;

export const RentalCardImageContainer = styled.View`
  display: flex;
  justify-content: center;
`;

export const RentalCardImage = styled.Image`
  align-self: flex-end;
  width: 70px;
  height: 70px;
  margin-right: 29px;
  align-self: center;
`;

export const SearchInput = styled.TextInput`
  background: #ffffff;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50px;
  padding: 10px 80px 10px 20px;
  margin-bottom: 12px;
`;
