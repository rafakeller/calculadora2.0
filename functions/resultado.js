"use strict";
import { input, mostrarResultado } from "../main.js";



export const resultado = (operador, numeros) => {
  const sinalIgual = document.querySelector("[data-resultado]");

  sinalIgual.onclick = () => {
    numeros.push(parseFloat(input.value));
    mostrarResultado(operador, numeros);
  };
};
