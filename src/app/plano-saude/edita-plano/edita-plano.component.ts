import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanosSaudeService } from 'src/app/services/planos-saude.service';
import { SnackBarService } from 'src/app/services/snackBar.service';

@Component({
  selector: 'app-edita-plano',
  templateUrl: './edita-plano.component.html',
  styleUrls: ['./edita-plano.component.css'],
  providers: [PlanosSaudeService, SnackBarService],
})
export class EditaPlanoComponent implements OnInit {
  idPlanoSaude: string = '';
  planoSaude = new FormControl('', Validators.required);

  constructor(
    private route: ActivatedRoute,
    private planoSaudeService: PlanosSaudeService,
    private _snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.idPlanoSaude = data['idPlanoSaude'];
    });

    this.planoSaudeService
      .getPlanoSaudeById(this.idPlanoSaude)
      .subscribe((data) => {
        this.planoSaude.setValue(data.nome);
      });
  }

  onSubmit() {
    if (this.planoSaude.valid) {
      this.planoSaudeService
        .updatePlanoSaude(this.idPlanoSaude, {
          nome: this.planoSaude.value,
        })
        .subscribe((data) => {
          this._snackBar.openSnackBar('Plano de saúde editado com sucesso!');
          this.router.navigate(['/plano-saude']);
        });
    }
  }
}
