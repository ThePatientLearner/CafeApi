import { Component, inject } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { TCafe } from '../../common/t-cafe';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tipos-cafe',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './tipos-cafe.component.html',
  styleUrl: './tipos-cafe.component.css'
})
export class TiposCafeComponent {

  tiposCafe!: TCafe[]; // se inicializa vacio para que no de error. Le decimos que es de tipo TCafe.
  private data: DataService = inject(DataService); // se injecta el servicio y se introduce en la variable data.

  constructor() {
this.cargarTiposCafe();
  }

  cargarTiposCafe() {
    this.data.getTiposCafe().subscribe({ // se ejecutara al llamar a la funcion getTiposCafe y recogerá los datos de la api. suscribe es un metodo de un observable
      next: (datos: TCafe[]) => { // si se ejecuta correctamente le decimos que recibe un parametro tipo TCafe llamado datos.
        this.tiposCafe = datos; // asi esta variable la cargará y la mete en tiposcafe, que la habiamos creado previamente.
      },
        error: (error:string) => {
          console.log(error); // si hay un error al cargar los datos saltará esto en consola
        },
        complete: () => {
          console.log("Cafeterias cargadas"); // si es exitoso nos saltará esto en consola
        }
      }
    );
  }

  




}
