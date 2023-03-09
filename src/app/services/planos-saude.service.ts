import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { api_path } from '../constants/api-path';
import { SnackBarService } from './snackBar.service';

interface PlanoSaudeResponse {
  id: string;
  nome: string;
}

interface PlanoSaudeRequestBody {
  nome: string | null;
}

@Injectable()
export class PlanosSaudeService {
  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  public getPlanosSaude() {
    return this.http.get<PlanoSaudeResponse[]>(api_path.planosSaude.listar.url);
  }

  public getPlanoSaudeById(idPlanoSaude: string) {
    return this.http.get<PlanoSaudeResponse>(
      `${api_path.planosSaude.getById.url}/${idPlanoSaude}`
    );
  }

  public createPlanoSaude(planoSaude: PlanoSaudeRequestBody) {
    return this.http.post<PlanoSaudeResponse>(
      api_path.planosSaude.getById.url,
      planoSaude
    );
  }

  public updatePlanoSaude(
    idPlanoSaude: string,
    planoSaude: PlanoSaudeRequestBody
  ) {
    return this.http.patch<PlanoSaudeResponse>(
      `${api_path.planosSaude.getById.url}/${idPlanoSaude}`,
      planoSaude
    );
  }

  public deletePlanoSaude(idPlanoSaude: string) {
    return this.http
      .delete(`${api_path.planosSaude.getById.url}/${idPlanoSaude}`)
      .pipe(catchError(this.handleError<void>('deletePlanoSaude')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.openSnackBar(error.error);

      // Let the app keep running by returning an empty result.
      throw error;
    };
  }
}
