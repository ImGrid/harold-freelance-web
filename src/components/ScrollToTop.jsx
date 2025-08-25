import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll al top de la página cuando cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Opcional: scroll suave
    });
  }, [pathname]);

  // Este componente no renderiza nada visible
  return null;
};

export default ScrollToTop;
