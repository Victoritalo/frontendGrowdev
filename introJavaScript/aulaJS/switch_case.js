const tech = 'Typescript'//(prompt('Digite a linguagem de programação que você domina:'));

switch (tech) {
    case 'C#':
        document.write('C# é uma tecnologia da Microsoft.');
        break;

    case 'Javascript':
    case 'Typescript':
        document.write('Javascript e Typescript são utilizadas no NodeJS e ReactJS.');
        break;

    default:
        document.write(`Nenhuma informação programada para: ${tech}.`);
        break;
}