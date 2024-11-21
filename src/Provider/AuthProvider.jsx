import { useEffect, useState } from "react";
import { AuthContext } from "../context/AllContext";
import { auth } from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user);

  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  function createUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInUser(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function updateUserProfile(profileData) {
    return updateProfile(auth.currentUser, profileData);
  }

  function googleSignIn() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  function logout() {
    setLoading(true);
    return signOut(auth);
  }

  function passwordReset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserProfile(profileData) {
    return updateProfile(auth.currentUser, profileData);
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        googleSignIn,
        signInUser,
        logout,
        updateUserProfile,
        createUser,
        passwordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
