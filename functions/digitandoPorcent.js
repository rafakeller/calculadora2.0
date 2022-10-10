"use strict"

import { input } from "../main.js"
import { resultado } from "./resultado.js"

export const arrayPorcent = new Array();

const porcent = document.querySelector("[data-porcent]")
export const digitandoPorcent = () =>{
 porcent.onclick = ()=>{
   input.value += "%"
   arrayPorcent.push("%")
   console.log(arrayPorcent)
 }

 
  //se o numero for acompanho por uma porcentagem ele vira esse número dividido por 100
 
}