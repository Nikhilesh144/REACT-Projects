
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmAVJU4SXidzi4NzPGY1oRYqXm1g7QaTU",
  authDomain: "notes-application-3a710.firebaseapp.com",
  projectId: "notes-application-3a710",
  storageBucket: "notes-application-3a710.appspot.com",
  messagingSenderId: "32035738850",
  appId: "1:32035738850:web:f899558b48274fece87abb",
  measurementId: "G-72NKC5Q2XP"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const notesCollection=collection(db,"notes");
