import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports:[IonContent]
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
