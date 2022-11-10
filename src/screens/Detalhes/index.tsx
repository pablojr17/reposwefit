import { useCallback, useEffect } from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Content,
  ContentButton,
  ContentRepo,
  Description,
  DescriptionLanguage,
  RepoLanguage,
  Title,
  TitleRepo,
  ButtonFavorite,
  ButtonText,
  ButtonViewRepo,
  CardRepo,
} from "./styles";
import { useRepositories } from "../../hooks/useRepositories";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { RepoProps } from "../../contexts/RepositoriesProvider";
import { disfavorRepo, getReposSave, saveRepo } from "../../utils/storageRepo";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface RepositoryParams {
  id: number;
}

export function Detalhes({ navigation }: any) {
  const { params } = useRoute();
  const { id } = params as RepositoryParams;
  const { repositories, repoFavorite, setRepositories, setRepoFavorite } =
    useRepositories();

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    navigation.getParent().setOptions({ headerShown: false });
  }, []);

  function handleIssueNavigation(repoUrl: string) {
    Linking.openURL(repoUrl);
  }

  const handleRepo = useCallback(async () => {
    const FavoriteRepository = await getReposSave("repo");

    setRepoFavorite(FavoriteRepository);
  }, []);

  async function handleDisfavor(id: number) {
    const result = await disfavorRepo(repoFavorite, id);
    setRepoFavorite(result);
  }

  useEffect(() => {
    handleRepo();
  }, []);

  const handleFavorite = useCallback(async (data: RepoProps) => {
    const {
      id,
      full_name,
      owner,
      stargazers_count,
      description,
      html_url,
      language,
    } = data;
    const dataRepo = {
      id,
      full_name,
      owner,
      stargazers_count,
      description,
      html_url,
      language,
    };
    if (!repoFavorite === false) {
      await AsyncStorage.setItem("repo", JSON.stringify([dataRepo]));
      handleRepo();
    }

    if (repoFavorite) {
      saveRepo("repo", dataRepo);
    }
  }, []);

  return (
    <Container>
      <Content>
        <TouchableOpacity
          onPress={() => {
            navigation
              .getParent()
              .setOptions({ tabBarStyle: { display: "flex" } });
            navigation.getParent().setOptions({ headerShown: true });

            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" color="#fff" size={24} />
        </TouchableOpacity>
        <Title>Detalhes</Title>
      </Content>
      {repositories
        .filter((i) => i.id === id)
        .map((a) => (
          <ContentRepo key={a.id}>
            <CardRepo>
              <TitleRepo>{a.full_name}</TitleRepo>
              <Description>{a.description}</Description>
              <RepoLanguage>
                <FontAwesome name="circle" size={12} color="red" />
                <DescriptionLanguage>{a.language}</DescriptionLanguage>
              </RepoLanguage>
            </CardRepo>
            <ContentButton>
              <ButtonViewRepo onPress={() => handleIssueNavigation(a.html_url)}>
                <ButtonText color="#1976d2">VER REPOSITÓRIO</ButtonText>
                <Feather name="link" color="#1976d2" size={20} />
              </ButtonViewRepo>
              {repoFavorite.length > 0 ? (
                <ButtonFavorite
                  onPress={() => {
                    repoFavorite.map((d) => d.id).includes(a.id)
                      ? handleDisfavor(a.id)
                      : handleFavorite(a);
                  }}
                >
                  <ButtonText color="#000">
                    {repoFavorite?.map((d) => d.id).includes(a.id)
                      ? "DESFAVORITA"
                      : "FAVORITAR"}
                  </ButtonText>
                  {repoFavorite?.map((d) => d.id).includes(a.id) ? (
                    <FontAwesome name="star" color="#black" size={20} />
                  ) : (
                    <FontAwesome name="star-o" color="#black" size={20} />
                  )}
                </ButtonFavorite>
              ) : (
                <ButtonFavorite onPress={() => handleFavorite(a)}>
                  <ButtonText color="#000">FAVORITAR</ButtonText>
                  <FontAwesome name="star-o" color="#black" size={20} />
                </ButtonFavorite>
              )}
            </ContentButton>
          </ContentRepo>
        ))}
    </Container>
  );
}
