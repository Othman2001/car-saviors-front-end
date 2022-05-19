import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const buttonContainer = styled.View`
  margin-left: 60px;
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity`
  background: #4b4b4b;
  border-radius: 15px;
  padding: 15px 20px 15px 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
`;

export const OfflineButton = styled.TouchableOpacity``;
