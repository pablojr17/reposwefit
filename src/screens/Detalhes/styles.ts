import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: #000;
  padding: 12px;
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #9a9a9a;
  font-weight: 400;
  font-size: 16px;
  margin-top: 16px;
`;

export const DescriptionLanguage = styled.Text`
  font-size: 16px;
  color: #9a9a9a;
  font-weight: 400;
  font-size: 16px;
  margin-left: 6px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 8px;
`;

export const ContentRepo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardRepo = styled.View`
  padding: 16px;
`;

export const RepoLanguage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const TitleRepo = styled.Text`
  font-size: 20px;
  color: #070707;
`;

export const ContentButton = styled.View`
  background-color: #fff;
  padding: 16px;
`;

export const ButtonViewRepo = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  background-color: #fff;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: row;

  background-color: #ffd02c;
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
  margin-right: 8px;
`;
