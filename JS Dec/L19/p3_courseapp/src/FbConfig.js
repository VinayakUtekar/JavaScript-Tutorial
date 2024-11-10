import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBoUFY7TBak3k-F6YDjQnmrMAuTy2QMDY",
  authDomain: "refbdbss29dec22.firebaseapp.com",
  databaseURL: "https://refbdbss29dec22-default-rtdb.firebaseio.com",
  projectId: "refbdbss29dec22",
  storageBucket: "refbdbss29dec22.appspot.com",
  messagingSenderId: "1033681248262",
  appId: "1:1033681248262:web:329e1745ba45d14f2ea387"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;