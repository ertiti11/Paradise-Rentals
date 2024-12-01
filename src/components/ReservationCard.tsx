import React from 'react';
import { Anchor, Ship, Users, Calendar, CreditCard, Phone, Mail } from 'lucide-react';
import { generateTicketPDF } from '../lib/pdfGenerator';
import { formatDate } from '../lib/dateFormatter';

interface ReservationCardProps {
  id: number;
  barco_id: number;
  fecha_inicio: string;
  fecha_fin: string;
  precio_total: number;
  nombre_cliente: string;
  apellidos_cliente: string;
  email_cliente: string;
  estado: string;
  metodo_pago: string;
  fecha_pago: string;
  fecha_cancelacion: string | null;
  motivo_cancelacion: string | null;
  comentarios: string | null;
  codigo_reserva: string;
  dni_cliente: string;
  telefono_cliente: string;
  created_at: string;
  updated_at: string;
  cliente: any | null;
  barco: { nombre: string };
}

export function ReservationCard({
  barco_id,
  fecha_inicio,
  fecha_fin,
  precio_total,
  nombre_cliente,
  apellidos_cliente,
  email_cliente,
  estado,
  metodo_pago,
  telefono_cliente,
  codigo_reserva,
  barco
}: ReservationCardProps) {
  const handleDownload = () => {
    generateTicketPDF({
      codigo_reserva,
      nombre_cliente,
      apellidos_cliente,
      barco_id,
      fecha_inicio,
      fecha_fin,
      precio_total,
      metodo_pago,
      
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">¡Reserva Confirmada!</h2>
          <p className="text-gray-600">Estado: <span className="capitalize">{estado}</span></p>
        </div>
        <div className="bg-green-100 px-4 py-2 rounded-full">
          <p className="text-green-800 font-semibold">#{codigo_reserva}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <Ship className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Barco</h3>
            <p className="text-gray-600">{barco.nombre}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Calendar className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Fechas</h3>
            <p className="text-gray-600">Inicio: {formatDate(fecha_inicio)}</p>
            <p className="text-gray-600">Fin: {formatDate(fecha_fin)}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Users className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Cliente</h3>
            <p className="text-gray-600">{nombre_cliente} {apellidos_cliente}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-gray-600">{email_cliente}</p>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-gray-600">{telefono_cliente}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Pago</h3>
            <p className="text-gray-600">Método: <span className="capitalize">{metodo_pago}</span></p>
            <p className="text-gray-600">Total: €{precio_total.toFixed(2)}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Anchor className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-500">¡Buen Viaje!</span>
            </div>
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Descargar Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}