import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const Title = styled.Text<ITextProps>`
  font-size: 20px;
  padding-top: 60px;
  padding-left: 40px;
  text-align: ${(props) => (props.right ? "right" : "left")};
`;
