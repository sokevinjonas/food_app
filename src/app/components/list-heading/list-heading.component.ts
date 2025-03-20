import { Component, input, OnInit } from '@angular/core';
import { IonLabel, IonItemDivider, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  imports: [IonButton, IonItemDivider],
})
export class ListHeadingComponent implements OnInit {
  heading = input<string>('');
  buttonTitle = input<string>('Voir plus');
  constructor() {}

  ngOnInit() {}
}
