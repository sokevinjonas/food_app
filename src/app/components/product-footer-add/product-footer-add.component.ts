import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonFooter,
  IonLabel,
  IonToolbar,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, bagHandle, removeCircle } from 'ionicons/icons';

@Component({
  selector: 'app-product-footer-add',
  templateUrl: './product-footer-add.component.html',
  styleUrls: ['./product-footer-add.component.scss'],
  imports: [IonButton, IonText, IonToolbar, IonFooter, IonLabel, IonIcon],
})
export class ProductFooterAddComponent implements OnInit {
  constructor() {
    addIcons({
      removeCircle,
      addCircle,
      bagHandle,
    });
  }

  ngOnInit() {}
}
