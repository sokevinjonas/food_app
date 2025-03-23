import { Component, computed, inject } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonLabel,
  IonItem,
  IonToolbar,
  IonIcon,
  IonText,
  IonButton,
  IonSearchbar,
  IonCol,
  IonRow,
  IonFooter,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bicycleOutline,
  chevronDownOutline,
  location,
  notifications,
  options,
  timeOutline,
} from 'ionicons/icons';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { CategoryComponent } from '../../components/category/category.component';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category/category.service';
import { Banner } from 'src/app/interfaces/banner.interface';
import { BannerService } from 'src/app/services/banner/banner.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductListHorizontalComponent } from '../../components/product-list-horizontal/product-list-horizontal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonFooter,
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
    BannerComponent,
    CategoryComponent,
    ProductListHorizontalComponent,
  ],
})
export class HomePage {
  private categoryService = inject(CategoryService);
  private bannerService = inject(BannerService);
  private productService = inject(ProductService);

  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());
  constructor(private route: Router) {
    addIcons({
      location,
      chevronDownOutline,
      notifications,
      options,
      bicycleOutline,
      timeOutline,
    });
  }
  openSearchPage() {
    this.route.navigate(['/search']);
  }
}
