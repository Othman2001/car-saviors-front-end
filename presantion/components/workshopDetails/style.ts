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

export const ReviewsContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: 20px;
`;

export const SectionTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  margin-left: 20px;
  margin-right: 20px;
  font-size: 17px;
  margin-top: 20px;
`;
export const ReviewContainer = styled.View`
  background-color: #d9d9d9;
  border-radius: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ReviewCreator = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 3px;
  margin-top: 10px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const ReviewComment = styled.Text<ITextProps>`
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  color: #333333;
  font-size: 16px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
`;
export const RegularText = styled.Text<ITextProps>`
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 14px;
`;

export const CommentInput = styled.TextInput`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  background-color: #eeeeee;
  padding: 20px 14px 50px;
  border-radius: 30px;
`;
