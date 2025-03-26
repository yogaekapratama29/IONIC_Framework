import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { useIonToast } from '@ionic/react';

const Home: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [present] = useIonToast();
  
  async function login() {
    const res = await loginUser(username, password);
  
    present({
      message: res ? 'You have logged in' : 'Error logging in with your credentials',
      duration: 2000
    });
  }
  


  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color" : "green"}}>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonInput placeholder="Username?" onIonChange={(e:any) => setUsername(e.target.value)}></IonInput>
        <IonInput type='password' placeholder="Password?" onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
        <IonButton onClick={login}>Login</IonButton>

         <p>New here? <Link to='/register'>Register</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
