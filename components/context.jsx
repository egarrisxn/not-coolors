"use client";
import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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

  const [savedPalette, setSavedPalette] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPalettes = localStorage.getItem("paletteColors");
      if (storedPalettes) {
        setSavedPalette(JSON.parse(storedPalettes));
      }
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        windowSize,
        savedPalette,
        setSavedPalette,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
