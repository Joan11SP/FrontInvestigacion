import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Investigacion/login/login.component'
import { HomeComponent } from './Investigacion/home/home.component';
import { UsuariosComponent } from './Investigacion/home/usuarios/usuarios.component';
import { GrupoInvestigacionComponent } from './Investigacion/home/grupo-investigacion/grupo-investigacion.component';
import { ProyectoInvestigacionComponent } from './Investigacion/home/proyecto-investigacion/proyecto-investigacion.component';
import { GuardsGuard } from './Investigacion/Guards/guards.guard';
import { NavegacionComponent } from './Investigacion/navegacion/navegacion.component';
import { SeguimientoComponent } from './Investigacion/home/seguimiento/seguimiento.component';
import { ArticuloComponent } from './Investigacion/home/articulo/articulo.component';
import { LibroComponent } from './Investigacion/home/libro/libro.component';
import { ConvenioComponent } from './Investigacion/home/convenio/convenio.component';
import { CapacitacionComponent } from './Investigacion/home/capacitacion/capacitacion.component';


const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  {
    path: "home", component: HomeComponent
  },
  {
    path: "users", component: UsuariosComponent
  },
  {
    path: "groupInvestigation", component: GrupoInvestigacionComponent
  },
  {
    path: "proyectoInvestigacion", component: ProyectoInvestigacionComponent
  },
  {
    path: "proyectoInvestigacion/:id", component: ProyectoInvestigacionComponent
  },
  {
    path:"seguimiento",component:SeguimientoComponent
  },
  {
    path:"articulo",component:ArticuloComponent
  },
  {
    path:"libros",component:LibroComponent
  },
  {
    path:"convenio",component:ConvenioComponent
  },
  {
    path:"capacitacion",component:CapacitacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
