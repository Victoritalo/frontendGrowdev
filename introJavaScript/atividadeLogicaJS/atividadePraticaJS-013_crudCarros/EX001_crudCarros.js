"use strict";

let veiculosCadastrados = [
  {
    id: 0,
    modelo: "Civic",
    marca: "Honda",
    ano: 2015,
    cor: "Azul",
    preco: 40000,
  },
  {
    id: 1,
    modelo: "Corsa",
    marca: "Chevrolet",
    ano: 2014,
    cor: "Branco",
    preco: 15000,
  },
  {
    id: 2,
    modelo: "Gol",
    marca: "Volkswagen",
    ano: 2012,
    cor: "Prata",
    preco: 18000,
  },
];

let countId = 0;
countId += veiculosCadastrados.length;

apresentacao();
function apresentacao() {
  alert("Bem-vindo ao sistema de CRUD de veículos:");
  alert(
    `No momento, o sistema tem ${veiculosCadastrados.length} carros cadastrados.`
  );
  alert("Escolha uma das opções para interagir com o sistema:");

  let opcoes = 0;
  do {
    opcoes = Number(
      prompt(
        "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
      )
    );

    switch (opcoes) {
      case 1:
        cadastrarVeiculos();
        break;
      case 2:
        listarVeiculos();
        break;
      case 3:
        filtrarVeiculoMarca();
        break;
      case 4:
        atualizarVeiculo();
        break;
      case 5:
        removerCarro();
        break;
      case 6:
        alert("Saiu do sistema!");
        break;

      default:
        console.log("Número inválido!");
        break;
    }
  } while (opcoes !== 6);
}

function cadastrarVeiculos() {
  // const modelo = prompt("MODELO:");
  // const marca = prompt("MARCA:");
  // const ano = parseInt(prompt("ANO:"));
  // const cor = prompt("COR:");
  // const preco = parseInt(prompt("PREÇO:"));

  const modelo = "MODELO"
  const marca = "MARCA:"
  const ano = 2015
  const cor = "rOSA"
  const preco = 99999
  const carro = {
    id: countId,
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    preco: preco,
  };
  veiculosCadastrados.push(carro);
  countId++;
}

function listarVeiculos() {
  veiculosCadastrados.forEach((carro) => {
    console.log(
      `ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.preco}`
    );
  });
}

function filtrarVeiculoMarca() {
  const procurarMarca = prompt("Qual marca deseja achar?");
  const veiculoFiltrado = veiculosCadastrados.filter(function (carro) {
    return procurarMarca === carro.marca;
  });
  veiculoFiltrado.forEach((filtrado) => {
    console.log(
      `ID: ${filtrado.id} | Modelo: ${filtrado.modelo} | Marca: ${filtrado.marca} | Ano: ${filtrado.ano} | Cor: ${filtrado.cor} | Preço: R$${filtrado.preco}`
    );
  });
}

function atualizarVeiculo() {
  const procurarId = Number(prompt("Qual ID do veículo que deseja atualizar?"));
  const getIndex = veiculosCadastrados.findIndex((atualizar) => {
    return atualizar.id === procurarId;
  });

  if (getIndex === procurarId) {
    const alterarCor = prompt("Nova cor do veículo:")
    const alterarValor = parseInt(prompt("Novo preço do veículo:"))
    veiculosCadastrados[getIndex].cor = alterarCor;
    veiculosCadastrados[getIndex].preco = alterarValor;
  } else {
    alert("Veículo não encontrado.");
    return;
  }
}

function removerCarro() {
  const procurarId = Number(prompt("Qual ID do veículo que deseja remover?"));
  const getIndex = veiculosCadastrados.findIndex((deletar) => {
    return deletar.id === procurarId;
  });
  if (getIndex === procurarId) {
    veiculosCadastrados.splice(procurarId, 1);
  } else {
    alert("Veículo não encontrado.");
    return;
  }
}
