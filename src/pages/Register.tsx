import React, { useState } from "react";
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useIonToast } from "@ionic/react";
import { Link } from "react-router-dom";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [present] = useIonToast();

  async function register() {
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (!password || !confirmPassword) {
      return present({ message: "Password fields cannot be empty", duration: 2000 });
    }

    if (password.trim() !== confirmPassword.trim()) {
      return present({ message: "Passwords do not match", duration: 2000 });
    }

    if (username.trim() === "" || password.trim() === "") {
      return present({ message: "Username and password are required", duration: 2000 });
    }

    const res = await registerUser(username, password);
    if (res) {
      present({ message: "You have registered successfully!", duration: 2000 });
    } else {
      present({ message: "Registration failed! Try again.", duration: 2000 });
    }
  }

  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color": "green" }}>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Username?"
          onIonChange={(e) => setUsername(e.detail.value!)}
        />
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
        <IonInput
          type="password"
          placeholder="Confirm Password?"
          onIonChange={(e) => setConfirmPassword(e.detail.value!)}
        />
        <IonButton onClick={register}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
