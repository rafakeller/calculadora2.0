"use strict";
import { digitandoNumeros } from "./functions/digitandoNumeros.js";
import { digitandoOperadores } from "./functions/digitandoOperadores.js";
import { limpaArray } from "./functions/limpaArray.js";
import { zeraInput } from "./functions/zeraInput.js";

export const input = document.querySelector("[data-input]");

export const numeros = new Array();

input.focus();

digitandoNumeros(input);

digitandoOperadores(input, numeros);


export const mostrarResultado = (operador, numeros) => {
  input.value = "";

  if (operador.classList[1] === "soma") input.value = numeros[0] + numeros[1];

  if (operador.classList[1] === "sub") input.value = numeros[0] - numeros[1];

  if (operador.classList[1] == "multi") input.value = numeros[0] * numeros[1];

  if (operador.classList[1] === "divi") input.value = numeros[0] / numeros[1];

  
  if (numeros.length >= 2) {
    limpaArray();
  }

  // if (operador.classList[1] === "porcent") input.value = numeros[0] / numeros[1];
};

zeraInput(numeros);
