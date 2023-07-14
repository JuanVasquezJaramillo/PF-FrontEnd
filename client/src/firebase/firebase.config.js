import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB41cVOUmpsDJ_W3Tz0iWZ5h8Ci0bRsP_0",
  authDomain: "onlytrainners.firebaseapp.com",
  databaseURL: "https://onlytrainners-default-rtdb.firebaseio.com",
  projectId: "onlytrainners",
  storageBucket: "onlytrainners.appspot.com",
  messagingSenderId: "99927303461",
  appId: "1:99927303461:web:ac0cb64014e943d836e6cc",
  measurementId: "G-WD7PLVTMV2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
