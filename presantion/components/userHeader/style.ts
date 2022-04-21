import styled from "styled-components/native";

interface ITextProps {
  left?: number;
}
export const Container = styled.View`
  background: #265a60;
  margin-bottom: 56px;
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

export const userName = styled.Text`
  font-weight: 700;
  font-family: "OpenSans_700Bold";
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
  font-weight: 700;
  font-size: 14px;
  font-family: "OpenSans_700Bold";
  color: #ffffff;
  line-height: 22px;
  position: relative;
  left: ${(props) => (props.left ? props.left : 62)}px;
  margin-bottom: 20px;
`;
export const userMetricsText = styled.Text`
  font-style: normal;
  font-family: "OpenSans_700Bold";
  font-weight: 700;
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
