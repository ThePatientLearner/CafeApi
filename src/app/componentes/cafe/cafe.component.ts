import { Component, inject } from '@angular/core';
import { TiposCafeComponent } from '../tipos-cafe/tipos-cafe.component';
import { TCafe } from '../../common/t-cafe';
import { DataService } from '../../services/data.service';
import { ActivatedRoute} from '@angular/router';
import { NavComponent } from '../../layout/nav/nav.component';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [TiposCafeComponent, NavComponent,],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {
  [x: string]: any;

  cafe!: TCafe;
  arrayCafes!: TCafe[];
  data: DataService = inject(DataService);
  private ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private Router: Router = inject(Router);


  constructor() {
    this.cargarEsteCafe();
    this.cargarCafeTraducido();
  }

  private cargarEsteCafe() {
    const id = this.ActivatedRoute.snapshot.params["id"];
    this.data.getCafe(id).subscribe({
      next: (data: TCafe) => {
        this.cafe = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Cafe cargado"); // si es exitoso nos saltará esto en consola
      }

    });
  }

  private cargarCafeTraducido() {
    const id = this.ActivatedRoute.snapshot.params["id"];
    this.data.getCafeTraducido().subscribe({
      next: (data: TCafe[]) => {
        this.arrayCafes = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Cafe traducción cargado"); // si es exitoso nos saltará esto en consola
      }

    });
  }


  public cambiarCafe(id: number) {
    
    if (id > 0 && id < 21) {
      this['Router'].navigate(['tipos_de_cafe/' + id]).then(()=> this.cargarEsteCafe());
    }

  }



}
