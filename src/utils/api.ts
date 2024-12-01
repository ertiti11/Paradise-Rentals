//get barcos from api

export const getBarcos = async () => {
  const response = await fetch("http://localhost:8000/api/v1/barcos/");
  return await response.json();
};

//get tipos de barcos

export const getTiposBarcos = async () => {
  const response = await fetch("http://localhost:8000/api/v1/tipos");
  return await response.json();
};

//get barco by id

export const getBarcoById = async (id) => {
  const response = await fetch(`http://localhost:8000/api/v1/barcos/${id}`);
  return await response.json();
};

//get all barcos locations

export const getBarcosLocations = async () => {
  const response = await fetch("http://localhost:8000/api/v1/barcos");
  const data = await response.json();
  const locations = data.map((barco) => barco.localizacion);
  return locations;
};
