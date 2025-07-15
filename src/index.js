// Importa React y StrictMode desde la librería 'react'
import React, { StrictMode } from "react";

// Importa la función createRoot desde 'react-dom/client', que se usa para crear la raíz de la aplicación en el DOM
import { createRoot } from "react-dom/client";

// Importa el archivo de estilos CSS para que se apliquen en la aplicación
import "./styles.css";

// Importa el componente principal de la aplicación
import App from "./App";

// Busca el elemento HTML con id "root" donde se va a montar la aplicación React
const root = createRoot(document.getElementById("root"));

// Renderiza el componente App dentro del elemento root, envolviéndolo en StrictMode para ayudar a detectar problemas en el código React
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
