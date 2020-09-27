import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CrearCiudadComponent } from './components/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './components/editar-ciudad/editar-ciudad.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { CrearCiudadanoComponent } from './components/crear-ciudadano/crear-ciudadano.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadComponent,
    CrearCiudadComponent,
    EditarCiudadComponent,
    NavigationComponent,
    CiudadanoComponent,
    CrearCiudadanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
