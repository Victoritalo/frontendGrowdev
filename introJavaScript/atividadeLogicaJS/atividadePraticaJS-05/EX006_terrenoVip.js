// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let comprimento = 55;
let largura = 55;
let classeTerreno = comprimento * largura;

if (classeTerreno < 100) {
  console.log("TERRENO POPULAR");
} else if (classeTerreno >= 100 && classeTerreno <= 500) {
  console.log("TERRENO MASTER");
} else {
  console.log("TERRENO VIP");
} 
