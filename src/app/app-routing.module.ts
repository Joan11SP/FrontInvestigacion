import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Investigacion/home/login/login.component'
import { HomeComponent } from './Investigacion/home/home.component';
import { UsuariosComponent } from './Investigacion/home/usuarios/usuarios.component';
import { GrupoInvestigacionComponent } from './Investigacion/home/grupo-investigacion/grupo-investigacion.component';
import { ProyectoInvestigacionComponent } from './Investigacion/home/proyecto-investigacion/proyecto-investigacion.component';
import { GuardsGuard } from './Investigacion/Guards/guards.guard';
import { SeguimientoComponent } from './Investigacion/home/seguimiento/seguimiento.component';
import { ArticuloComponent } from './Investigacion/home/articulo/articulo.component';
import { LibroComponent } from './Investigacion/home/libro/libro.component';
import { ConvenioComponent } from './Investigacion/home/convenio/convenio.component';
import { CapacitacionComponent } from './Investigacion/home/capacitacion/capacitacion.component';
import { VerificarAppComponent } from './verificar-app/verificar-app.component';


const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "users", component: UsuariosComponent,canActivate:[GuardsGuard]
  },
  {
    path: "groupInvestigation", component: GrupoInvestigacionComponent
  },
  {
    path: "proyectoInvestigacion", component: ProyectoInvestigacionComponent,canActivate:[GuardsGuard]
  },
  {
    path:"seguimiento",component:SeguimientoComponent,canActivate:[GuardsGuard]
  },
  {
    path:"articulo",component:ArticuloComponent,canActivate:[GuardsGuard]
  },
  {
    path:"libros",component:LibroComponent,canActivate:[GuardsGuard]
  },
  {
    path:"convenio",component:ConvenioComponent,canActivate:[GuardsGuard]
  },
  {
    path:"capacitacion",component:CapacitacionComponent,canActivate:[GuardsGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
