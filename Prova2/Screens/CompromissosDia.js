import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const CompromissosDia = ({ navigation }) => {
  const compromissos = [
    {
      data: [
        { id: "1", horario: "08h00", descricao: "Médico" },
        { id: "2", horario: "10h30", descricao: "Reunião de planejamento" },
        { id: "3", horario: "15h00", descricao: "Saída viagem" },
      ],
      diaSemana: "11/11 (ter)",
      nome: "Maria Clara Borges",
      turma: "8° Semestre - Ciência da Computação",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTexto}>
        {item.horario}: {item.descricao}
      </Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.dataTexto}>{section.diaSemana}</Text>
      <Text style={styles.infoTexto}>{section.nome}</Text>
      <Text style={styles.infoTexto}>{section.turma}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={compromissos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContent: {
    padding: 20,
  },
  headerContainer: {
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  dataTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },
  infoTexto: {
    fontSize: 13,
    color: "#888",
    marginBottom: 2,
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 1,
  },
  itemTexto: {
    fontSize: 15,
    color: "#000",
  },
});

export default CompromissosDia;
