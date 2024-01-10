import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const userUpdate = (name) =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateProfile(user, { displayName: name })
        .then(() => {
          console.log("Display name updated successfully");
        })
        .catch((error) => {
          console.error("Error updating display name:", error.message);
        });
    }
  });
}

