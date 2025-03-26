import React, { useState } from "react";
import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { loginUser } from "../firebaseConfig";
import { useIonToast } from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserState } from "../redux/action";

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [present] = useIonToast();
  const dispatch = useDispatch();
  const history = useHistory();

  async function login() {
    if (!username || !password) {
      await present({ message: "Username dan password harus diisi!", duration: 2000 });
      return;
    }

    setBusy(true); 

    try {
      const res = await loginUser(username, password, async (msg, duration) => {
        await present({ message: msg, duration });
      });

      if (res) {
        dispatch(setUserState(res.user.email));
        await present({ message: "Login Berhasil!", duration: 2000 });
        history.replace('/dashboard');
      } else {
        await present({ message: "Login Gagal! Periksa username dan password Anda.", duration: 2000 });
      }
    } catch (error) {
      await present({ message: "Terjadi kesalahan saat login!", duration: 2000 });
    }

    setBusy(false); 
  }

  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color": "green" }}>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput placeholder="Username?" onIonChange={(e) => setUsername(e.detail.value!)} />
        <IonInput type="password" placeholder="Password?" onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton onClick={login}>Login</IonButton>
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
