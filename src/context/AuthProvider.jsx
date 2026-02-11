import {  useEffect, useState } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth"; 

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider =({ children }) =>{
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
  return  createUserWithEmailAndPassword(auth, email, password);
};
  const login = (email, password) => { 
    return signInWithEmailAndPassword(auth, email, password); };

  const googleLogin = () => 
    {
      return signInWithPopup(auth, googleProvider);
    };
  const logout = () => {
    return signOut(auth);
  };
  const updateUserProfile = (displayName, photoURL) =>{
return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    createUser,
    login,
    googleLogin,
    logout,
    updateUserProfile,
    resetPassword,
  };

  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;