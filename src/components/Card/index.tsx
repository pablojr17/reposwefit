import {
  CardContainer,
  InfoHeader,
  InfoFooter,
  Image,
  TextGroup,
  Title,
  Description,
  TitleSecondary,
} from "./styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface CardProps {
  id: number;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

interface ItemProps {
  data: CardProps;
  onPress: () => void;
}

export function Card({ data, onPress }: ItemProps) {
  return (
    <CardContainer
      style={{ elevation: 20, shadowColor: "#00000050" }}
      onPress={onPress}
    >
      <InfoHeader>
        <Title numberOfLines={1}>{data.full_name}</Title>
        {data.owner.avatar_url && (
          <Image
            style={{ borderRadius: 50 }}
            source={{ uri: data.owner.avatar_url }}
          />
        )}
      </InfoHeader>

      <TextGroup>
        <Description numberOfLines={3}>{data.description}</Description>
      </TextGroup>

      <InfoFooter>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="star" size={32} color="#FFD02C" />
          <TitleSecondary numberOfLines={1}>
            {data.stargazers_count}
          </TitleSecondary>
        </View>
        <TitleSecondary>{data.language}</TitleSecondary>
      </InfoFooter>
    </CardContainer>
  );
}
