import { Injectable } from '@angular/core';
import { categories } from 'src/app/dummy-data/categories';
import { Category } from 'src/app/interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getCategories(): Category[] {
    return categories;
  }
  constructor() {}
}
