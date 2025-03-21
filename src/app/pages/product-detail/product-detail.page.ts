import { Component, OnInit, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonButton,
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
  removeCircle,
  addCircle,
  time,
} from 'ionicons/icons';
import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { Seller } from 'src/app/interfaces/seller.interface';
import { ImageRectBoxComponent } from '../../widgets/image-rect-box/image-rect-box.component';
import { ProductFooterAddComponent } from '../../components/product-footer-add/product-footer-add.component';
import { ProductAccompagnementsComponent } from '../../components/product-accompagnements/product-accompagnements.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonText,
    IonLabel,
    IonItem,
    IonList,
    IonCol,
    IonRow,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    NgClass,
    VegNonvegIndicatorComponent,
    ImageRectBoxComponent,
    ProductFooterAddComponent,
    ProductAccompagnementsComponent,
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
      star,
      time,
      removeCircle,
      addCircle,
      bagHandle,
      heartOutline,
      shareSocialOutline,
      chatboxEllipses,
      call,
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
