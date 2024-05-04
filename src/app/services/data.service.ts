import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafeterias } from '../common/cafeterias';
import { TCafe } from '../common/t-cafe';
import { TiempoReal } from '../common/tiempo-real';


@Injectable({
  providedIn: 'root' // esto quiere decir que será compartido con toda la aplicación. 
})
export class DataService { // crearemos un servicio DataService para poder hacer llamadas a la api. Se crearán instancias del mismo que podrán ser compartidas con
  // todos los componentes.

  constructor(private http: HttpClient) { }


  getCafeterias(): Observable<Cafeterias[]> { //Al llamar a esta funcion, retornara un observable de tipo Cafeterias.

    return this.http.get<Cafeterias[]>("assets/cafes.json"); 
    // usa la instancia metida por el constructor tipo HttpClient para hacer una llamada a la api con el método get y retornar un observable de tipo Cafeterias.
  }

  getTiposCafe():Observable<TCafe[]>{
    return this.http.get<TCafe[]>("https://api.sampleapis.com/coffee/hot")
  }
  getCafe(id:number):Observable<TCafe>{
    return this.http.get<TCafe>("https://api.sampleapis.com/coffee/hot/"+id)
  }

  getCafeTraducido():Observable<TCafe[]>{
    return this.http.get<TCafe[]>("assets/cafesTraduccion.json")
  }

  getTiempoReal():Observable<TiempoReal[]>{
    return this.http.get<TiempoReal[]>("https://api.open-meteo.com/v1/forecast?latitude=48.8534,35.6895,23,30.0626&longitude=2.3488,139.6917,-102,31.2497&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,wind_speed_10m&hourly=precipitation_probability&timezone=auto&forecast_days=1")
}

}
