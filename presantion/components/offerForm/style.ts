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
  text-align: ${(props) => (props.isAr ? "right" : "left")};
  padding-top: 70px;
  text-align: center;
  /* identical to box height */

  color: #000000;
`;

export const UploadButton = styled.View`
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 30px;
  margin-top: 20px;
`;
