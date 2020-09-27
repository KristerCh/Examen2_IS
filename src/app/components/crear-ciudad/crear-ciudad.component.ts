import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from 'src/app/services/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  ciudad: Ciudad;

  constructor(
    private ciudadService: CiudadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  crearCiudad(){
    this.ciudadService.crearCiudad(this.ciudad).subscribe(() => {
      this.router.navigate(['/ciudades']);
    },
    err =>{
      console.log(err);
    }
    )
    console.log(this.ciudad);
}

cancelar(){
  this.router.navigate(['/ciudades']);
}

}
