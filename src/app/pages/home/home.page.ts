import { Component } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonLabel,
  IonItem,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonText,
  IonButton,
  IonSearchbar,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownOutline,
  location,
  notifications,
  options,
} from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonRow,
    IonCol,
    IonSearchbar,
    IonButton,
    IonText,
    IonIcon,
    IonToolbar,
    IonItem,
    IonLabel,
    IonHeader,
    IonContent,
    ListHeadingComponent,
  ],
})
export class HomePage {
  constructor() {
    addIcons({ location, chevronDownOutline, notifications, options });
  }
}
