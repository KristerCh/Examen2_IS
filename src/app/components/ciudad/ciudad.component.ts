import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  ciudad: Ciudad[];


  constructor(
    private ciudadService: CiudadService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.getCiudades();
    console.log(this.ciudad);
  }

  getCiudades(){
    this.ciudadService.obtenerCiudades().subscribe(data => {
      this.ciudad = data;
    })
  }

  crearCiudad(){
    this.router.navigate(['/ciudades/crear']);
  }

  editarCiudad(id: Number){
    this.router.navigate(['/ciudades/editar', id]);
  }

  deleteCiudad(id: Number){
    const res = confirm("Desea eliminar este registro?");
    if(res){
      this.ciudadService.eliminarCiudad(id).subscribe(() => {
        this.getCiudades();
      })
    }
  }

}
