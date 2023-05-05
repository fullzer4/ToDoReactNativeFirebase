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

create
```javascript
    const novoUsuarioRef = await firebase.firestore().collection("Pessoas").add({
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf
    })

```

## Components para listar usuario


