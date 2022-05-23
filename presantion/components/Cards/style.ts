import styled from "styled-components/native";
import { ITextProps } from "../../../types";

// fonts done

export const CardContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding-top: 24px;
  padding-bottom: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  width: 150px;
  height: 150px;
  margin-right: 15px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  align-self: center;
`;
export const CardTitle = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-style: normal;
  font-size: 14px;
  text-align: center;
  line-height: 17px;
  /* identical to box height */
  color: #000000;
`;
