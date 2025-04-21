// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqX2UKQgFuy0AAlDXwzrZGvwFgEsQ5ePQ",
  authDomain: "mvps-7adb0.firebaseapp.com",
  projectId: "mvps-7adb0",
  storageBucket: "mvps-7adb0.firebasestorage.app",
  messagingSenderId: "617672630606",
  appId: "1:617672630606:web:25dcaa6f784e266e677e1f",
  measurementId: "G-4YQHVK58E5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
import { GoogleAuthProvider } from "firebase/auth";
export const googleProvider = new GoogleAuthProvider();
