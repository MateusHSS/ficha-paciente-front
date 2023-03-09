import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

@Component({
  selector: 'app-cria-especialidade',
  templateUrl: './cria-especialidade.component.html',
  styleUrls: ['./cria-especialidade.component.css'],
  providers: [EspecialidadesService, SnackBarService],
})
export class CriaEspecialidadeComponent {
  especialidade = new FormControl('', Validators.required);

  constructor(
    private router: Router,
    private especialidadeService: EspecialidadesService,
    private _snackBar: SnackBarService
  ) {}

  onSubmit() {
    if (this.especialidade.valid) {
      this.especialidadeService
        .createEspecialidade({
          nome: this.especialidade.value,
        })
        .subscribe((data) => {
          this._snackBar.openSnackBar('Especialidade cadastrada com sucesso');
          this.router.navigate(['/especialidades']);
        });
    } else {
      this._snackBar.openSnackBar('Verifique o preenchimento do formulário');
    }
  }
}
