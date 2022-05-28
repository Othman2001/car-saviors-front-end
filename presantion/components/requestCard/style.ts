import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const CardContainer = styled.View`
  background-color: #273334;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 17px;
  padding-right: 17px;
`;

export const CardFirstPart = styled.View``;
export const CardSecondPart = styled.View``;
export const RequestId = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  color: #fff;
`;

export const Label = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  color: #fff;
`;

export const Price = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  color: #1fa81d;
`;
export const DateLabelsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateLabel = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  align-self: center;
  color: #fff;
`;

export const Date = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  color: #6d6d6d;
`;
