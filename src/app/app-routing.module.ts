import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Investigacion/login/login.component'
import { HomeComponent } from './Investigacion/home/home.component';
import { UsuariosComponent } from './Investigacion/home/usuarios/usuarios.component';
import { GrupoInvestigacionComponent } from './Investigacion/home/grupo-investigacion/grupo-investigacion.component';
import { ProyectoInvestigacionComponent } from './Investigacion/home/proyecto-investigacion/proyecto-investigacion.component';
import { GuardsGuard } from './Investigacion/Guards/guards.guard';


const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  {
    path: "home", component: HomeComponent, canActivate: [GuardsGuard]
  },
  {
    path: "users", component: UsuariosComponent, canActivate: [GuardsGuard]
  },
  {
    path: "groupInvestigation", component: GrupoInvestigacionComponent, canActivate: [GuardsGuard]
  },
  {
    path: "proyectoInvestigacion", component: ProyectoInvestigacionComponent, canActivate: [GuardsGuard]
  },
  {
    path: "proyectoInvestigacion/:id", component: ProyectoInvestigacionComponent, canActivate: [GuardsGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
