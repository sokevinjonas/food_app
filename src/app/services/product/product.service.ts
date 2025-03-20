import { Injectable } from '@angular/core';
import { products } from 'src/app/dummy-data/products';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return products;
  }

  constructor() {}
}
