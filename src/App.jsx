import { EVENTS } from "./consts";
import { useEffect, useState } from "react";
import Hero from "./pages/Hero";
import AddRestaurantPage from "./pages/AddRestaurantPage";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to bg-gray-950 py-9 text-white text-sm sm:text-base ">
      {currentPath == "/" && <Hero />}
      {currentPath == "/add" && <AddRestaurantPage />}
    </main>
  );
}

export default App;
