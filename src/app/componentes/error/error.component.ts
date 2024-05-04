import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
