import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDV0Yz0K-RIYQngtteLKDDgPopKpCAyUjc",
  authDomain: "bet-on-better-ff315.firebaseapp.com",
  databaseURL: "https://bet-on-better-ff315-default-rtdb.firebaseio.com",
  projectId: "bet-on-better-ff315",
  storageBucket: "bet-on-better-ff315.appspot.com",
  messagingSenderId: "615825885122",
  appId: "1:615825885122:web:3a7f702ea1985ae569785b",
  measurementId: "G-B1SPBHKF68"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db}