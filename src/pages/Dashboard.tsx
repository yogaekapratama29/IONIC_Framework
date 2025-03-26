import React, { useState } from "react";
import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useSelector } from "react-redux";
import { logoutUser } from "../firebaseConfig";
import { useHistory } from "react-router";

const Dashboard: React.FC = () => {
const username = useSelector((state: any) => state.user.username);
const history = useHistory();
const [busy, setBusy] = useState(false);

async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy (false)
    history.replace('/');

}

  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color": "green" }}>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading message="Logging out...." duration = {0} isOpen={busy}/>
        <p>Hello{username} </p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
