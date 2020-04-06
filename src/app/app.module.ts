import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Investigacion/home/home.component';
import { NavegacionComponent } from './Investigacion/navegacion/navegacion.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './Investigacion/home/usuarios/usuarios.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GrupoInvestigacionComponent } from './Investigacion/home/grupo-investigacion/grupo-investigacion.component';
import { ProyectoInvestigacionComponent } from './Investigacion/home/proyecto-investigacion/proyecto-investigacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent,
    UsuariosComponent,
    GrupoInvestigacionComponent,
    ProyectoInvestigacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
