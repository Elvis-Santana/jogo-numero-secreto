const menorValor =1;
const maiorValor =100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor +1);
}

console.log(`Número secreto: ${numeroSecreto}`);



const elementoMenorValor = document.querySelector('#menor-value');
const elementoMaiorValor = document.querySelector("#maior-value")

elementoMenorValor.innerHTML =menorValor;
elementoMaiorValor.innerHTML =maiorValor;