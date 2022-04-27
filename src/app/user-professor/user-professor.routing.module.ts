import { NgModule } from '@angular/core';
import { UserProfessorComponent } from './user-professor.component';
import { RouterModule, Routes } from "@angular/router";
import { SelecionarDisciplinasComponent } from './selecionar-disciplinas/selecionar-disciplinas.component';
import { TurmasComponent } from './turmas/turmas.component';
import { LancarFaltasComponent } from './lancar-faltas/lancar-faltas.component';
import { LancarNotasComponent } from './lancar-notas/lancar-notas.component';

const userProfessorRoutes: Routes = [
  { path: '', component: UserProfessorComponent, children: [
    { path: 'selecionar-disciplinas', component: SelecionarDisciplinasComponent },
    { path: 'turmas', component: TurmasComponent },
    { path: 'lancar-faltas', component: LancarFaltasComponent },
    { path: 'lancar-notas', component: LancarNotasComponent }
  ] }
]

@NgModule({
  imports: [RouterModule.forChild(userProfessorRoutes)],
  exports: [RouterModule]
})
export class UserProfessorRoutingModule{}
