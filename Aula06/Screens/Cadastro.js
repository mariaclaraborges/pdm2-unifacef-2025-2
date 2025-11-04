import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erros, setErros] = useState({});

  function handleCadastrar() {
    const novoErros = {};

    if (!nome.trim()) novoErros.nome = "Informe o nome completo";
    if (!email.includes("@")) novoErros.email = "Digite um e-mail válido";
    if (senha.length < 6)
      novoErros.senha = "A senha deve ter no mínimo 6 caracteres";
    if (confirmacao !== senha)
      novoErros.confirmacao = "As senhas devem ser iguais";
    if (!telefone || !/^\d+$/.test(telefone)) {
      novoErros.telefone = "Digite apenas números";
    }

    setErros(novoErros);

    if (Object.keys(novoErros).length === 0) {
      navigation.navigate("Dados", { nome, email, telefone });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros.nome ? <Text style={styles.erro}>{erros.nome}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email ? <Text style={styles.erro}>{erros.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros.senha ? <Text style={styles.erro}>{erros.senha}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmacao}
        onChangeText={setConfirmacao}
      />
      {erros.confirmacao ? (
        <Text style={styles.erro}>{erros.confirmacao}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros.telefone ? (
        <Text style={styles.erro}>{erros.telefone}</Text>
      ) : null}

      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  erro: { color: "red", marginBottom: 10 },
});
