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
import { LoginComponent } from './Investigacion/login/login.component';
import { GuardsGuard } from './Investigacion/Guards/guards.guard';
import { SeguimientoComponent } from './Investigacion/home/seguimiento/seguimiento.component';
import { ArticuloComponent } from './Investigacion/home/articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent,
    UsuariosComponent,
    GrupoInvestigacionComponent,
    ProyectoInvestigacionComponent,
    LoginComponent,
    SeguimientoComponent,
    ArticuloComponent
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
  providers: [GuardsGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
