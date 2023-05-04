import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import firebase from '../firebase';

const Listagem = () => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('Pessoas').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPessoas(data);
    });
    return () => unsubscribe();
  }, []);

  const renderPessoa = ({ item }) => (
    <View style={styles.pessoa}>
      <Text style={styles.nome}>{`${item.nome} ${item.sobrenome}`}</Text>
      <Text style={styles.cpf}>{`CPF: ${item.cpf}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={pessoas}
        renderItem={renderPessoa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pessoa: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    width: '90%',
    borderRadius: 5,
    alignItems: 'flex-start',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cpf: {
    fontSize: 16,
  },
});

export default Listagem;