import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {
  ciudad: Ciudad;

  constructor(
    private ciudadService: CiudadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ciudad = new Ciudad();
   }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.ciudadService.obtenerCiudad(id).subscribe(response => {
      this.ciudad = response;
    });;
  }

  editarCategoria(){
    this.ciudadService.editarCiudad(this.ciudad)
    .subscribe(() => {
      this.router.navigate(['/ciudades']);
    });
  }

  cancelar(){
    this.router.navigate(['/ciudades']);
  }

}
