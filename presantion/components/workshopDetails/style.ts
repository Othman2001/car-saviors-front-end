import styled from "styled-components/native";
import { ITextProps } from "../../../types";

interface IFLexProps {
  isAr: boolean;
}

export const WorkshopDetailsContainer = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

export const ScreenTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 20px;
  margin-top: 90px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: ${(props) => (props.isAr ? "20px" : "0px")};
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;
export const WorkshopTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  margin-right: ${(props) => (props.isAr ? "20px" : "0px")};

  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const WorkshopContainer = styled.View<IFLexProps>`
  display: flex;
  flex-direction: ${(props) => (props.isAr ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  padding-top: 50px;
`;
export const BrandImage = styled.Image`
  width: 60px;
  height: 55px;
  margin-right: 20px;
  margin-left: 20px;
`;
export const WorkShopDescription = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  margin-left: 20px;
  line-height: 20px;
  color: #333333;
  margin-right: ${(props) => (props.isAr ? "20px" : "0px")};

  margin-top: 10px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const ButtonWrapper = styled.View`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 60px;
`;
