import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const CompromissosSemana = ({ navigation }) => {
  const compromissos = [
    {
      diaSemana: "Segunda-feira (10/11)",
      data: [
        { id: "1", horario: "09h30", descricao: "Dentista" },
        { id: "2", horario: "16h00", descricao: "Pilates" },
      ],
    },
    {
      diaSemana: "Terça-feira (11/11)",
      data: [
        { id: "3", horario: "08h00", descricao: "Médico" },
        { id: "4", horario: "10h30", descricao: "Reunião de planejamento" },
        { id: "5", horario: "15h00", descricao: "Saída viagem" },
      ],
    },
    {
      diaSemana: "Quarta-feira (12/11)",
      data: [
        { id: "6", horario: "09h00", descricao: "Congresso" },
        { id: "7", horario: "12h30", descricao: "Almoço com executivos" },
        { id: "8", horario: "20h30", descricao: "Jantar de confraternização" },
      ],
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
      <Text style={styles.diaSemanaTexto}>{section.diaSemana}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTexto}>[Seu nome]</Text>
        <Text style={styles.infoTexto}>[Sua turma]</Text>
      </View>

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
  infoContainer: {
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#f5f5f5",
  },
  infoTexto: {
    fontSize: 13,
    color: "#888",
    marginBottom: 2,
  },
  listContent: {
    padding: 20,
    paddingTop: 0,
  },
  headerContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  diaSemanaTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
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

export default CompromissosSemana;
