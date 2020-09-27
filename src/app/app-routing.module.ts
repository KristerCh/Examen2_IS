import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { CrearCiudadComponent } from './components/crear-ciudad/crear-ciudad.component';
import { CrearCiudadanoComponent } from './components/crear-ciudadano/crear-ciudadano.component';
import { EditarCiudadComponent } from './components/editar-ciudad/editar-ciudad.component';

const routes: Routes = [
  { path: '', component: CiudadComponent },
  { path: 'ciudades', component: CiudadComponent },
  { path: 'ciudades/crear', component: CrearCiudadComponent },
  { path: 'ciudades/editar/:id', component: EditarCiudadComponent },
  { path: 'ciudadanos', component: CiudadanoComponent },
  { path: 'ciudadanos/crear', component: CrearCiudadanoComponent },
  //{ path: 'ciudadano/editar/:id', component: EditarciudadanoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
