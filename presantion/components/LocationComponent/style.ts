import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const Title = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 20px;
  padding-top: 90px;
  margin-left: 20px;
`;

export const FormLabel = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  margin-bottom: 14px;
  margin-left: 20px;
`;

export const FormInputContainer = styled.View`
  display: flex;
  padding-top: 120px;
  margin-right: 30px;
`;

export const ButtonContainer = styled.View`
  margin-left: 30px;
  margin-right: 80px;
  margin-top: 60px;
`;
