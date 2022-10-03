"use strict";

import { input } from "../main.js";
import { limpaArray } from "./limpaArray.js";
const deletar = document.querySelector("[data-limpa]");

export const zeraInput = () => {
  deletar.onclick = () => {
    input.value = "";
    limpaArray();
  };
};
