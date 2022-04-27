import { BuscarListaProfessoresService } from './../../professor/buscar-lista-professores.service';
import { DadosTurmasService } from './../dados-turmas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Turmas } from 'src/app/shared/turmas';


@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  formularioRegistro!: FormGroup;
  turmasProfessor: Turmas[] = []

  constructor(
    private formBuilder: FormBuilder,
    private dadosTurmas: DadosTurmasService,
    private dadosProfessor: BuscarListaProfessoresService
  ) { }

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({
      registro: [null, Validators.required]
    })
  }

  onSubmit(){
    var registro = this.formularioRegistro.value.registro;
    //aq eu vou chamar um metodo que vai pegar as turmas e fazer um filter com o registro do professor
    this.filtraTurmasPorRegistro(registro);
    this.resetarFormulario();
  }

  resetarFormulario(){
    this.formularioRegistro.reset();
  }

  filtraTurmasPorRegistro(registro: any){
    var todasTurmas = this.dadosTurmas.buscaTurmas();
    var dadosProfessores = this.dadosProfessor.obterListaProfessores();
    var professorEncontrado: any;
    for(let i=0; i<dadosProfessores.length; i++){
      if(dadosProfessores[i].registro === registro){
        professorEncontrado = dadosProfessores[i];
      }
    }
    this.turmasProfessor = todasTurmas.filter((turma : any) => {
      if(turma.nomeProfessor === professorEncontrado.nome){
        return turma
      }
    })
    console.log(this.turmasProfessor)
  }

  verificaSeTurmasDoProfessorEstaVazia(){
    if(this.turmasProfessor.length==0){
      return true
    }else{
      return false;
    }
  }
}
