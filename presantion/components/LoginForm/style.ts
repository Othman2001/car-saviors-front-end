import styled from "styled-components/native";

interface IFormLabel {
  vertical?: number;
  horizontal?: number;
}
interface ISmallText {
  color: string;
}
interface ITextProps {
  spaceTop: number;
}

export const Title = styled.Text<ITextProps>`
  font-family: "OpenSans_700Bold";
  font-style: normal;
  padding-top: ${(props) => props.spaceTop}px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  z-index: 1400;
`;

export const FormLabel = styled.Text<IFormLabel>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  padding-left: 39px;
  padding-top: ${(props: any) => (props.horizontal ? props.horizontal : 26)}px;
  padding-bottom: ${(props: any) => (props.vertical ? props.vertical : 0)}px;
`;

export const FormInput = styled.TextInput`
  background: #ffffff;
  border-radius: 15px;
  padding-left: 52px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
`;

export const CommonButton = styled.TouchableOpacity`
  background-color: #265a60;
  border-radius: 15px;
  margin-right: 60px;
  margin-left: 60px;
  margin-top: 60px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  color: #ffffff;
  padding: 20px;
`;

export const SmallText = styled.Text<ISmallText>`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  margin-top: 12px;
  color: ${(props: any) => props.color};

  text-align: center;
`;

export const Span = styled.Text<ISmallText>`
  color: ${(props: any) => props.color};
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
`;
