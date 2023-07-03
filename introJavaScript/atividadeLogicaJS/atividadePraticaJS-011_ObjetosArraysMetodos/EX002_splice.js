const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
// a. Remova "Preto"
const removerPreto = rainbow.splice(2, 1);
// b. Adicione "Amarelo" e "Verde"
const addAmareloVerde = rainbow.splice(2, 0, "Amarelo", "Verde");
// c. Adicione "Roxo"
const addRoxo = rainbow.splice(5, 0, "Roxo");
console.log(rainbow)
//Splice no final das contas é mais fácil do que pensei. Se existe alguma outra funcionalidade e em qual momento usar ele, não conheço. Da forma que fiz, realmente achei fácil.