import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  Dimensions,
} from "react-native";

// Componente de item memoizado para otimização
const ProdutoItem = React.memo(({ nome, preco }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{nome}</Text>
      <Text style={styles.itemPreco}>R$ {preco.toFixed(2)}</Text>
    </View>
  );
});

// Componente de cabeçalho da seção memoizado
const CategoriaHeader = React.memo(({ categoria }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{categoria}</Text>
    </View>
  );
});

const CatalogoProduto = () => {
  const [filtro, setFiltro] = useState("");

  // Lista de produtos
  const produtos = useMemo(
    () => [
      { id: "1", nome: "Notebook", preco: 3500.0, categoria: "Eletrônicos" },
      { id: "2", nome: "Mouse", preco: 50.0, categoria: "Eletrônicos" },
      { id: "3", nome: "Teclado", preco: 150.0, categoria: "Eletrônicos" },
      { id: "4", nome: "Cadeira Gamer", preco: 800.0, categoria: "Móveis" },
      { id: "5", nome: "Mesa", preco: 450.0, categoria: "Móveis" },
      { id: "6", nome: "Estante", preco: 350.0, categoria: "Móveis" },
      { id: "7", nome: "Caneta", preco: 2.5, categoria: "Papelaria" },
      { id: "8", nome: "Caderno", preco: 15.0, categoria: "Papelaria" },
      { id: "9", nome: "Lápis", preco: 1.5, categoria: "Papelaria" },
    ],
    []
  );

  // Filtra e agrupa produtos por categoria
  const produtosFiltrados = useMemo(() => {
    const filtrados = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    const agrupados = filtrados.reduce((acc, produto) => {
      const categoriaExistente = acc.find(
        (item) => item.categoria === produto.categoria
      );

      if (categoriaExistente) {
        categoriaExistente.data.push(produto);
      } else {
        acc.push({
          categoria: produto.categoria,
          data: [produto],
        });
      }

      return acc;
    }, []);

    return agrupados;
  }, [produtos, filtro]);

  // Handler memoizado para mudança de texto
  const handleFiltroChange = useCallback((texto) => {
    setFiltro(texto);
  }, []);

  // Renderiza cada item
  const renderItem = useCallback(({ item }) => {
    return <ProdutoItem nome={item.nome} preco={item.preco} />;
  }, []);

  // Renderiza cabeçalho da seção
  const renderSectionHeader = useCallback(({ section }) => {
    return <CategoriaHeader categoria={section.categoria} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={filtro}
        onChangeText={handleFiltroChange}
      />

      <SectionList
        sections={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
        }
      />
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: width > 600 ? 20 : 10,
  },
  titulo: {
    fontSize: width > 600 ? 28 : 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    backgroundColor: "#4a90e2",
    padding: 12,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 6,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 4,
    marginHorizontal: 2,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemNome: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  itemPreco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4a90e2",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    color: "#999",
  },
});

export default CatalogoProduto;
