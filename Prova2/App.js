import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaginaInicial from "./Screens/PaginaInicial";
import CompromissosDia from "./Screens/CompromissosDia";
import CompromissosSemana from "./Screens/CompromissosSemana";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={PaginaInicial} />
        <Stack.Screen
          name="CompromissosDia"
          component={CompromissosDia}
          options={{ title: "Compromissos do dia" }}
        />
        <Stack.Screen
          name="CompromissosSemana"
          component={CompromissosSemana}
          options={{ title: "Compromissos da semana" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
