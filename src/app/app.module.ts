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
import { LoginComponent } from './Investigacion/home/login/login.component';
import { GuardsGuard } from './Investigacion/Guards/guards.guard';
import { SeguimientoComponent } from './Investigacion/home/seguimiento/seguimiento.component';
import { ArticuloComponent } from './Investigacion/home/articulo/articulo.component';
import { LibroComponent } from './Investigacion/home/libro/libro.component';
import { ConvenioComponent } from './Investigacion/home/convenio/convenio.component';
import { CapacitacionComponent } from './Investigacion/home/capacitacion/capacitacion.component';
import { ChartsModule } from 'ng2-charts';
import {MatInputModule} from '@angular/material/input';
import { SeguimientoPersonaComponent } from './Investigacion/home/seguimiento-persona/seguimiento-persona.component';
import { VerificarAppComponent } from './verificar-app/verificar-app.component';
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
    ArticuloComponent,
    LibroComponent,
    ConvenioComponent,
    CapacitacionComponent,
    SeguimientoPersonaComponent,
    VerificarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule, 
    ChartsModule,
    MatInputModule
  ],
  providers: [GuardsGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
