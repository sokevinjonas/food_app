import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NavController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonItem,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonProgressBar,
  IonListHeader,
  IonList,
  IonLabel,
  IonBadge,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import {
  star,
  lockClosed,
  location,
  receipt,
  notifications,
  helpCircle,
  shield,
  documentText,
  headset,
  language,
  logOut,
  createOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [
    IonBadge,
    IonLabel,
    IonList,
    IonListHeader,
    IonProgressBar,
    IonCardTitle,
    IonCardHeader,
    IonButton,
    IonAvatar,
    IonCardContent,
    IonCard,
    IonItem,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSelect,
    IonSelectOption,
  ],
})
export class ProfilPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    addIcons({
      createOutline,
      star,
      lockClosed,
      location,
      receipt,
      notifications,
      helpCircle,
      shield,
      documentText,
      headset,
      language,
      logOut,
    });
  }
  user = {
    nom: 'Dupont',
    prenom: 'Marie',
    email: 'marie.dupont@exemple.com',
    points: 750,
  };

  notificationCount = 3;
  selectedLanguage = 'fr';
  ngOnInit() {
    this.loadUserData();
  }
  loadUserData() {
    // Ici, vous chargeriez les données utilisateur depuis votre service
    console.log('Chargement des données utilisateur...');
  }

  editProfile() {
    this.navCtrl.navigateForward('/edit-profile');
  }

  changePassword() {
    this.navCtrl.navigateForward('/change-password');
  }

  manageAddresses() {
    this.navCtrl.navigateForward('/addresses');
  }

  orderHistory() {
    this.navCtrl.navigateForward('/order-history');
  }

  notifications() {
    this.navCtrl.navigateForward('/notifications');
  }

  openFAQ() {
    this.navCtrl.navigateForward('/faq');
  }

  openPrivacyPolicy() {
    this.navCtrl.navigateForward('/privacy-policy');
  }

  openTerms() {
    this.navCtrl.navigateForward('/terms');
  }

  contactSupport() {
    this.navCtrl.navigateForward('/support');
  }

  changeLanguage() {
    // La sélection est déjà gérée par le ionSelect
  }

  onLanguageChange() {
    this.presentToast(
      `Langue changée pour : ${this.getLanguageName(this.selectedLanguage)}`
    );
    // Ici, vous implémenteriez le changement de langue dans votre app
  }

  getLanguageName(code: string): string {
    const languages: { [key: string]: string } = {
      fr: 'Français',
      en: 'English',
      es: 'Español',
      ar: 'العربية',
    };
    return languages[code as keyof typeof languages] || code;
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Se déconnecter',
      message: 'Êtes-vous sûr de vouloir vous déconnecter?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Déconnexion',
          handler: () => {
            // Logique de déconnexion
            this.navCtrl.navigateRoot('/login');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'secondary',
    });
    toast.present();
  }
}
