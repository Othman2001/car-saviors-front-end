import styled from "styled-components/native";

export const BrandCardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const BrandCard = styled.TouchableOpacity`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-left: 19px;
  margin-right: 19px;
  margin-bottom: 40px;
  padding: 24px 20px 24px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandImage = styled.Image`
  width: 67px;
  height: 55px;
`;
