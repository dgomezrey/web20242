import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCalendarPlus, FaShareAlt } from 'react-icons/fa';

const EventDetail = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Obtenemos el evento del estado pasado

  if (!event) {
    return <div>No se encontró el evento...</div>;
  }

  const { name, gallery, date_time, address, description, costs, ticketLink } = event;

  // Función para generar el link a Google Calendar
  const handleAddToCalendar = () => {
    const startDate = new Date(date_time).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; //formato google calendar
    const endDate = new Date(new Date(date_time).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; 
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(name)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(address)}&sf=true&output=xml`;

    // Redirigir al usuario a Google Calendar
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className='flex flex-col items-center'>
      <div className="max-w-4xl mx-auto p-6 text-customPurple font-sans">
        <h1 className="text-3xl font-bold mb-6 text-center">{name}</h1>
      
        {/* Galería de imágenes */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {/* Si no hay gallery, generamos imágenes aleatorias */}
          {(gallery && gallery.length > 0 ? gallery : Array(3).fill(null)).map((_, index) => (
            <img 
              key={index} 
              src={`https://picsum.photos/350?random=${Date.now() + index}`} 
              alt={`Gallery ${index + 1}`} 
              className="w-64 h-48 object-cover rounded-lg" 
            />
          ))}
        </div>

        {/* Información del evento */}
        <div className="mb-6">
          <p className="text-lg"><strong>Fecha y Hora:</strong> {date_time}</p>
          <p className="text-lg"><strong>Dirección:</strong> {address}</p>
          <p className="text-lg"><strong>Descripción:</strong> {description}</p>
          <p className="text-lg"><strong>Costos:</strong> {costs}</p>
          <a 
            href={ticketLink} 
            className="inline-block mt-2 text-lg border-2 border-customPurple text-customPurple py-2 px-4 rounded hover:bg-customPurple hover:text-white transition-colors" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Comprar boletos
          </a>
        </div>

        {/* Botones de acciones */}
        <div className="flex gap-4 justify-between">
          <button 
            className="flex items-center bg-customPurple text-white py-2 px-4 rounded hover:bg-[#6B539C] transition-colors"
            onClick={handleAddToCalendar}
          >
            <FaCalendarPlus className="mr-2" /> Agregar al calendario
          </button>
          <button className="flex items-center bg-customPurple text-white py-2 px-4 rounded hover:bg-[#6B539C] transition-colors">
            <FaShareAlt className="mr-2" /> Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
