import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';




const Home: React.FC = () => {


  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color" : "green"}}>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
      <IonButton routerLink='/login'>Login</IonButton>
      <IonButton routerLink='/register' color= 'secondary'>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
