import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonRow,
  IonBackButton,
  IonCol,
  IonText,
  IonImg,
  IonGrid,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-category-all',
  templateUrl: './category-all.page.html',
  styleUrls: ['./category-all.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCard,
    IonGrid,

    IonImg,
    IonText,
    IonCol,
    IonBackButton,
    IonRow,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class CategoryAllPage implements OnInit {
  categories = [
    { name: 'Cake', image: 'assets/categories/cake.png' },
    { name: 'Cookies', image: 'assets/categories/cookie.png' },
    { name: 'Cup Cake', image: 'assets/categories/cupcake.png' },
    { name: 'Donuts', image: 'assets/categories/donut.png' },
    { name: 'Cake', image: 'assets/categories/cake.png' },
    { name: 'Cookies', image: 'assets/categories/cookie.png' },
    { name: 'Cup Cake', image: 'assets/categories/cupcake.png' },
    { name: 'Donuts', image: 'assets/categories/donut.png' },
  ];
  constructor() {}

  ngOnInit() {}
}
