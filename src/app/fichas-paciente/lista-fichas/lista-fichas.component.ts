import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { FichasPacienteService } from 'src/app/services/fichas-paciente.service';

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
  providers: [FichasPacienteService],
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

  labels: object = {
    nomePaciente: 'Nome do paciente',
    especialidade: 'Especialidade',
    planoSaude: 'Plano de saúde',
    numeroCarteiraPlano: 'Número da carteira do plano',
    icons: '',
  };

  constructor(
    private fichasPacientesService: FichasPacienteService,
    private router: Router
  ) {}

  ngOnInit() {
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

  excluir(item: FichaPaciente) {
    console.log('Excluindo');
  }
}
