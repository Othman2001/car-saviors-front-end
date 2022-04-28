import styled from "styled-components/native";
import { ITextProps } from "../../../types";

// fonts done

export const CardContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.TouchableOpacity`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding-top: 24px;
  padding-bottom: 30px;
  padding-right: 40px;
  padding-left: 50px;
  margin-left: 15px;
  margin-bottom: 20px;
  max-width: 170px;
  overflow: hidden;
`;

export const CardImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
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
