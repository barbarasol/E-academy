import { Aluno } from './../shared/aluno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno!: Aluno[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  mudarRotaCadastro(){
    this.router.navigate(['/aluno/cadastro'])
  }

  mudarRotaLista(){
    this.router.navigate(['/aluno/lista'])
  }
}
