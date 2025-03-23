import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRow,
  IonList,
  IonThumbnail,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonCol,
  IonSearchbar,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonCol,
    IonGrid,
    IonText,
    IonLabel,
    IonItem,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    IonThumbnail,
    CommonModule,
    FormsModule,
    IonSearchbar,
  ],
})
export class SearchPage implements OnInit {
  @ViewChild('searchPageInput', { static: false }) searchbar!: IonSearchbar;

  searchTerm: string = '';
  searchResults: any[] = [];

  // Exemples de recherches fréquentes
  frequentSearches = [
    {
      id: 1,
      name: 'Margherita',
      category: 'Pizzeria Roma',
      price: 1000,
      image: 'assets/products/red_velvet_cake.jpg',
      tags: ['pizza'],
    },
    {
      id: 2,
      name: 'Maki Mix',
      category: 'Sushi Palace',
      price: 15000,
      image: 'assets/products/vanilla-cupcake.jpg',
      tags: ['sushi'],
    },
    {
      id: 3,
      name: 'Cheeseburger',
      category: 'Burger House',
      price: 8000,
      image: 'assets/products/vanilla-cupcake.jpg',
      tags: ['burger'],
    },
  ];

  // À remplacer par votre vrai service de données
  mockProducts = [
    {
      id: 1,
      name: 'Margherita',
      restaurant: 'Pizzeria Roma',
      price: 10.99,
      image: 'assets/products/red_velvet_cake.jpg',
      tags: ['pizza'],
    },
    {
      id: 2,
      name: 'Maki Mix',
      restaurant: 'Sushi Palace',
      price: 15.99,
      image: 'assets/products/vanilla-cupcake.jpg',
      tags: ['sushi'],
    },
    {
      id: 3,
      name: 'Cheeseburger',
      restaurant: 'Burger House',
      price: 8.99,
      image: 'assets/products/vanilla-cupcake.jpg',
      tags: ['burger'],
    },
    // Ajoutez plus de produits ici
  ];
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchbar.setFocus();
    }, 300);
  }

  searchItems() {
    if (!this.searchTerm) {
      this.searchResults = [];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.searchResults = this.mockProducts.filter((item) => {
      return (
        item.name.toLowerCase().includes(term) ||
        item.restaurant.toLowerCase().includes(term) ||
        item.tags.some((tag) => tag.includes(term))
      );
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchResults = [];
  }

  selectSearch(term: string) {
    this.searchTerm = term;
    this.searchItems();
  }

  selectResult(result: any) {
    // Naviguer vers la page détaillée du produit
    console.log('Produit sélectionné:', result);
    // this.router.navigate(['/product', result.id]);
  }
}
