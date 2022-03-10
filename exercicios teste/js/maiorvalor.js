var res = document.querySelector('#res');

function clicou(){
    var num1 = Number(prompt('Digite o primeiro numero!'))
    var num2 = Number(prompt('Digite o segundo numero!'))

    if ( num1 > num2){
        res.innerHTML = `Analisamos os numeros <mark>${num1}</mark> e <mark>${num2}</mark>, O maior valor é <strong>${num1}</strong>`;
    }else {
        res.innerHTML = `Analisamos os numeros <mark>${num1}</mark> e <mark>${num2}</mark>, O maior valor é <strong>${num2}</strong>`;
    }

}