import styled from "styled-components/native";
import { ITextProps } from "../../../types";
// fonts done

interface IFormLabel {
  vertical?: number;
  horizontal?: number;
  fontFamily: string;
}
interface ISmallText {
  color: string;
  fontFamily: string;
}

export const Title = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-style: normal;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  z-index: 1400;
`;

export const FormLabel = styled.Text<ITextProps>`
  font-style: normal;
  font-size: 16px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  line-height: 22px;
  color: #000000;
  padding-left: 39px;
  padding-right: 20px;

  font-family: ${(props) => props.fontFamily + "700Bold"};
  padding-top: ${(props: any) => (props.horizontal ? props.horizontal : 26)}px;
  padding-bottom: ${(props: any) => (props.vertical ? props.vertical : 0)}px;
`;

export const FormInput = styled.TextInput`
  background: #ffffff;
  border-radius: 15px;
  padding-left: 52px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
`;

export const CommonButton = styled.TouchableOpacity`
  background-color: #265a60;
  border-radius: 15px;
  margin-right: 60px;
  margin-left: 60px;
  margin-top: 60px;
`;

export const ButtonText = styled.Text<ITextProps>`
  text-align: center;
  font-family: ${(props) => props.fontFamily + "700Bold"};
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
  padding: 20px;
`;

export const SmallText = styled.Text<ITextProps>`
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  margin-top: 12px;
  color: ${(props: any) => props.color};
  font-family: ${(props) => props.fontFamily + "700Bold"};
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  text-align: center;
`;

export const Span = styled.Text<ITextProps>`
  color: ${(props: any) => props.color};
`;

export const ErrorText = styled.Text<ITextProps>`
  font-size: 14px;
  color: red;
  font-family: ${(props) => props.fontFamily + "700Bold"};
  text-align: center;
`;
