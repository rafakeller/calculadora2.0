"use strict";

const botoes = document.querySelectorAll("[data-botao]");

export const digitandoNumeros = (input) => {
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      input.value += parseInt(botao.textContent);
    });
  });
};
