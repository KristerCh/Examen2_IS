import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { CiudadanoService } from 'src/app/services/ciudadano.service';
import { Ciudad } from 'src/app/models/ciudad';
import { Ciudadano } from 'src/app/models/ciudadano';

@Component({
  selector: 'app-crear-ciudadano',
  templateUrl: './crear-ciudadano.component.html',
  styleUrls: ['./crear-ciudadano.component.css']
})
export class CrearCiudadanoComponent implements OnInit {

  ciudades: Ciudad[];
  ciudadano: Ciudadano;

  constructor(
    private ciudadanoService: CiudadanoService,
    private ciudadService: CiudadService,
    private router: Router
  ) { 
    this.ciudadano = new Ciudadano();
  }

  ngOnInit(): void {
    this.ciudadService.obtenerCiudades().subscribe(res => {
      this.ciudades = res;
    })
  }

  crearCiudadano(){
    this.ciudadanoService.crearCiudadano(this.ciudadano).subscribe(() =>{
      this.router.navigate(['/ciudadanos']);
    },
    err => {
      console.log(err);
    })
  }

  cancelar(){
    this.router.navigate(['/ciudadanos']);
  }

}
