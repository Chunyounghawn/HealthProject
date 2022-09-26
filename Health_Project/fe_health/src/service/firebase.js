import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJC7OPtOWu0CUGbDWvkRW6pUzBQIoFePk",
  authDomain: "health-together-c10fb.firebaseapp.com",
  projectId: "health-together-c10fb",
  storageBucket: "health-together-c10fb.appspot.com",
  messagingSenderId: "1077931592859",
  appId: "1:1077931592859:web:f29c0127b7052510040a3e",
  measurementId: "G-4C77RBT9VD",
}

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig)

export const firebaseInstance = firebase
export const authService = firebase.auth()

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
