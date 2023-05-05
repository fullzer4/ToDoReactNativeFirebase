# ToDoReactNativeFirebase

Este e um repositorio de crud para inciantes com firebase. Espero que gostem desse repositorio citei aqui no README algumas funcoes do app para nao ter que ficar navegando no codigo inteiro. Caso queira ver o tutorial desse repositorio acesse <a href="https://www.youtube.com/watch?v=SJSRpo23tJY&ab_channel=yFullzer4">aqui</a>.

### Instalar dependecias

instalar com yarn
```bash
  yarn
```

instalar com npm
```bash
  npm install
```

### Iniciar projeto

iniciar com yarn
```bash
  yarn start
```

instalar com npm
```bash
  npm run start
```

## Conexao com firebase

```javascript
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';

  let firebaseConfig = { //mudar para as keys do seu projeto
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
  };

  if(!firebase.apps.length){ //deixa uma rota
    console.log(`Conectando...  Status:${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig);
    console.log(`Conectado  Status:${firebase.apps.length}`);
  }

  export default firebase;
```

## Firebase funcoes create, read, update e delete do app

create:  na colecao Pessoa criando um documento com nome / id aleatorio ("mas unico").
```javascript
  const novoUsuarioRef = await firebase.firestore().collection("Pessoas").add({
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf
  })

```

read:  funcao para passar em todos os documentos em Pessoas e pegar os dados dos devidos documentos com um desconstructor
```javascript
  const unsubscribe = firebase.firestore().collection('Pessoas').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });
```

update:  no doc(id) passar o id do documento e no dados passar um objeto com o respectivo nome das variaveis que deseja ser adulterados no banco
```javascript
  const atualizarPessoa = (id, dados) => {
    firebase.firestore().collection('Pessoas').doc(id).update(dados);
  }
```

delete:  no (id) passar o id do documento a ser excluido
```javascript
  const excluirPessoa = (id) => {
    firebase.firestore().collection('Pessoas').doc(id).delete();
  }
```

## Components para listar usuario

card de pessoas para ser renderizado na lista que recebe um item que seria os dados salvos la no data do metodo read dentro de um array ou objeto:
```javascript
   const renderPessoa = ({ item }) => (
    <View style={styles.pessoa}>
      <View style={styles.variaveis}>
        <Text style={styles.nome}>{`${item.nome} ${item.sobrenome}`}</Text>
        <Text style={styles.cpf}>{`CPF: ${item.cpf}`}</Text>
      </View>
      <View style={styles.acoes}>
        <Pressable onPress={() => showEdit(item.id)}>
          <Image style={styles.edit} source={require(
            '../assets/pencil.png',
          )}></Image>
        </Pressable>
        <Pressable onPress={() => excluirPessoa(item.id)}>
          <Image style={styles.trash} source={require(
            '../assets/trash.png',
          )}></Image>
        </Pressable>
      </View>
    </View>
  );
```

list para renderizar todos os components e criar o scroll de animacao. Na variavel `data={pessoas}` recebe os dados dos objetos a serem criados o `renderItem={renderPessoa}` para renderizar o componente com os dados dos objetos  `keyExtractor={(item) => item.id}` para dar a key unica a cada objeto a ser criado e `contentContainerStyle={styles.list}` para estilizacao:
```javascript
    <FlatList
        data={pessoas}
        renderItem={renderPessoa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
     />
```

