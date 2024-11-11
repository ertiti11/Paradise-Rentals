//get barcos from api


export const getBarcos = async () => {
    const response = await fetch('http://localhost:8000/api/v1/barcos/');
    return await response.json();
}




//get tipos de barcos

export const getTiposBarcos = async () => {
    const response = await fetch('http://localhost:8000/api/v1/tipos');
    return await response.json();
}