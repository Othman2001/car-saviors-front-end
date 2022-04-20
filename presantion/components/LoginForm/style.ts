import styled from "styled-components/native";

interface IFormLabel {
  vertical?: number;
  horizontal?: number;
}
interface ISmallText {
  color: string;
}

export const Title = styled.Text`
  font-family: "OpenSans_700Bold";
  font-style: normal;
  padding-top: 220px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #000000;
`;

export const FormLabel = styled.Text<IFormLabel>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  padding-left: 62px;
  padding-top: ${(props: any) => (props.horizontal ? props.horizontal : 26)}px;
  padding-bottom: ${(props: any) => (props.vertical ? props.vertical : 0)}px;
`;

export const FormInput = styled.TextInput`
  background: #ffffff;
  border-radius: 15px;
  padding-left: 52px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 5px;
`;

export const CommonButton = styled.TouchableOpacity`
  background-color: #265a60;
  border-radius: 15px;
  margin-right: 93px;
  margin-left: 93px;
  margin-top: 77px;
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
