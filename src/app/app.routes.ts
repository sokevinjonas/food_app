import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'ticket',
        loadComponent: () =>
          import('./pages/ticket/ticket.page').then((m) => m.TicketPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('./pages/profil/profil.page').then((m) => m.ProfilPage),
      },
    ],
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.page').then(
        (m) => m.ProductDetailPage
      ),
  },
  {
    path: 'banner-all',
    loadComponent: () =>
      import('./seeMore/banner-all/banner-all.page').then(
        (m) => m.BannerAllPage
      ),
  },
  {
    path: 'category-all',
    loadComponent: () => import('./seeMore/category-all/category-all.page').then( m => m.CategoryAllPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
];
