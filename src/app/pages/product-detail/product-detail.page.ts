import { Component, OnInit, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonFabButton,
  IonIcon,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonListHeader,
  IonAvatar,
  IonButton,
  IonFooter,
} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/product.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  shareSocialOutline,
  star,
  chatboxEllipses,
  call,
  bagHandle,
} from 'ionicons/icons';
import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { Seller } from 'src/app/interfaces/seller.interface';
import { ImageRectBoxComponent } from '../../widgets/image-rect-box/image-rect-box.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonButton,
    IonAvatar,
    IonListHeader,
    IonText,
    IonLabel,
    IonItem,
    IonList,
    IonCol,
    IonRow,
    IonIcon,
    IonFabButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    NgClass,
    VegNonvegIndicatorComponent,
    ImageRectBoxComponent,
  ],
})
export class ProductDetailPage implements OnInit {
  readMore = signal<boolean>(false);
  productDetails = signal<
    (Product & { seller?: Seller; category?: Category }) | null
  >(null);
  id!: number;

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  constructor() {
    addIcons({
      heartOutline,
      shareSocialOutline,
      star,
      chatboxEllipses,
      call,
      bagHandle,
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (!id) {
      return;
    }

    this.id = parseInt(id);
    const product = this.productService.getProductById(this.id);
    console.log(product);

    if (product) this.productDetails.set(product);
  }
}
