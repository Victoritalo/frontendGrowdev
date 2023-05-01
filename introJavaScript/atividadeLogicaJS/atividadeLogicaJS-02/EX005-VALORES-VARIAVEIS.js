let valorA = 10;
let valorB = 20;
let tempValue;

document.write(`Antes: Valor A: ${valorA} & Valor B: ${valorB}<br> `);
document.write(`<br><br>`);

tempValue = valorA;
valorA = valorB;
valorB = tempValue;

document.write(`Depois: Valor A: ${valorA} & Valor B: ${valorB} `);