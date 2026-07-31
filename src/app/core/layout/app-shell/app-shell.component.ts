import { Component, OnInit } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { RouterOutlet } from '@angular/router';
import { AppBottomNavComponent } from '../app-bottom-nav/app-bottom-nav.component';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  standalone: true,
  imports: [IonApp, AppHeaderComponent, IonContent, RouterOutlet, AppBottomNavComponent]
})
export class AppShellComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
