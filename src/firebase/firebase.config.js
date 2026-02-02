import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAehaEQdmcxnDIfI_n5qyhUUXUmXYjTzKg",
  authDomain: "skillswap-skill.firebaseapp.com",
  projectId: "skillswap-skill",
  storageBucket: "skillswap-skill.firebasestorage.app",
  messagingSenderId: "525016836399",
  appId: "1:525016836399:web:7a08dfc0215e14295459da",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
