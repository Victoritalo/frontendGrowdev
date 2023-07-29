document.querySelector("#testButton").addEventListener("click", promptUser);
const paragrafo = document.querySelector(".classeParagrafo");

function promptUser() {
  const nameUser = prompt("Digite seu nome: ");
  paragrafo.innerHTML =
    "E aí " + nameUser + ", Você está deixando o seu site dinâmico.";
}

console.log("hello")