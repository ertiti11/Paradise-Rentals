import React from 'react';

function Reservas() {
  return (
    <div>
      <h1>Página de Reservas</h1>
      <p>Tipo de barco</p>
      <div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
      <span className="text-white-700">1 Motor</span>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
      <span className="text-white-700">Opción 1: Facilidad de uso</span>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
      <span className="text-white-700">Opción 1: Facilidad de uso</span>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
      <span className="text-white-700">Opción 1: Facilidad de uso</span>
      <p>Precio por dia</p>
      </div>
    </div>
  );
}

export default Reservas;