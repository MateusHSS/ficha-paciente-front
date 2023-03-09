import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { FichasPacienteService } from 'src/app/services/fichas-paciente.service';
import { PlanosSaudeService } from 'src/app/services/planos-saude.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

interface Especialidade {
  id: string;
  nome: string;
}

interface PlanoSaude {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-cria-ficha',
  templateUrl: './cria-ficha.component.html',
  styleUrls: ['./cria-ficha.component.css'],
  providers: [
    EspecialidadesService,
    PlanosSaudeService,
    FichasPacienteService,
    SnackBarService,
  ],
})
export class CriaFichaComponent {
  especialidades!: Especialidade[];
  planosSaude!: PlanoSaude[];
  fichaPaciente = new FormGroup({
    nomePaciente: new FormControl('', Validators.required),
    numeroCarteiraPlano: new FormControl('', Validators.required),
    especialidade: new FormGroup({
      id: new FormControl('', Validators.required),
    }),
    planoSaude: new FormGroup({
      id: new FormControl('', Validators.required),
    }),
  });

  constructor(
    private especialidadeService: EspecialidadesService,
    private planoSaudeService: PlanosSaudeService,
    private fichaPacienteService: FichasPacienteService,
    private _snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.especialidadeService.getEspecialidades().subscribe((data) => {
      this.especialidades = data;
    });

    this.planoSaudeService.getPlanosSaude().subscribe((data) => {
      this.planosSaude = data;
    });
  }

  onSubmit() {
    if (this.fichaPaciente.valid) {
      this.fichaPacienteService
        .createFichaPaciente({
          nomePaciente: this.fichaPaciente.get('nomePaciente')?.value,
          numeroCarteiraPlano: this.fichaPaciente.get('numeroCarteiraPlano')
            ?.value,
          idEspecialidade: this.fichaPaciente.get('especialidade')?.get('id')
            ?.value,
          idPlanoSaude: this.fichaPaciente.get('planoSaude')?.get('id')?.value,
        })
        .subscribe((data) => {
          this._snackBar.openSnackBar('Ficha cadastrada com sucesso');
          this.router.navigate(['']);
        });
    } else {
      console.log('erros ', this.fichaPaciente.errors);
    }
  }
}
