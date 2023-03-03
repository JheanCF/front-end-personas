import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarPersonaComponent } from './insertar-persona/insertar-persona.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';

const routes: Routes = [
  {path: '', component: ListarPersonasComponent},
  {path: 'registro', component: InsertarPersonaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
