import { useRouter } from 'expo-router';
import { useState } from 'react';
import {Linking, Pressable, StyleSheet, Text, View, Image, Animated, TextInput } from 'react-native';
import firebase from "../firebase"

const App = () => {

  const router = useRouter()

  return(
    <View>
      <Pressable onPress={() => router.push("/pagina")}>
        <Text>Ir para home</Text>
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
});

export default App