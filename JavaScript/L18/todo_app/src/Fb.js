import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBOZUOUvBdKtXPaLSv6167uGyxvlGn4nCs",
  authDomain: "todoreactfirebase11oct22.firebaseapp.com",
  databaseURL: "https://todoreactfirebase11oct22-default-rtdb.firebaseio.com",
  projectId: "todoreactfirebase11oct22",
  storageBucket: "todoreactfirebase11oct22.appspot.com",
  messagingSenderId: "501853717879",
  appId: "1:501853717879:web:e87b0a7e992c8171688d72"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;