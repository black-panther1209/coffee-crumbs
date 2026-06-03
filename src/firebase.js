import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDxOHO9o0pJHxkEQoJw9xpSVPhZt379bL8",
  authDomain: "coffee-crumbs.firebaseapp.com",
  projectId: "coffee-crumbs",
  storageBucket: "coffee-crumbs.firebasestorage.app",
  messagingSenderId: "263404102660",
  appId: "1:263404102660:web:17c4a1f18dfb610ffc4151",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;