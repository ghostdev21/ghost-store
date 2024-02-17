import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}

export async function logOut() {
  signOut(auth);
}
