import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

const app=firebase.initializeApp({

    apiKey: "AIzaSyAyQ7m7wJ3ECA8laPXyWHStniML3WL9iPA",
    authDomain: "test-32789.firebaseapp.com",
    projectId: "test-32789",
    storageBucket: "test-32789.appspot.com",
    messagingSenderId: "828066146261",
    appId: "1:828066146261:web:8bb290e1dc1673b30eff5c",
    measurementId: "G-04FR1R9SXF"

})


export const auth =app.auth()
export const db=  app.firestore();

export default app