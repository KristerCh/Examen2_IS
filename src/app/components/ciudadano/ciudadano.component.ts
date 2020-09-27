import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { CiudadanoService } from 'src/app/services/ciudadano.service';
import { Ciudadano } from 'src/app/models/ciudadano';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.css']
})
export class CiudadanoComponent implements OnInit {
  ciudadanos: Ciudadano[];

  constructor(
    private ciudadanoService: CiudadanoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCiudadanos();
  }

  getCiudadanos(){
    this.ciudadanoService.obtenerCiudadanos().subscribe(data => {
      this.ciudadanos = data;
    })
  }

  crearCiudadano(){
    this.router.navigate(['/ciudadanos/crear']);
  }

  editarCiudadano(id: Number){
    this.router.navigate(['/ciudadanos/editar', id]);
  }

  deleteCiudadano(id: Number){
    const res = confirm("Desea eliminar este registro?");
    if(res){
      this.ciudadanoService.eliminarCiudadano(id).subscribe(() => {
        this.getCiudadanos();
      })
    }
  }

}
