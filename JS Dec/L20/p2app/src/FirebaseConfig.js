import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBXVwLajPWFssK-lgRausHVajnUjtJhYl8",
  authDomain: "refbsms1jan22.firebaseapp.com",
  databaseURL: "https://refbsms1jan22-default-rtdb.firebaseio.com",
  projectId: "refbsms1jan22",
  storageBucket: "refbsms1jan22.appspot.com",
  messagingSenderId: "130629088989",
  appId: "1:130629088989:web:c387167ad22917a90fcd34"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;