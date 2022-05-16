import styled from "styled-components/native";
import { ITextProps } from "../../../types";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;
export const Title = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  line-height: 22px;
  padding-top: 70px;
  text-align: center;
  /* identical to box height */

  color: #000000;
`;

export const UploadButton = styled.View`
  margin-left: 60px;
  display: none;
  margin-right: 60px;
`;
