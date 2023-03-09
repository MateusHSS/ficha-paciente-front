import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlanosSaudeService } from 'src/app/services/planos-saude.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

interface PlanoSaude {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-lista-planos',
  templateUrl: './lista-planos.component.html',
  styleUrls: ['./lista-planos.component.css'],
  providers: [PlanosSaudeService, SnackBarService],
})
export class ListaPlanosComponent {
  planosSaude: Observable<PlanoSaude[]> = of([]);
  totalRegistros: number = 0;
  colunas: string[] = ['nome', 'icons'];

  constructor(
    private planoSaudeService: PlanosSaudeService,
    private router: Router,
    private _snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.carregaPlanos();
  }

  editar(item: PlanoSaude) {
    this.router.navigate(['/plano-saude/edit', item.id]);
  }

  excluir(item: PlanoSaude) {
    this.planoSaudeService.deletePlanoSaude(item.id).subscribe(() => {
      this._snackBar.openSnackBar(
        `Plano saúde ${item.nome} excluído com sucesso!`
      );
      this.carregaPlanos();
    });
  }

  carregaPlanos() {
    this.planosSaude = this.planoSaudeService.getPlanosSaude();
    this.planosSaude.subscribe((data: PlanoSaude[]) => {
      this.totalRegistros = data.length;
    });
  }

  criarPlano() {
    this.router.navigate(['/plano-saude/new']);
  }
}
