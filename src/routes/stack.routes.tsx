import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Detalhes } from "../screens/Detalhes";
import { Repository } from "../screens/Repository";

const stackRoutes = createStackNavigator();

export default function StacKRoutes() {
  return (
    <stackRoutes.Navigator>
      <stackRoutes.Screen
        name="WeFit"
        component={Repository}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <stackRoutes.Screen
        name="Detalhes"
        options={{
          headerShown: false,
        }}
        component={Detalhes}
      />
    </stackRoutes.Navigator>
  );
}
