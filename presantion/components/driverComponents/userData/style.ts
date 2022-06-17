import styled from "styled-components/native";
import { ITextProps } from "../../../../types";

export const Container = styled.ScrollView`
  background-color: #ffffff;
  border-radius: 20px;
  height: 100%;
`;

export const UserLocationText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  line-height: 21.79px;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;
