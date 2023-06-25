// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook.

const notebook = {
  Processador: "i7",
  Memória: "16GB",
  Preço: 5000,
  HD: "1TB",
  SSD: "256GB",
};

for (const key in notebook) {
    console.log(`${key}: ${notebook[key]}`)
}