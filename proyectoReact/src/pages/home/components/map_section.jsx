import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries = ["places"];

const MapSection = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null); // Inicializa como null
  const [events, setEvents] = useState([]); // Estado para los eventos
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "", // Reemplaza con tu API Key
    libraries,
  });

  useEffect(() => {
    // Obtener la ubicación actual del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error obteniendo la ubicación: ", error);
        }
      );
    } else {
      console.error("Geolocation no es compatible con este navegador.");
    }
  }, []);

  useEffect(() => {
    // Hacer fetch de los eventos desde la URL
    fetch("https://dstapias.github.io/apisJson/AroundTheCorner.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data); // Actualizar el estado con los eventos
      })
      .catch((error) => {
        console.error("Error al obtener los eventos: ", error);
      });
  }, []);

  if (loadError) return <div>Error cargando mapas</div>;
  if (!isLoaded) return <div>Cargando mapas...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={currentLocation || { lat: 0, lng: 0 }} // Usamos lat: 0, lng: 0 como fallback
      options={options}
      mapContainerClassName={props.className}
    >
      {/* Mostrar el marcador de la ubicación actual */}
      {currentLocation && <Marker position={currentLocation} />}

      {/* Colocar los marcadores de los eventos */}
      {events.map((event, index) => (
        <Marker
          key={index}
          position={{ lat: event.latitude, lng: event.longitude }}
          title={event.name}
        />
      ))}
    </GoogleMap>
  );
};

export default MapSection;
