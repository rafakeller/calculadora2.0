"use strict";
import { digitandoNumeros } from "./functions/digitandoNumeros.js";
import { digitandoOperadores } from "./functions/digitandoOperadores.js";
import {
  arrayPorcent,
  digitandoPorcent,
} from "./functions/digitandoPorcent.js";
import { limpaArray } from "./functions/limpaArray.js";
import { zeraInput } from "./functions/zeraInput.js";

export const input = document.querySelector("[data-input]");

export const numeros = new Array();

input.focus();

digitandoNumeros(input);
digitandoPorcent();
digitandoOperadores(input, numeros);

export const mostrarResultado = (operador, numeros) => {
  input.value = "";

  switch (operador.classList[1]) {
    case "soma":
      input.value = numeros[0] + numeros[1];
      break;

    case "sub":
      input.value = numeros[0] - numeros[1];
      break;
    case "multi":
      if (arrayPorcent == "%") {
        input.value = numeros[0] * (numeros[1] / 100);
      } else {
        input.value = numeros[0] * numeros[1];
      }

      break;

    case "divi":
      input.value = numeros[0] / numeros[1];
      break;

    default:
      alert("digite uma operação");
  }

  if (numeros.length >= 2) {
    limpaArray();
  }

  // if (operador.classList[1] === "porcent") input.value = numeros[0] / numeros[1];
};

zeraInput(numeros);
