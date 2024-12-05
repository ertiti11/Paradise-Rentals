//get barcos from api

export const getBarcos = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/barcos/`);
  return await response.json();
};

//get tipos de barcos

export const getTiposBarcos = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tipos`);
  return await response.json();
};

//get barco by id

export const getBarcoById = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/barcos/${id}`);
  return await response.json();
};

//get all barcos locations

export const getBarcosLocations = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/barcos`);
  const data = await response.json();
  const locations = data.map((barco) => barco.localizacion);
  return locations;
};
