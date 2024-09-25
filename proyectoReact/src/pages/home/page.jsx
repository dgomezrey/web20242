import MapSection from "./components/map_section.jsx";
import EventsSection from "./components/events_section.jsx";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-[80vh]">
      {/* Contenedor del mapa y el texto */}
      <div className="flex w-full h-1/2 pr-16">
        <MapSection className="rounded-r-2xl w-1/2 h-full" />
        <div className="flex flex-col justify-start items-center w-1/2 px-16 text-right h-full py-16">
          <h1 className="text-3xl font-bold">¡Bienvenido a Around the Corner!</h1>
          <p className="text-base text-right mt-4">
            Encuentra los mejores lugares cerca de ti. ¡No importa en qué parte del mundo te encuentres!
          </p>
        </div>
      </div>

      {/* Contenedor de la sección de eventos */}
      <div className="w-full h-1/2">
        <EventsSection />
      </div>
    </div>
  );
};

export default LandingPage;

