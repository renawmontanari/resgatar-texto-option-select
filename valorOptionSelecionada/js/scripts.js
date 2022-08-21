
'use strict'

const selectOptions = document.querySelector("#options");

console.log(selectOptions);

const indice = selectOptions.selectedIndex;
const valor = selectOptions.value;
const text = selectOptions.options[indice].text;

console.log(indice);
console.log(valor);
console.log(text);
