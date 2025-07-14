import React, { useEffect, useState, createContext } from "react";

export const UniContext = createContext();

const UniContextProvider = ({ children }) => {
  const [universities, setUniversties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/SaeedAchiever/Afro_UniSphere/refs/heads/master/Components/University/universities.json"
        );
        const data = await res.json();
        setUniversties(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <UniContext.Provider value={universities }>
      {children}
    </UniContext.Provider>
  );
};

export default UniContextProvider;
