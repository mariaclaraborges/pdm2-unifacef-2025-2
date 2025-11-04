import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./Screens/Cadastro";
import Dados from "./Screens/Dados";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Dados"
          component={Dados}
          options={{ title: "Dados Cadastrados" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
