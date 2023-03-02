import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaFichaComponent } from './fichas-paciente/edita-ficha/edita-ficha.component';
import { ListaFichasComponent } from './fichas-paciente/lista-fichas/lista-fichas.component';

const routes: Routes = [
  { path: '', component: ListaFichasComponent },
  {
    path: 'ficha-paciente/:numeroCarteira/:idEspecialidade/:idPlanoSaude',
    component: EditaFichaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
