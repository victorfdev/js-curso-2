
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


function exibirMensagemNoConsole() {
    console.log('Mensagem no console');
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você esteve:') 
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número:'));
    let segundoNumero = parseInt(prompt('Digite o segundo número:'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`A soma de ${primeiroNumero} + ${segundoNumero} é ${resultado}`);
}