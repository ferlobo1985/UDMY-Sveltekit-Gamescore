import { getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";   

const firebaseConfig = {
    apiKey: "AIzaSyAH3EYm3Au_BwAprqeeLZDtMRk8dAbAkX4",
    authDomain: "gamescore-db09a.firebaseapp.com",
    projectId: "gamescore-db09a",
    storageBucket: "gamescore-db09a.appspot.com",
    messagingSenderId: "783728222390",
    appId: "1:783728222390:web:b7bccbc20fe35811200617",
    measurementId: "G-505DZ5JJW9"
  };

  if(getApps().length == 0){
    const app = initializeApp(firebaseConfig)
  }

  const DB = getFirestore();
  const AUTH =  getAuth();

  export { DB,AUTH }
