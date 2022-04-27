import { RouterModule } from '@angular/router';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { Routes } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { NgModule } from '@angular/core';

const professorRoutes : Routes = [
  { path: '', component: ProfessorComponent, children: [
    { path: 'cadastro', component: ProfessorCadastroComponent},
    { path: 'lista', component: ListaProfessoresComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(professorRoutes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule {}
