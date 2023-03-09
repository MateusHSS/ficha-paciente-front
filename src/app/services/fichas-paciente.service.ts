import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { api_path } from '../constants/api-path';
import { SnackBarService } from './snackBar.service';

interface FichaPaciente {
  nomePaciente: string;
  numeroCarteiraPlano: string;
  especialidade: {
    id: string;
    nome: string;
  };
  planoSaude: {
    id: string;
    nome: string;
  };
}

interface FichaPacienteBodyRequest {
  nomePaciente: string | null;
  numeroCarteiraPlano: string | null;
  idEspecialidade: string | null;
  idPlanoSaude: string | null;
}

interface FichaPacienteUpdate {
  nomePaciente: string | null;
}

@Injectable()
export class FichasPacienteService {
  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  public getFichasPaciente() {
    return this.http.get<FichaPaciente[]>(api_path.fichas_paciente.listar.url);
  }

  public getFichaPacienteById(
    numeroCarteiraPlano: string,
    idEspecialidade: string,
    idPlanoSaude: string
  ) {
    return this.http.get<FichaPaciente>(
      `${api_path.fichas_paciente.getById.url}/${numeroCarteiraPlano}/${idEspecialidade}/${idPlanoSaude}`
    );
  }

  public createFichaPaciente(fichaPaciente: Partial<FichaPacienteBodyRequest>) {
    return this.http
      .post<FichaPaciente>(api_path.fichas_paciente.getById.url, fichaPaciente)
      .pipe(catchError(this.handleError('createFichaPaciente')));
  }

  public updateFichaPaciente(
    numeroCarteiraPlano: string,
    idEspecialidade: string,
    idPlanoSaude: string,
    ficha: Partial<FichaPacienteUpdate>
  ) {
    return this.http.patch(
      `${api_path.fichas_paciente.getById.url}/${numeroCarteiraPlano}/${idEspecialidade}/${idPlanoSaude}`,
      ficha
    );
  }

  public deleteFichaPaciente(
    numeroCarteiraPlano: string,
    idEspecialidade: string,
    idPlanoSaude: string
  ) {
    return this.http.delete(
      `${api_path.fichas_paciente.getById.url}/${numeroCarteiraPlano}/${idEspecialidade}/${idPlanoSaude}`
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.openSnackBar(error.error);

      // Let the app keep running by returning an empty result.
      throw error;
    };
  }
}
