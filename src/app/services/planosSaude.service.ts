import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_path } from '../constants/api-path';

interface PlanoSaude {
  id: string;
  nome: string;
}

@Injectable()
export class PlanosSaudeService {
  constructor(private http: HttpClient) {}

  public getPlanosSaude() {
    return this.http.get<PlanoSaude[]>(api_path.planosSaude.listar.url);
  }
}
