import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const Title = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 20px;
  margin-left: 20px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const FormLabel = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  margin-bottom: 14px;
  margin-left: 20px;
  text-align: ${(props) => (props.isAr ? "right" : "left")};
`;

export const FormInputContainer = styled.View`
  display: flex;
  margin-right: 30px;
  height: 70%;
`;

export const ButtonContainer = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 80px;
`;
