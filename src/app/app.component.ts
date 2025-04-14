import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { HomePage } from './home/home.page';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonCard, IonCardContent,  IonApp, IonRouterOutlet,HomePage ],
})
export class AppComponent {
  constructor() {}
}
