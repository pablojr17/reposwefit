import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Favorite } from "../screens/Favorite";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRepositories } from "../hooks/useRepositories";
import StacKRoutes from "./stack.routes";

export function Routes() {
  const { setOpen, open } = useRepositories();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Repositórios"
          component={StacKRoutes}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="github" size={32} color={color} />;
            },
            headerTitle: "WeFit",
            headerRight: () => (
              <Ionicons
                onPress={() => setOpen(!open)}
                name="settings-sharp"
                size={32}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Favorite}
          options={{
            headerTitle: "WeFit",
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="star" size={32} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
