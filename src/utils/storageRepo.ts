import AsyncStorage from "@react-native-async-storage/async-storage";
import { RepoProps } from "../contexts/RepositoriesProvider";

export async function getReposSave(key: string) {
  const myRepos = await AsyncStorage.getItem(key);
  if (myRepos === null) return;
  let reposSave = JSON.parse(myRepos);
  return reposSave;
}

export async function saveRepo(key: string, dataRepo: any) {
  let resosStored = await getReposSave(key);

  if (!!resosStored === false)
    return await AsyncStorage.setItem(key, JSON.stringify(dataRepo));

  resosStored.push(dataRepo);
  await AsyncStorage.setItem(key, JSON.stringify(resosStored));
}

export async function disfavorRepo(repos: any, id: number) {
  let myRepos = repos.filter((item: RepoProps) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("repo", JSON.stringify(myRepos));
  return myRepos;
}
