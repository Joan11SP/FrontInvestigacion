import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Investigacion/home/home.component';
import { UsuariosComponent } from './Investigacion/home/usuarios/usuarios.component';
import { GrupoInvestigacionComponent } from './Investigacion/home/grupo-investigacion/grupo-investigacion.component';
import { ProyectoInvestigacionComponent } from './Investigacion/home/proyecto-investigacion/proyecto-investigacion.component';


const routes: Routes = [
  {path:'',redirectTo:"home", pathMatch:"full"},
  {
    path: "home",component:HomeComponent
  },
  {
    path: "users",component:UsuariosComponent
  },
  {
    path: "groupInvestigation",component:GrupoInvestigacionComponent
  },
  {
    path: "proyectoInvestigacion",component:ProyectoInvestigacionComponent
  },
  {
    path: "proyectoInvestigacion/:id",component:ProyectoInvestigacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
