import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import { api } from "../services/api";

export interface RepoProps {
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

interface RepositoriesContextData {
  repositories: RepoProps[];
  setRepositories: (repository: RepoProps[]) => void;
  repoFavorite: RepoProps[];
  setRepoFavorite: (repository: RepoProps[]) => void;
  addRepository: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

interface RepositoriesProviderProps {
  children: React.ReactNode;
}

const RepositoriesContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData
);

function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepositories] = useState<RepoProps[]>([]);
  const [repoFavorite, setRepoFavorite] = useState<RepoProps[]>([]);
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  async function addRepository() {
    try {
      const { data } = await api.get<RepoProps[]>(`${inputText}/repos`);
      setRepositories(data);
      setOpen(!open);
    } catch (error) {
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao buscar pelo repositório. Verifique a sua conexão e o nome do repositório e tente novamente."
      );
    }
  }

  return (
    <RepositoriesContext.Provider
      value={{
        inputText,
        setInputText,
        open,
        setOpen,
        repositories,
        addRepository,
        setRepositories,
        repoFavorite,
        setRepoFavorite,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}

export { RepositoriesProvider, RepositoriesContext };
