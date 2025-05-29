import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCm90Vjv0TJIRmefg_8mtYgfBj8XGPyj8o",
  authDomain: "cellular-block-457205-f8.firebaseapp.com",
  databaseURL: "https://cellular-block-457205-f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cellular-block-457205-f8",
  storageBucket: "cellular-block-457205-f8.appspot.com", // fixed typo (.app -> .com)
  messagingSenderId: "483404308318",
  appId: "1:483404308318:web:04a97cd313ea7fbf77b9cf",
  measurementId: "G-TZ05K3K12Z"
};

// Initialize Firebase app only once
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB };
