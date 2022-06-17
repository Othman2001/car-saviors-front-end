import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const AppLangauge = styled.TouchableOpacity``;
export const AppVersion = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const UserEmail = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const ChangeLang = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;
