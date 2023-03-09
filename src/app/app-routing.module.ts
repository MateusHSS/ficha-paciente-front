import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaEspecialidadeComponent } from './especialidades/cria-especialidade/cria-especialidade.component';
import { EditaEspecialidadeComponent } from './especialidades/edita-especialidade/edita-especialidade.component';
import { ListaEspecialidadesComponent } from './especialidades/lista-especialidades/lista-especialidades.component';
import { CriaFichaComponent } from './fichas-paciente/cria-ficha/cria-ficha.component';
import { EditaFichaComponent } from './fichas-paciente/edita-ficha/edita-ficha.component';
import { ListaFichasComponent } from './fichas-paciente/lista-fichas/lista-fichas.component';
import { CriaPlanoComponent } from './plano-saude/cria-plano/cria-plano.component';
import { EditaPlanoComponent } from './plano-saude/edita-plano/edita-plano.component';
import { ListaPlanosComponent } from './plano-saude/lista-planos/lista-planos.component';

const routes: Routes = [
  { path: '', component: ListaFichasComponent },
  {
    path: 'ficha-paciente/:numeroCarteira/:idEspecialidade/:idPlanoSaude',
    component: EditaFichaComponent,
  },
  {
    path: 'ficha-paciente/new',
    component: CriaFichaComponent,
  },
  {
    path: 'especialidades',
    component: ListaEspecialidadesComponent,
  },
  {
    path: 'especialidades/edit/:idEspecialidade',
    component: EditaEspecialidadeComponent,
  },
  {
    path: 'especialidades/new',
    component: CriaEspecialidadeComponent,
  },
  {
    path: 'plano-saude',
    component: ListaPlanosComponent,
  },
  {
    path: 'plano-saude/edit/:idPlanoSaude',
    component: EditaPlanoComponent,
  },
  {
    path: 'plano-saude/new',
    component: CriaPlanoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
