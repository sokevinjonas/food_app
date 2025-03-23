import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton,
  IonList,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { filterOutline, searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-banner-all',
  templateUrl: './banner-all.page.html',
  styleUrls: ['./banner-all.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonBackButton,
    IonButtons,
    IonCol,
    IonRow,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class BannerAllPage implements OnInit {
  banner = [
    { image: 'assets/banners/1.jpg' },
    { image: 'assets/banners/2.jpg' },
    { image: 'assets/banners/3.jpg' },
    { image: 'assets/banners/1.jpg' },
    { image: 'assets/banners/2.jpg' },
    { image: 'assets/banners/3.jpg' },
    { image: 'assets/banners/1.jpg' },
    { image: 'assets/banners/2.jpg' },
  ];
  constructor() {}

  ngOnInit() {}
}
