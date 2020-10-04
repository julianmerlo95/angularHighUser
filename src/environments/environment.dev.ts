const API_ANDINA = 'https://servicios.qamercantilandina.com.ar/api/v1';
const API_MOCK = 'https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1';
const API_LOCATION = 'https://apis.datos.gob.ar/georef/api';

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
