import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  // usestate --> Hook: funciones que vienen con  React
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    setContador(100);
  }, [nombre]);

  return (
    <div className="App" id="App">
      <div>El valor de mi contador es: {contador}</div>
      <button
        className="button"
        onClick={() => {
          // Llamamos al hook y le asignamos otro valor al contador
          setContador(contador + 1);
        }}
      >
        Aumentar contador
      </button>

      <button
        className="button"
        onClick={() => {
          setContador(0);
        }}
      >
        Reinicializando
      </button>
      <button
        className="button"
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Reverse
      </button>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="ingresa tu nombre"
      />
      <Button />
      <span>Mi nombre es: {nombre}</span>
    </div>
  );
}

export default App;
