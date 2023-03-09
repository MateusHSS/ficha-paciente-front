import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { FichasPacienteService } from 'src/app/services/fichas-paciente.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

interface FichaPaciente {
  nomePaciente: string;
  numeroCarteiraPlano: string;
  especialidade: {
    id: string;
    nome: string;
  };
  planoSaude: {
    id: string;
    nome: string;
  };
}

interface FichaPacienteSimples {
  nomePaciente: string;
  idEspecialidade: string;
  especialidade: string;
  idPlanoSaude: string;
  planoSaude: string;
  numeroCarteiraPlano: string;
}

@Component({
  selector: 'app-lista-fichas',
  templateUrl: './lista-fichas.component.html',
  styleUrls: ['./lista-fichas.component.css'],
  providers: [FichasPacienteService, SnackBarService],
})
export class ListaFichasComponent implements OnInit {
  fichasPacientes: Observable<FichaPacienteSimples[]> = of([]);
  totalRegistros: number = 0;
  colunas: string[] = [
    'nomePaciente',
    'especialidade',
    'planoSaude',
    'numeroCarteiraPlano',
    'icons',
  ];

  constructor(
    private fichasPacientesService: FichasPacienteService,
    private router: Router,
    private _snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.carregaFichas();
  }

  carregaFichas() {
    this.fichasPacientes = this.fichasPacientesService.getFichasPaciente().pipe(
      map((data) => {
        return data.map((item) => {
          return {
            nomePaciente: item.nomePaciente,
            numeroCarteiraPlano: item.numeroCarteiraPlano,
            idEspecialidade: item.especialidade.id,
            especialidade: item.especialidade.nome,
            idPlanoSaude: item.planoSaude.id,
            planoSaude: item.planoSaude.nome,
          };
        });
      })
    );

    this.fichasPacientes.subscribe((data) => {
      this.totalRegistros = data.length;
    });
  }

  editar(item: FichaPacienteSimples) {
    this.router.navigate([
      '/ficha-paciente',
      item.numeroCarteiraPlano,
      item.idEspecialidade,
      item.idPlanoSaude,
    ]);
  }

  excluir(item: FichaPacienteSimples) {
    this.fichasPacientesService
      .deleteFichaPaciente(
        item.numeroCarteiraPlano,
        item.idEspecialidade,
        item.idPlanoSaude
      )
      .subscribe((data) => {
        this._snackBar.openSnackBar('Ficha excluída com sucesso');
        this.carregaFichas();
      });
  }

  listarEspecialidades() {
    this.router.navigate(['/especialidades']);
  }

  listarPlanosSaude() {
    this.router.navigate(['/plano-saude']);
  }

  novaFicha() {
    this.router.navigate(['ficha-paciente/new']);
  }
}
