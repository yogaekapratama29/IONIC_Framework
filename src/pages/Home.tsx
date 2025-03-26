import React from 'react';
import { IonAvatar, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const arr = [
  {
    name: "Yoga Eka",
    desc : "Telkom University Purwokerto"
  },
  {
    name: "Han",
    desc : "Universitas Indonesia"
  },
  {
    name : "Supri",
    desc : "Universitas Indonesia"
  }
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader style={{ "--ion-background-color" : "green"}}>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
            {arr.map(elem => 
              (<IonItemSliding key={elem.name}>
                <IonItem>
                  <IonAvatar>
                    <img src={`https://ionicframework.com/docs/demos/api/avatar-${elem.name.toLowerCase()}.png`} alt="avatar"/>
                  </IonAvatar>
                  <IonLabel className='ion-padding'>
                    <h2>{elem.name}</h2>
                    <h3>{elem.desc}</h3>
                    <p>Some helper text!</p>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side='end'>
                  <IonItemOption onClick={() => alert("Press Delete!")}>
                    Delete
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>))}
        </IonList>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
