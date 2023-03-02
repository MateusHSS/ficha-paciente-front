import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_path } from '../constants/api-path';

interface Especialidade {
  id: string;
  nome: string;
}

@Injectable()
export class EspecialidadesService {
  constructor(private http: HttpClient) {}

  public getEspecialidades() {
    return this.http.get<Especialidade[]>(api_path.especialidades.listar.url);
  }
}
