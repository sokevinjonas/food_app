import { Component, OnInit } from '@angular/core';
import {
  IonTabBar,
  IonIcon,
  IonTabButton,
  IonLabel,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, ticket, cart } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonLabel, IonTabButton, IonIcon, IonTabBar],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({ home, person, ticket, cart });
  }

  ngOnInit() {}
}
