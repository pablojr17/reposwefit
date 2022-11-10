import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const CardContainer = styled.Pressable`
  padding: 12px 16px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

export const InfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 16px 0;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #dadada;
  border-style: solid;
`;

export const InfoFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 16px 0;
`;

export const Image = styled.Image`
  width: 29px;
  height: 29px;
`;

export const TextGroup = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #070707;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #9a9a9a;
`;

export const TitleSecondary = styled.Text`
  font-size: 12px;
  color: #9a9a9a;
  margin-left: 8px;
`;
