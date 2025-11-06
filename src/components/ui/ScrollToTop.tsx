import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant scroll
    });
  }, [pathname]); // runs every time route changes

  return null; // nothing to render
}

export default ScrollToTop;
