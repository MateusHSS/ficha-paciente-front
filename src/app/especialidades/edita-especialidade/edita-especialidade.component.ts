import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

@Component({
  selector: 'app-edita-especialidade',
  templateUrl: './edita-especialidade.component.html',
  styleUrls: ['./edita-especialidade.component.css'],
  providers: [EspecialidadesService, SnackBarService],
})
export class EditaEspecialidadeComponent implements OnInit {
  idEspecialidade: string = '';
  especialidade = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private especialidadesService: EspecialidadesService,
    private router: Router,
    private snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.idEspecialidade = data['idEspecialidade'];
    });

    this.especialidadesService
      .getEspecialidadeById(this.idEspecialidade)
      .subscribe((data) => {
        this.especialidade.setValue(data.nome);
      });
  }

  onSubmit() {
    if (this.especialidade.valid) {
      this.especialidadesService
        .updateEspecialidade(this.idEspecialidade, {
          nome: this.especialidade.value,
        })
        .subscribe((data) => {
          this.snackBar.openSnackBar('Especialidade editada com sucesso!');
          this.router.navigate(['/especialidades']);
        });
    }
  }
}
