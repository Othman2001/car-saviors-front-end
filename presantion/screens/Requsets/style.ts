import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const Title = styled.Text<ITextProps>`
  padding-top: 60px;
  font-family: ${(props) => props.fontFamily + "700Bold"};
  font-size: 16px;
  margin-left: 30px;
  padding-bottom: 30px;
`;
