import { DadosALunosNotasService } from './../dados-alunos-notas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlunosNotas } from 'src/app/shared/alunosNotas';

@Component({
  selector: 'app-lancar-notas',
  templateUrl: './lancar-notas.component.html',
  styleUrls: ['./lancar-notas.component.css']
})
export class LancarNotasComponent implements OnInit {

  formularioNotasAlunos!: FormGroup
  notasAlunos!: AlunosNotas[]

  constructor(
    private formBuilder: FormBuilder,
    private dadosAlunosNotas: DadosALunosNotasService
  ) { }

  ngOnInit(): void {
    this.formularioNotasAlunos = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      matricula: [null, Validators.required],
      disciplina: [null, Validators.required],
      atividade: [null, Validators.required],
      nota: [null, Validators.required]
    })
  }

  onSubmit(){
    this.buscaDadosNotasAlunos();
    const notaAluno: AlunosNotas = this.formularioNotasAlunos.value;
    this.notasAlunos.push(notaAluno);

    this.dadosAlunosNotas.addNotasAlunos(this.notasAlunos);
    console.log(this.notasAlunos);

    window.alert("Nota Salva com sucesso!!")
    this.resetarFormulario();
  }

  buscaDadosNotasAlunos(){
    var dados: [];
    dados = this.dadosAlunosNotas.getNotasAlunos();
    if(dados.length==0){
      this.notasAlunos = []
    }else{
      this.notasAlunos = dados;
    }
  }

  resetarFormulario(){
    this.formularioNotasAlunos.reset();
  }

}
