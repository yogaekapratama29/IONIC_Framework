import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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


export async function loginUser(username: string, password: string) {
    if (!username || !password) {
        console.error("Username dan password harus diisi!");
        return false;
    }

    const email = `${username}@yoga123.com`; 

    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Berhasil:", res.user);
        return true;
    } catch (error: any) {
        console.error("Login Gagal:", error.message);
        return false;
    }
}

export default app;
