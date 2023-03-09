import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditaFichaComponent } from './fichas-paciente/edita-ficha/edita-ficha.component';
import { ListaFichasComponent } from './fichas-paciente/lista-fichas/lista-fichas.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { TabelaComponent } from './tabela/tabela.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaEspecialidadesComponent } from './especialidades/lista-especialidades/lista-especialidades.component';
import { EditaEspecialidadeComponent } from './especialidades/edita-especialidade/edita-especialidade.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListaPlanosComponent } from './plano-saude/lista-planos/lista-planos.component';
import { EditaPlanoComponent } from './plano-saude/edita-plano/edita-plano.component';
import { CriaPlanoComponent } from './plano-saude/cria-plano/cria-plano.component';
import { CriaEspecialidadeComponent } from './especialidades/cria-especialidade/cria-especialidade.component';
import { CriaFichaComponent } from './fichas-paciente/cria-ficha/cria-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaFichasComponent,
    EditaFichaComponent,
    TabelaComponent,
    ListaEspecialidadesComponent,
    EditaEspecialidadeComponent,
    ListaPlanosComponent,
    EditaPlanoComponent,
    CriaPlanoComponent,
    CriaEspecialidadeComponent,
    CriaFichaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
