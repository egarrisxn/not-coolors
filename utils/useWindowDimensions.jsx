import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: 1920,
    height: 1920,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
