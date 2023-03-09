import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanosSaudeService } from 'src/app/services/planos-saude.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

@Component({
  selector: 'app-cria-plano',
  templateUrl: './cria-plano.component.html',
  styleUrls: ['./cria-plano.component.css'],
  providers: [PlanosSaudeService, SnackBarService],
})
export class CriaPlanoComponent {
  planoSaude = new FormControl('', Validators.required);

  constructor(
    private planoSaudeService: PlanosSaudeService,
    private _snackBar: SnackBarService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.planoSaude.valid) {
      this.planoSaudeService
        .createPlanoSaude({ nome: this.planoSaude.value })
        .subscribe((data) => {
          this._snackBar.openSnackBar('Plano de saúde criado com sucesso');
          this.router.navigate(['/plano-saude']);
        });
    }
  }
}
