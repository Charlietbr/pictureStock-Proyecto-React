import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [topic, setTopic] = useState("Atardecer");

    const [paginaActual, setPaginaActual] = useState(1);
    const [porPagina, setPorPagina] = useState(20);

    return (
        <DataContext.Provider value={{ results, setResults, topic, setTopic, paginaActual, setPaginaActual, porPagina, setPorPagina }}>
            {children}
        </DataContext.Provider>
    );
};