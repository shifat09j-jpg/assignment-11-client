


import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= REGISTER ================= */
  const createUser = async (email, password, name) => {
    setLoading(true);

    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(res.user, {
      displayName: name,
    });

     await fetch("https://assignment-11-server2.vercel.app/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uid: res.user.uid,
      name: name,
      email,
      role: "customer", // default role
      photoURL: res.user.photoURL || "",
    }),
  });

    return res;
  };

  /* ================= LOGIN ================= */
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* ================= GOOGLE LOGIN ================= */
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  /* ================= LOGOUT ================= */
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* ================= ROLE SYSTEM ================= */
  const getUserRole = (email) => {
    // 🔴 এখানে তোমার Admin / Chef Email বসাবে

    if (email === "admin@gmail.com") {
      return "admin";
    }

    if (email === "chef@gmail.com") {
      return "chef";
    }

    return "customer"; // default
  };

  /* ================= AUTH STATE ================= */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (currentUser) {

        const role = getUserRole(currentUser.email);

        setUser({
          ...currentUser,
          role, // 🔥 role add হলো এখানে
        });

      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  /* ================= CONTEXT ================= */
  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



