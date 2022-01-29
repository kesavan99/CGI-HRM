import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

const app=firebase.initializeApp({

    apiKey: "AIzaSyAzImbxeOhGxmB66HsTkeAjDcoDfjRmjX8",
    authDomain: "erp-20f3a.firebaseapp.com",
    projectId: "erp-20f3a",
    storageBucket: "erp-20f3a.appspot.com",
    messagingSenderId: "229412996571",
    appId: "1:229412996571:web:beb7f73efa554ce9d353fe",
    measurementId: "G-2ERTNC07K7"
})


export const auth =app.auth()
export const db=  app.firestore();
export const storage =app.storage();
export default app