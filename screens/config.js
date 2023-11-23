import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkcpFeSMWzjTSET1zVesr_tL86DjiBrGQ",
  authDomain: "carparkingapp-70002.firebaseapp.com",
  projectId: "carparkingapp-70002",
  storageBucket: "carparkingapp-70002.appspot.com",
  messagingSenderId: "802092633898",
  appId: "1:802092633898:web:1dfe973930c116846e1853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);
