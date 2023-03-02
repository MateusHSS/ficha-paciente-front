import { environment } from 'src/environments/environment';

export const api_path = {
  fichas_paciente: {
    listar: {
      url: `${environment.backend_url}/ficha-paciente`,
    },
    getById: {
      url: `${environment.backend_url}/ficha-paciente`,
    },
    editar: {
      url: `${environment.backend_url}/ficha-paciente`,
    },
  },
  especialidades: {
    listar: {
      url: `${environment.backend_url}/especialidade`,
    },
  },
  planosSaude: {
    listar: {
      url: `${environment.backend_url}/plano-saude`,
    },
  },
};
