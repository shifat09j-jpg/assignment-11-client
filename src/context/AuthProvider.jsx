// import React, { useEffect, useState } from 'react';
// import { AuthContext } from './AuthContext';

// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import { auth} from  '../firebase/Firebase.config';

//  const googleProvider = new GoogleAuthProvider();



// const AuthProvider = ({children}) => {
//      const [user, setUser] = useState(null);
//      const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signInUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//     }

//     const signOutUser = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false)
//         })
//         return () => {
//             unsubscribe()
//         }
//     }, [])



//     const authInfo = {
//           createUser,
//           signInUser,
//           signInWithGoogle,
//           signOutUser,
//           user,
//           loading
//     }
//     return (
//         <AuthContext value ={authInfo}>
//               {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;


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
