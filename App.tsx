import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StatusBar, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Routes } from "./src/routes";
import { RepositoriesProvider } from "./src/contexts/RepositoriesProvider";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <RepositoriesProvider>
        <Routes />
      </RepositoriesProvider>
    </>
  );
}
