import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_path } from '../constants/api-path';

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

interface FichaPacienteUpdate {
  nomePaciente: string | null;
}

@Injectable()
export class FichasPacienteService {
  constructor(private http: HttpClient) {}

  getFichasPaciente() {
    return this.http.get<FichaPaciente[]>(api_path.fichas_paciente.listar.url);
  }

  getFichaPacienteById(
    numeroCarteiraPlano: string,
    idEspecialidade: string,
    idPlanoSaude: string
  ) {
    return this.http.get<FichaPaciente>(
      `${api_path.fichas_paciente.getById.url}/${numeroCarteiraPlano}/${idEspecialidade}/${idPlanoSaude}`
    );
  }

  updateFichaPaciente(
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
}
