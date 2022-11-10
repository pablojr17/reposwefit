import { useEffect } from "react";
import { Card } from "../../components/Card";
import { getReposSave } from "../../utils/storageRepo";
import { RepositoriesList } from "../Repository/styles";
import { useNavigation } from "@react-navigation/native";
import { useRepositories } from "../../hooks/useRepositories";
import { Container } from "./styles";

export function Favorite() {
  const { repoFavorite, setRepoFavorite } = useRepositories();
  const { navigate } = useNavigation<any>();

  useEffect(() => {
    async function handleRepo() {
      const FavoriteRepository = await getReposSave("repo");
      setRepoFavorite(FavoriteRepository);
    }
    handleRepo();
  }, []);

  function handleRepositoryPageNavigation(id: number) {
    navigate("Detalhes", { id });
  }

  return (
    <Container>
      <RepositoriesList
        data={repoFavorite}
        showsVerticalScrollIndicator={false}
        keyExtractor={(repository) => String(repository.id)}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            data={item}
            onPress={() => handleRepositoryPageNavigation(item.id)}
          />
        )}
      />
    </Container>
  );
}
