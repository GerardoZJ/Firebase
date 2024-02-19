import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCykYDcxUDgotuuHasC-sgm8UoGBS39Ay4",
  authDomain: "proyectotokens-6ba6b.firebaseapp.com",
  projectId: "proyectotokens-6ba6b",
  storageBucket: "proyectotokens-6ba6b.appspot.com",
  messagingSenderId: "713452875339",
  appId: "1:713452875339:web:ebfa63408f62ef58e167ce"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);