import jsPDF from 'jspdf';

interface TicketData {
  reservationNumber: string;
  passengers: string[];
  shipName: string;
}

export const generateTicketPDF = ({ codigo_reserva,
  nombre_cliente,
  apellidos_cliente,
  barco_id,
  fecha_inicio,
  fecha_fin,
  precio_total,
  metodo_pago }: TicketData) => {
  const doc = new jsPDF();
  
  // Set up the document
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 139); // Dark blue
  doc.text('Cruise Reservation Ticket', 105, 20, { align: 'center' });
  
  // Add logo placeholder
  doc.setDrawColor(0, 0, 139);
  doc.setLineWidth(0.5);
  doc.rect(20, 30, 170, 2);
  
  // Reservation details
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Reservation Number: ${codigo_reserva}`, 20, 50);
  doc.text(`Ship: ${barco_id}`, 20, 60);
  
  // Passenger list
  doc.text('Passengers:', 20, 80);
  // passengers.forEach((passenger, index) => {
  //   doc.text(`• ${passenger}`, 30, 90 + (index * 10));
  // });
  doc.text(`• ${nombre_cliente} ${apellidos_cliente}`, 30, 90);
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128);
  const currentDate = new Date().toLocaleDateString();
  doc.text(`Generated on: ${currentDate}`, 20, 270);
  doc.text('This is an official travel document', 105, 280, { align: 'center' });
  
  // Save the PDF
  doc.save(`cruise-ticket-${codigo_reserva}.pdf`);
};