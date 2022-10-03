"Use strict"

import { resultado } from "./resultado.js";
const operadores = document.querySelectorAll("[data-simbolo]");

export const digitandoOperadores = (input, numeros)=>{
  operadores.forEach((operador) => {
    operador.addEventListener("click", () => {
      numeros.push(parseFloat(input.value));
  
      input.value = "";
  
      resultado(operador, numeros);
    });
  });
}