import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 0.8;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 16px;
  height: 45px;
`;

export const ModalArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 9px 12px 8px;
  background-color: rgba(0, 0, 0, 0.06);
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
`;

export const ButtonAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #1976d2;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  flex: 1;
`;

export const ButtonCancel = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

interface ITextColorProps {
  color: string;
}

export const ButtonText = styled.Text<ITextColorProps>`
  color: ${({ color }) => color};
  font-size: 18px;
  font-weight: bold;
`;
