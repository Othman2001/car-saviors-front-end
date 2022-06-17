import styled from "styled-components/native";

interface ITextProps {
  left?: number;
  fontFamily: string;
}
interface IContainerProps {
  backgroundColor: string;
}
export const Container = styled.View<IContainerProps>`
  background-color: #${(props) => props.backgroundColor};
  padding-bottom: 60px;
  margin-bottom: 20px;
`;
export const userAvatar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 13px;
  border: 1px solid gray;
  border-radius: 50px;
  padding: 24px;
  background-color: gray;
`;

export const userInfoContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const userName = styled.Text<ITextProps>`
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  /* identical to box height */

  color: #ffffff;
`;

export const userMetricsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const userMetricNumberContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
`;
export const userMetricNumber = styled.Text<ITextProps>`
  font-style: normal;
  font-size: 14px;
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  color: #ffffff;
  line-height: 22px;
  position: relative;
  left: ${(props) => (props.left ? props.left : 62)}px;
  margin-bottom: 20px;
`;
export const userMetricsText = styled.Text<ITextProps>`
  font-style: normal;
  font-family: ${(props) => props.fontFamily + "600SemiBold"};
  font-size: 14px;
  line-height: 45px;
  margin-top: 15px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 23px;
  color: #ffffff;
`;

export const Space = styled.View`
  height: 30px;
`;
