import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PaginaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.conteudoCentral}>
        <Text style={styles.agendaTitulo}>Agenda</Text>
        <Text style={styles.nomeTexto}>Maria Clara Borges</Text>
        <Text style={styles.turmaTexto}>
          8° Semestre - Ciência da Computação
        </Text>

        <View style={styles.botoesContainer}>
          <Button
            title="COMPROMISSOS DO DIA"
            onPress={() => navigation.navigate("CompromissosDia")}
          />

          <Button
            title="COMPROMISSOS DA SEMANA"
            onPress={() => navigation.navigate("CompromissosSemana")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  conteudoCentral: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  agendaTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },
  nomeTexto: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  turmaTexto: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  botoesContainer: {
    alignItems: "stretch",
    gap: 15,
    width: 250,
  },
});

export default PaginaInicial;
