import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Investigacion/home/home.component';
import { UsuariosComponent } from './Investigacion/home/usuarios/usuarios.component';
import { GrupoInvestigacionComponent } from './Investigacion/home/grupo-investigacion/grupo-investigacion.component';


const routes: Routes = [
  {
    path: "home",component:HomeComponent
  },
  {
    path: "users",component:UsuariosComponent
  },
  {
    path: "groupInvestigation",component:GrupoInvestigacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
