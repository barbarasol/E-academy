import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAdminRoutingModule } from './user-admin.routing.module';
import { UserAdminComponent } from './user-admin.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserAdminComponent,
    DisciplinaComponent
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserAdminModule { }
