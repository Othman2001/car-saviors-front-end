import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const CardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const Card = styled.View`
  background: #e5e5e5;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: center;
`;

export const CardImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  margin-top: 17px;
`;
