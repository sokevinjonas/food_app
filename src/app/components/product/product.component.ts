import { Component, input, OnInit } from '@angular/core';
import {
  IonCard,
  IonThumbnail,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, star } from 'ionicons/icons';
import { Product } from 'src/app/interfaces/product.interface';
import { VegNonvegIndicatorComponent } from '../../widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [
    IonCard,
    IonThumbnail,
    IonImg,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    RouterLink,
    VegNonvegIndicatorComponent,
  ],
})
export class ProductComponent implements OnInit {
  item = input<Product>();

  constructor() {
    addIcons({
      star,
      heart,
    });
  }

  ngOnInit() {}
}
