import { Component, OnInit } from '@angular/core';
import {
  IonItem,
  IonRadio,
  IonLabel,
  IonNote,
  IonCheckbox,
  IonItemDivider,
  IonList,
  IonRadioGroup,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-accompagnements',
  templateUrl: './product-accompagnements.component.html',
  styleUrls: ['./product-accompagnements.component.scss'],
  imports: [
    IonRadioGroup,
    IonList,
    IonItemDivider,
    IonNote,
    IonCheckbox,
    IonRadio,
    IonLabel,
    IonItem,
  ],
})
export class ProductAccompagnementsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
