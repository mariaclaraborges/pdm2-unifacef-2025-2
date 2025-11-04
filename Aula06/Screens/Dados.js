import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Dados({ route, navigation }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro Concluído</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.valor}>{nome}</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.valor}>{email}</Text>

      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.valor}>{telefone}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 15 },
  valor: { fontSize: 16, marginBottom: 10 },
});
