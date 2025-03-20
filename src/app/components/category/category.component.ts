import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  OnInit,
} from '@angular/core';
import { IonicSlides, IonCol } from '@ionic/angular/standalone';
import { Category } from 'src/app/interfaces/category.interface';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [IonCol],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryComponent implements OnInit {
  swiperModules = [IonicSlides];
  categories = input<Category[]>([]);
  constructor() {}

  ngOnInit() {}
}
