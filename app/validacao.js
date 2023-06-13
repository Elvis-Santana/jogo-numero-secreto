function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;
    if(chuteForInvalido(numero)) {
       elementoChute.innerHTML +="<div>Valor invalido</div>";
       return
    }

    if(numeroForMaiorOuMenor(numero)){
       elementoChute.innerHTML+=  `
       <div>
            Valor invalido : o número secreto precisa estar enter
            ${menorValor} e ${maiorValor} 
       </div>`
       return

    }

    if(numero === numeroSecreto){
        document.body.innerHTML=`
          <h2>Você acertou!</h2>
          <h3>O número Secreto era ${numeroSecreto}</h3>

          <button id="jogar-novamente" class="btn-jogar">Jogar novamanete</button>
        `
    }else if(numero > numeroSecreto){
      elementoChute.innerHTML +=`
      <div>O Número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>

      `
    }else{
        elementoChute.innerHTML +=`
        <div>O Número secreto é menor <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
        
    
}

function numeroForMaiorOuMenor(numero) {
    return numero >maiorValor || numero< menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click',e=>{
    if(e.target.id == 'jogar-novamente'){
    window.location.reload();
    }
});
