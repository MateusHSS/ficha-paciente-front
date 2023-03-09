import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { FichasPacienteService } from 'src/app/services/fichas-paciente.service';
import { PlanosSaudeService } from 'src/app/services/planos-saude.service';
import { Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snackBar.service';

interface FichaPaciente {
  nomePaciente: string;
  especialidade: {
    id: string;
    nome: string;
  };
  planoSaude: {
    id: string;
    nome: string;
  };
  numeroCarteiraPlano: string;
}

interface Especialidade {
  id: string;
  nome: string;
}

interface PlanoSaude {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-edita-ficha',
  templateUrl: './edita-ficha.component.html',
  styleUrls: ['./edita-ficha.component.css'],
  providers: [
    FichasPacienteService,
    EspecialidadesService,
    PlanosSaudeService,
    SnackBarService,
  ],
})
export class EditaFichaComponent {
  idEspecialidade: string = '';
  idPlanoSaude: string = '';
  numeroCarteiraPlano: string = '';
  especialidades!: Especialidade[];
  planosSaude!: PlanoSaude[];
  fichaPaciente = new FormGroup({
    nomePaciente: new FormControl('', Validators.required),
    numeroCarteiraPlano: new FormControl(
      { value: '', disabled: true },
      Validators.required
    ),
    especialidade: new FormGroup({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      nome: new FormControl({ value: '', disabled: true }),
    }),
    planoSaude: new FormGroup({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      nome: new FormControl(''),
    }),
  });

  constructor(
    private route: ActivatedRoute,
    private fichasPacienteService: FichasPacienteService,
    private especialidadesService: EspecialidadesService,
    private planosSaudeService: PlanosSaudeService,
    private _snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.idEspecialidade = data['idEspecialidade'];
      this.idPlanoSaude = data['idPlanoSaude'];
      this.numeroCarteiraPlano = data['numeroCarteira'];
    });

    this.fichasPacienteService
      .getFichaPacienteById(
        this.numeroCarteiraPlano,
        this.idEspecialidade,
        this.idPlanoSaude
      )
      .subscribe((data: FichaPaciente) => {
        this.fichaPaciente.setValue({
          nomePaciente: data.nomePaciente,
          especialidade: data.especialidade,
          planoSaude: data.planoSaude,
          numeroCarteiraPlano: data.numeroCarteiraPlano,
        });
      });

    this.especialidadesService.getEspecialidades().subscribe((data) => {
      this.especialidades = data;
    });

    this.planosSaudeService.getPlanosSaude().subscribe((data) => {
      this.planosSaude = data;
    });
  }

  onSubmit() {
    if (this.fichaPaciente.valid) {
      this.fichasPacienteService
        .updateFichaPaciente(
          this.numeroCarteiraPlano,
          this.idEspecialidade,
          this.idPlanoSaude,
          { nomePaciente: this.fichaPaciente.value.nomePaciente }
        )
        .subscribe((data) => {
          this._snackBar.openSnackBar('Ficha editada com sucesso');
          this.router.navigate(['']);
        });
    } else {
      alert('Burro');
    }
  }
}
