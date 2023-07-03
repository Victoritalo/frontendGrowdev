// Atividade 7 - Switch case

const diaSemana = Number(prompt('Digite um numero de 1 a 7'));

    switch (diaSemana) {
        case 1:
            document.write('Hoje é Segunda');
        break;

        case 2:
            document.write(`Hoje é Terça`);
        break;

        case 3:
            document.write(`Hoje é Quarta`);
        break;

        case 4:
            document.write(`Hoje é Quinta`);
        break;

        case 5:
            document.write(`Hoje é Sexta`);
        break;

        case 6:
            document.write(`Hoje é Sabado`);
        break;

        case 7:
            document.write(`Hoje é Sabado`);
        break;

        default:
            document.write(`De 1 a 7`);
            location.reload();
        break;
    }