import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);

  // Fetch de eventos desde la URL
  useEffect(() => {
    fetch("https://dstapias.github.io/apisJson/AroundTheCorner.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error al obtener los eventos:", error));
  }, []);

  // Cálculo de páginas
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Cambio de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="events-section p-6">
      <h5 className="text-xl font-semibold mb-4">{events.length} Resultados</h5>

      {/* Control de paginación */}
      <div className="pagination-control flex items-center justify-center mb-6">
        <span className="mr-2">Página</span>
        <select
          className="border border-gray-300 rounded px-3 py-1"
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
        >
          {[...Array(totalPages).keys()].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <span className="ml-2">de {totalPages}</span>
      </div>

      {/* Mostrar los eventos en tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentEvents.map((event, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img
              className="w-full h-48 object-cover mb-4"
              src={`https://picsum.photos/350?random=${Date.now() + index}`}
              alt={event.name}
            />
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{event.date_time}</p>
            <p className="text-sm">
              <strong>Ubicación:</strong> {event.address} <br />
              <strong>Descripción:</strong> {event.description} <br />
              <strong>Costos:</strong> ${event.costs}
            </p>
            {/* Envolvemos el botón en un Link pasando el id */}
            <Link to={`/detalle-evento/${index}`} state={{ event }}>
              <button className="mt-4 bg-customPurple text-white px-4 py-2 rounded">
                Ver más
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Control de paginación */}
      <div className="pagination-control flex justify-center mt-6">
        <button
          className={`px-4 py-2 mx-1 rounded ${currentPage === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-customPurple text-white"
            }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
        </button>
        <button
          className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-customPurple text-white"
            }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default EventsSection;
