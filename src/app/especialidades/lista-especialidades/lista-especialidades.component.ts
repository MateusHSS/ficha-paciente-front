import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

interface Especialidade {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-lista-especialidades',
  templateUrl: './lista-especialidades.component.html',
  styleUrls: ['./lista-especialidades.component.css'],
  providers: [EspecialidadesService, SnackBarService],
})
export class ListaEspecialidadesComponent implements OnInit {
  especialidades: Observable<Especialidade[]> = of([]);
  totalRegistros: number = 0;
  colunas: string[] = ['nome', 'icons'];

  constructor(
    private especialidadesService: EspecialidadesService,
    private router: Router,
    private _snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.carregaEspecialidades();
  }

  editar(item: Especialidade) {
    this.router.navigate(['/especialidades/edit', item.id]);
  }

  excluir(item: Especialidade) {
    this.especialidadesService.deleteEspecialidade(item.id).subscribe(() => {
      this._snackBar.openSnackBar(
        `Especialidade ${item.nome} excluída com sucesso!`
      );
      this.carregaEspecialidades();
    });
  }

  carregaEspecialidades() {
    this.especialidades = this.especialidadesService.getEspecialidades();
    this.especialidades.subscribe((data) => {
      this.totalRegistros = data.length;
    });
  }

  criarEspecialidade() {
    this.router.navigate(['/especialidades/new']);
  }
}
