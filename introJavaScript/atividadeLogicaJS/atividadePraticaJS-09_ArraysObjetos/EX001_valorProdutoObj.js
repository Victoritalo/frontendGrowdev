// Crie um objeto em JavaScript para colocar dois atributos de um
// produto. Atribua o preço e descrição do produto com o valor “90” e a
// descrição com o valor “Mouse”. Mostre no console o valor dos dois
// atributos.

const produtoEletronico = {
  Produto: "Mouse",
  Modelo: "Wireless",
  Valor: 90,
};

for (valores in produtoEletronico) {
  console.log(`${valores}: ${produtoEletronico[valores]}`);
}
