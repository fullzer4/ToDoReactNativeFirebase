import { useRouter } from 'expo-router';
import { useState } from 'react';
import {Linking, Pressable, StyleSheet, Text, View, Image, Animated, TextInput } from 'react-native';
import firebase from "../firebase"

const App = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const router = useRouter()

  const handle = async (nome:string, sobrenome:string, cpf:string) => {

    console.log(nome)

    await firebase.firestore().collection("Pessoas").doc("pessoa").update({
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf
    })

    alert("criado")
  }

  return(
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='nome' onChange={(text:any) => setNome(text)} value={nome}/>
      <TextInput placeholder='sobrenome' onChange={(text:any) => setSobrenome(text)} value={sobrenome}/>
      <TextInput placeholder='cpf' onChange={(text:any) => setCpf(text)} value={cpf}/>
      <Pressable onPress={() => handle(nome, sobrenome, cpf)}>
        <Text>Criar</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/pagina")}>
        <Text>Ir para lista</Text>
      </Pressable>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  input: {
    width: "85%",
    height: "10%"
  }
});

export default App