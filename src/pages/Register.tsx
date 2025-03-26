import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom';



const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmPassword] = useState('')

  function registerUser(){
    console.log(username, password,confirmpassword) 
  }


  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color" : "green"}}>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonInput placeholder="Username?" onIonChange={(e:any) => setUsername(e.target.value)}></IonInput>
        <IonInput type='password' placeholder="Password?" onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
        <IonInput type='password' placeholder="Confirm Password?" onIonChange={(e:any) => setconfirmPassword(e.target.value)}></IonInput>
        <IonButton onClick={registerUser}>Register</IonButton>

        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
