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
      <Text style={styles.text}>{`Nome: ${item.nome} ${item.sobrenome}`}</Text>
      <Text style={styles.text}>{`CPF: ${item.cpf}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pessoas}
        renderItem={renderPessoa}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  pessoa: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    width: '90%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Listagem;