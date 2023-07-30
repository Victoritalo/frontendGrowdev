const valorBase = document.querySelector("#valor_base");
const valorTransporte = document.querySelector("#valor_transporte");
const valorAlimentacao = document.querySelector("#valor_alimentacao");
const valorReceita = document.querySelector("#valor_receita");
const valorAutomovel = document.querySelector("#valor_automovel");
const faltas = document.querySelector("#faltas");
const valorDescontos = document.querySelector("#valor_descontos");
const valorTotal = document.querySelector("#valor_total");
const calcularBtn = document.querySelector("#btn_calcular");

function atualizarPlanilha() {
  valorReceita.value =
    Number(valorBase.value) +
    Number(valorTransporte.value) +
    Number(valorAlimentacao.value);
  valorDescontos.value = Number(valorAutomovel.value) + Number(faltas.value);
  valorTotal.value = valorReceita.value - valorDescontos.value;
}
console.log();
function addAttribute() {
  window.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('*[id]:not([id=""])');

    elements.forEach((element) => {
      element.value = "";
      element.setAttribute("onkeyup", "atualizarPlanilha()");
    });
  });
}
addAttribute();
