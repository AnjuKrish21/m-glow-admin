import { Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './app-bottom-nav.component.html',
  styleUrls: ['./app-bottom-nav.component.scss'],
  standalone: true,
  imports:[IonFooter, IonToolbar]
})
export class AppBottomNavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
