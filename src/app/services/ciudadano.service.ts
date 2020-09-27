import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudadano } from 'src/app/models/ciudadano';

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {
  url: "https://localhost:44392/api/ciudadanos";

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

    
  obtenerCiudadanos(){
    return this.http.get<Ciudadano[]>(this.url);
  }

  obtenerCiudadano(id: Number){
    return this.http.get<Ciudadano>(this.url + '/' + id);
  }

  eliminarCiudadano(id: Number){
    return this.http.delete(this.url + '/' + id);
  }

  crearCiudadano(ciudadano: Ciudadano){
    return this.http.post<Ciudadano>(this.url, ciudadano);
  }

  editarCiudadano(ciudadano: Ciudadano){
    return this.http.put<Ciudadano>(this.url + '/' + ciudadano.idCiudadano, ciudadano);
  }
}
