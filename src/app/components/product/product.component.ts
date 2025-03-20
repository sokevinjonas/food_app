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
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { Strings } from 'src/app/enums/strings';
import { VegNonvegIndicatorComponent } from '../../widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
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
  currency = Strings.currency;

  constructor() {
    addIcons({
      star,
      heart,
    });
  }

  ngOnInit() {}
}
