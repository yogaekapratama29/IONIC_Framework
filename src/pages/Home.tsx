import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';



const Home: React.FC = () => {

  const [input, setInput] = useState<string>('');

  useEffect(() => {
    console.log(input)
  },[input])

  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color" : "green"}}>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
      <IonInput value={input} onIonChange={(e:any) => setInput(e.target.value)} ></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Home;
