import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { useRepositories } from "../../hooks/useRepositories";
import {
  ModalContainer,
  Container,
  ModalArea,
  Title,
  Input,
  ButtonAdd,
  ButtonText,
  ButtonCancel,
  ContainerButton,
} from "./styles";

interface ModalProps {
  onClose: () => void;
}

export default function ModalRepo({ onClose }: ModalProps) {
  const { inputText, setInputText, addRepository } = useRepositories();
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <ModalArea>
          <Title>Alterar usuário selecionado</Title>
          <Input
            placeholder="Nome do usuario"
            placeholderTextColor="#ccc"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="url"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
        </ModalArea>
        <ContainerButton>
          <ButtonCancel>
            <ButtonText color="#1976d2">Cancelar</ButtonText>
          </ButtonCancel>
          <ButtonAdd onPress={() => addRepository()}>
            <ButtonText color="#FFF">Salvar</ButtonText>
          </ButtonAdd>
        </ContainerButton>
      </Container>
    </ModalContainer>
  );
}
