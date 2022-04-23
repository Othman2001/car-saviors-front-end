import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const PopUp = styled.View`
  margin-top: 140px;
  background: #c4c4c4;
  border-radius: 15px;
  padding-left: 25px;
  padding-right: 24px;
  padding-top: 30px;
  padding-bottom: 58px;
  z-index: 100;
  margin-left: 30px;
  margin-right: 30px;
`;
export const PopUpTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  padding-bottom: 9px;
  line-height: 22px;
  /* identical to box height */
  color: #000000;
`;

export const PopUpText = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "400Regular"};
  font-size: 13px;
  line-height: 22px;

  color: #000000;
`;

export const PopUpButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PopUpButton = styled.TouchableOpacity`
  background: #265a60;
  border-top-left-radius: 20px;
  padding: 18px 21px 11px 21px;
  position: absolute;
  right: -20px;
  top: 4px;
`;

export const PopUpButtonText = styled.Text<ITextProps>`
  text-align: center;
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  color: #ffffff;
`;
