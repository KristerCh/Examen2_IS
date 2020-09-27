import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  
  URL: 'https://localhost:44392/api/ciudades';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerCiudades(){
    return this.http.get<Ciudad[]>(this.URL);
  }

  obtenerCiudad(id: Number){
    return this.http.get<Ciudad>(this.URL + '/' + id);
  }

  eliminarCiudad(id: Number){
    return this.http.delete(this.URL + '/' + id);
  }

  crearCiudad(ciudad: Ciudad){
    return this.http.post<Ciudad>(this.URL, ciudad);
  }

  editarCiudad(ciudad: Ciudad){
    return this.http.put<Ciudad>(this.URL + '/' + ciudad.idCiudad, ciudad);
  }
}
