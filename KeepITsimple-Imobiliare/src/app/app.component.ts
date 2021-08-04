import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KeepITsimple-Imobiliare';

  constructor( private router: Router ) {
  }

  toRegister() {
    this.router.navigate(['/register']);
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
