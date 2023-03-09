import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { api_path } from '../constants/api-path';
import { SnackBarService } from './snackBar.service';

interface EspecialidadeResponse {
  id: string;
  nome: string;
}

interface EspecialidadeBodyRequest {
  nome: string | null;
}

@Injectable()
export class EspecialidadesService {
  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  public getEspecialidades() {
    return this.http.get<EspecialidadeResponse[]>(
      api_path.especialidades.listar.url
    );
  }

  public getEspecialidadeById(idEspecialidade: string) {
    return this.http.get<EspecialidadeResponse>(
      `${api_path.especialidades.getById.url}/${idEspecialidade}`
    );
  }

  public createEspecialidade(especialidade: EspecialidadeBodyRequest) {
    return this.http.post<EspecialidadeResponse>(
      api_path.especialidades.getById.url,
      especialidade
    );
  }

  public updateEspecialidade(
    idEspecialidade: string,
    especialidade: EspecialidadeBodyRequest
  ) {
    return this.http.patch<EspecialidadeResponse>(
      `${api_path.especialidades.getById.url}/${idEspecialidade}`,
      especialidade
    );
  }

  public deleteEspecialidade(idEspecialidade: string) {
    return this.http
      .delete(`${api_path.especialidades.getById.url}/${idEspecialidade}`)
      .pipe(catchError(this.handleError<void>('deleteEspecialidade')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.openSnackBar(error.error);

      throw error;
    };
  }
}
