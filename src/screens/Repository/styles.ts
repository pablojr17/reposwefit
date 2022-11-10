import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RepoProps } from "../../contexts/RepositoriesProvider";

export const Container = styled.View`
  padding: 16px;
`;

export const RepositoriesList = styled(
  FlatList as new (props: FlatListProps<RepoProps>) => FlatList<RepoProps>
)``;
