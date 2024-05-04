import { Component, inject } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { Cafeterias } from '../../common/cafeterias';
import { DataService } from '../../services/data.service';
import { TiempoReal } from '../../common/tiempo-real';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cafes-mundo',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './cafes-mundo.component.html',
  styleUrl: './cafes-mundo.component.css'
})
export class CafesMundoComponent {
  Cafeteria: any[] = []; //Cafeteria es un array de tipo any y lo inicializamos con la ! para especificar que esta vacio y lo llena con el loadEquipo

  cafeteria!: Cafeterias[];  //cafesMundo es de tipo Cafeterias y lo inicializamos con la ! para especificar que está vacio y lo llenamos después con el loadEquipo
  tiempoReal!: TiempoReal[];
  private data: DataService = inject(DataService);
  contador: number = 0;

  constructor() {
 this.cargarCafesMundo();
 this.cargarTiempoReal();
  }

  private cargarCafesMundo() {
    this.data.getCafeterias().subscribe({ // se ejecutara al llamar a la funcion getCafeterias y recogerá los datos de la api. suscribe es un metodo de un observable
      next: (datos: Cafeterias[]) => { // si se ejecuta correctamente le decimos que recibe un parametro tipo Cafeterias llamado datos.
        this.cafeteria = datos; // asi esta variable la cargará y la mete en cafesmundo, que la habiamos creado previamente.
      },

      error: (error) => {
        console.log(error); // si hay un error al cargar los datos saltará esto en consola
      },

      complete: () => {
        console.log("Cafeterias cargadas"); // si es exitoso nos saltará esto en consola
      }

      
    });
  }

  public cargarTiempoReal(){
    this.data.getTiempoReal().subscribe({
      next: (data: TiempoReal[]) => {
        this.tiempoReal = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Tiempo real cargado"); // si es exitoso nos saltará esto en consola
      }
    });
  }


}
