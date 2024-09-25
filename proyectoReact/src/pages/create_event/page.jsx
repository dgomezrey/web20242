import React, { useState } from "react";

const CrearEvento = () => {
  const [nombreEvento, setNombreEvento] = useState("");
  const [ubicacionEvento, setUbicacionEvento] = useState("");
  const [fechaEvento, setFechaEvento] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!nombreEvento || !ubicacionEvento || !fechaEvento) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const tiempoInicio = Date.now();
    const tiempoFinal = Date.now();
    const tiempoTotal = (tiempoFinal - tiempoInicio) / 1000;

    if (tiempoTotal > 60) {
      setError("El tiempo de creación no debe ser mayor a 1 minuto");
      return;
    }

    const nuevoEvento = {
      nombre: nombreEvento,
      ubicacion: ubicacionEvento,
      fecha: fechaEvento,
    };

    console.log("Evento creado:", nuevoEvento);
    setSuccess("¡Evento creado con éxito!");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h2 className="text-4xl font-bold text-primary mb-6 font-inria">
          Crear un Nuevo Evento
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form
          onSubmit={manejarSubmit}
          className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-inria mb-2">
              Nombre del Evento:
            </label>
            <input
              type="text"
              value={nombreEvento}
              onChange={(e) => setNombreEvento(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-inria mb-2">
              Ubicación del Evento:
            </label>
            <input
              type="text"
              value={ubicacionEvento}
              onChange={(e) => setUbicacionEvento(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-inria mb-2">
              Fecha del Evento:
            </label>
            <input
              type="date"
              value={fechaEvento}
              onChange={(e) => setFechaEvento(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-inria font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Crear Evento
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearEvento;
