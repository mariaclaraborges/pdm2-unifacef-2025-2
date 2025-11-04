4. Renderização eficiente com FlatList 1

Ao contrário do `.map()` usado no React Web, o FlatList renderiza sob demanda, 2carregando apenas os elementos visíveis na tela. 3Com isso, podemos carregar longas listas de dados sem perda de desempenho. 4

**Exemplo:** 5



```JavaScript
import React, { useCallback } from 'react'; [cite: 5]
import { FlatList, Text, View, StyleSheet } from 'react-native'; [cite: 6]

const produtos = Array.from({ length: 1000 }).map((_, i) => ({ [cite: 7]
  id: String(i), [cite: 8]
  nome: 'Produto ${i}', [cite: 9, 10]
  preco: (Math.random() * 500).toFixed(2), [cite: 11]
})); [cite: 12]

export default function Listaotimizada() { [cite: 13]
  const renderItem = useCallback(({ item }) => ( [cite: 14]
    <View style={styles.card}> [cite: 14]
      <Text style={styles.nome}>{item.nome}</Text> [cite: 15]
      <Text style={styles.preco}>R$ {item.preco}</Text> [cite: 15]
    </View> [cite: 16]
  ), []); [cite: 17]

  return ( [cite: 18]
    <FlatList [cite: 19]
      data={produtos} [cite: 20]
      keyExtractor={(item) => item.id} [cite: 21]
      renderItem={renderItem} [cite: 22]
      initialNumToRender={12} [cite: 23]
      windowSize={10} [cite: 24]
    /> [cite: 25]
  ); [cite: 26]
} [cite: 27]

const styles = StyleSheet.create({ [cite: 28, 30]
  card: { [cite: 29]
    backgroundColor: '#f8f9fa', [cite: 32]
    marginVertical: 6, [cite: 33]
    padding: 12, [cite: 34]
    borderRadius: 10, [cite: 35]
    shadowColor: '#000', [cite: 36]
    shadowOpacity: 0.1, [cite: 37]
    shadowRadius: 3, [cite: 38]
  }, [cite: 31]
  nome: { [cite: 39]
    fontWeight: 'bold', [cite: 41]
  }, [cite: 40]
  preco: { [cite: 42]
    color: 'gray', [cite: 45]
  }, [cite: 43]
}); [cite: 44]
```

**Destaques técnicos:** 6

- `useCallback()` evita re-renderizações desnecessárias. 7
    
- `windowSize` e `initialNumToRender` controlam desempenho. 8
    

---

5. Agrupamento de dados com SectionList 9

O SectionList é ideal quando os itens estão organizados por categoria (como "Eletrônicos", "Roupas" etc.). 10



```JavaScript
import React from 'react'; [cite: 52]
import { SectionList, Text, View, StyleSheet } from 'react-native'; [cite: 53]

const dados = [ [cite: 54]
  { title: 'Eletrônicos', data: ['Notebook', 'Smartphone', 'TV'] }, [cite: 56]
  { title: 'Roupas', data: ['Camiseta', 'Calça', 'Jaqueta'] }, [cite: 56]
];

export default function ListaAgrupada() { [cite: 57]
  return ( [cite: 57]
    <SectionList [cite: 58]
      sections={dados} [cite: 59]
      keyExtractor={(item, index) => item + index} [cite: 60]
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} [cite: 61]
      renderSectionHeader={({ section }) => ( [cite: 61]
        <Text style={styles.header}>{section.title}</Text> [cite: 62]
      )} [cite: 63]
    /> [cite: 64]
  ); [cite: 65]
} [cite: 66]

const styles = StyleSheet.create({ [cite: 67, 70]
  header: { [cite: 68]
    fontSize: 20, [cite: 71]
    backgroundColor: '#eee', [cite: 72]
    padding: 8, [cite: 73]
    fontWeight: 'bold', [cite: 74]
  }, [cite: 69]
  item: { [cite: 75]
    padding: 10, [cite: 76]
  }, [cite: 77]
}); [cite: 78]
```

---

6. Layout responsivo com dimensões dinâmicas 11

O módulo Dimensions permite ajustar o layout ao tamanho da tela, garantindo responsividade. 12



```JavaScript
import { Dimensions } from 'react-native'; [cite: 81]
const { width, height } = Dimensions.get('window'); [cite: 82]
```



```JavaScript
const styles = StyleSheet.create({ [cite: 84, 85]
  banner: { [cite: 86]
    width: width * 0.9, [cite: 87]
    height: height * 0.25, [cite: 88]
    borderRadius: 10, [cite: 89]
  }, [cite: 90]
}); [cite: 91]
```

**Use também:** 13

- `useWindowDimensions()` para detectar mudanças em tempo real (como rotação). 14
    
- % ou valores relativos no Flexbox para melhor adaptação. 15
