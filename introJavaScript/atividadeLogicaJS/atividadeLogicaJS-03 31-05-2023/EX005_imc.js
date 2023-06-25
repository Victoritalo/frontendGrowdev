let altura = 172;
let peso = 72;

let imc = peso / (altura / 100) ** 2;
imc = imc.toFixed(2);
if (imc < 18.5) {
  console.log(`Seu IMC é: ${imc} | Abaixo do peso ideal`);
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log(`Seu IMC é: ${imc} | Peso normal ou adequado`);
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log(`Seu IMC é: ${imc} | Sobrepeso`);
} else if (imc >= 30.0 && imc <= 34.9) {
  console.log(`Seu IMC é: ${imc} | Obesidade Grau I`);
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log(`Seu IMC é: ${imc} | Obesidade Grau II`);
} else if (imc >= 40) {
  console.log(`Seu IMC é: ${imc} | Obesidade Grau III ou Mórbida`);
}
