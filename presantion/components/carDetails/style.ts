import styled from "styled-components/native";
import { ITextProps } from "../../../types";

// fonts done
export const Flex = styled.View`
  display: flex;
  margin-right: 19px;
  margin-left: 26px;
  margin-top: 39px;
  margin-bottom: 23px;
  align-items: center;
  flex-direction: row;
`;
export const CardContainer = styled.View`
  background: #ffffff;
  border-radius: 10px;
`;

export const ImagesContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 30px;
`;
export const CardTitle = styled.Text<ITextProps>`
  font-style: normal;
  font-size: 14px;
  line-height: 27px;
  font-family: ${(props) => props.fontFamily + "700Bold"};
  color: #000000;
  margin-left: 20px;
`;
export const CardImage = styled.Image`
  width: 150px;
  height: 104px;
  margin-right: 10px;
  border-radius: 10px;
`;
export const CarBrand = styled.Text<ITextProps>`
  font-size: 14px;
  line-height: 19px;
  margin-right: 30px;
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  color: #000000;
  margin-left: 30px;
  text-align: left;
`;

export const CardLightText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "400Regular"};
  font-size: 14px;
  line-height: 19px;
  margin-left: 20px;
  /* identical to box height */

  color: #808080;
`;

export const CardRegularText = styled.Text<ITextProps>`
  font-size: 14px;
  font-family: ${(props) => props.fontFamily + "700Bold"};
  line-height: 19px;
  /* identical to box height */
  margin-left: 30px;
  color: #000000;
`;

export const CardPreview = styled.Image`
  width: 77px;
  height: 77px;
  margin-right: 36px;
  margin-bottom: 10px;
`;

export const TableContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 60px;
  justify-content: center;
`;
export const pricingTable = styled.View`
  background: #c4c4c4;
  border-radius: 10px;
  width: 80%;
  margin-top: 5px;
  padding-top: 11px;
  padding-bottom: 13px;
`;
export const FlexTable = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Price = styled.Text`
  margin-right: 20%;
`;
