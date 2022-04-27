import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroLoginComponent } from './login/cadastro-login/cadastro-login.component';


const routes: Routes = [
  // { path: 'aluno', loadChildren: () => import('./aluno/aluno.module').then(mod => mod.AlunoModule) },
  // { path: 'professor', loadChildren: () => import('./professor/professor.module').then(mod => mod.ProfessorModule)},
  // { path: 'disciplina', component: DisciplinaComponent},
  { path: '', component: HomeComponent},
  { path: 'userAdmin', loadChildren: () => import('./user-admin/user-admin.module').then(mod => mod.UserAdminModule) },
  { path: 'login', component: LoginComponent },
  { path: 'login/cadastroLogin', component: CadastroLoginComponent},
  { path: 'userProfessor', loadChildren: () => import('./user-professor/user-professor.module').then(mod => mod.UserProfessorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
