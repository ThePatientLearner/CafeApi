import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  constructor() {
  }
}
