import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";
import { Card } from "../../components/Card";
import ModalRepo from "../../components/ModalRepo";
import { useRepositories } from "../../hooks/useRepositories";
import { Container, RepositoriesList } from "./styles";

export function Repository() {
  const { navigate } = useNavigation<any>();
  const { open, repositories, setOpen } = useRepositories();

  function handleRepositoryPageNavigation(id: number) {
    navigate("Detalhes", { id });
  }

  return (
    <Container>
      <RepositoriesList
        data={repositories}
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

      <Modal visible={open} transparent animationType="slide">
        <ModalRepo onClose={() => setOpen(false)} />
      </Modal>
    </Container>
  );
}
