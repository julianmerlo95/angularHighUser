const API_ANDINA = 'http://0.0.0.0:8882';
const API_MOCK = 'http://0.0.0.0:8882';
const API_LOCATION = 'http://0.0.0.0:8882';

export const environment = {
  production: false,
  vehicles: {
    marca: `${API_ANDINA}/vehiculos/marcas`,
    modelo: `${API_ANDINA}/vehiculos/marcas`,
    version: `${API_ANDINA}/vehiculos/marcas`,
  },
  user: `${API_MOCK}/usuarios?nombre=`,
  coverage: `${API_MOCK}/coberturas`,
  location: {
    provincias: `${API_LOCATION}/provincias`,
    municipios: `${API_LOCATION}/municipios`,
  }
};
