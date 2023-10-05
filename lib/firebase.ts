import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwvXZ87b8bXlU0ECDxYwyKrkYYjgR4l6A",
  authDomain: "mindmap-339fd.firebaseapp.com",
  databaseURL: "https://mindmap-339fd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mindmap-339fd",
  storageBucket: "mindmap-339fd.appspot.com",
  messagingSenderId: "857544303019",
  appId: "1:857544303019:web:8f17ff87cdd036dfe3f2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const firestore = getFirestore(app)
export const database = getDatabase(app)
export const usersDatabaseRef = ref(database, "users");
export const historiesDatabaseRef = ref(database, "histories")
export const gamesDatabaseRef = ref(database, "games")
export const materisDatabaseRef = ref(database, "materis")