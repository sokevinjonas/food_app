import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonLabel, IonItemDivider, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  imports: [IonButton, IonItemDivider],
})
export class ListHeadingComponent implements OnInit {
  @Input() heading: string = '';
  @Input() name_page_next: string = '';
  @Input() buttonTitle: string = 'Voir plus';

  changePage() {
    if (this.name_page_next === 'offres') {
      this.router.navigate(['/banner-all']);
    } else if (this.name_page_next === 'category') {
      this.router.navigate(['/category-all']);
    }
    console.log(this.name_page_next);
  }
  constructor(private router: Router) {}

  ngOnInit() {}
}
