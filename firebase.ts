import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCieM0KbN-wDvnsWdUaQfLrAlPRolpB87I",
    authDomain: "todoreactnative-f7f29.firebaseapp.com",
    projectId: "todoreactnative-f7f29",
    storageBucket: "todoreactnative-f7f29.appspot.com",
    messagingSenderId: "802385229328",
    appId: "1:802385229328:web:70e7d252e5d31d6257bc95"
};

if(!firebase.apps.length){ //deixa uma rota
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;