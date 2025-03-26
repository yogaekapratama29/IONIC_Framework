import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbOPM5jdKFXXdWW3blXcSCmEEpXGL8iAI",
    authDomain: "ionic-596ec.firebaseapp.com",
    projectId: "ionic-596ec",
    storageBucket: "ionic-596ec.firebasestorage.app",
    messagingSenderId: "997376595107",
    appId: "1:997376595107:web:9513c871c7d938142cdb16",
    measurementId: "G-8M5E156QL0"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function loginUser(username: string, password: string, presentToast: (msg: string, duration: number) => void): Promise<boolean> {
  if (!username || !password) {
    presentToast("Username dan password harus diisi!", 3000);
    return false;
  }

  const email = `${username}@yoga123.com`;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login Berhasil:", res.user);
    presentToast("Login berhasil!", 2000);
    return true;
  } catch (error: any) {
    presentToast(error.message, 4000);
    return false;
  }
}

export async function registerUser(username: string, password: string): Promise<boolean> {
    const email = `${username}@yoga123.com`; // Pastikan format email benar
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registrasi Berhasil:", userCredential.user);
      return true; 
    } catch (error: any) {
      console.error("Registrasi Gagal:", error.message);
      return false;
    }
  }
export default app;
