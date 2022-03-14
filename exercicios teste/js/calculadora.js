var res = document.querySelector('#res');
var resultado = 0;

function clicou(){
    var num1 = Number(prompt('Digite o primeiro numero!'))
    var num2 = Number(prompt('Digite o segundo numero'))
    var acao = Number(prompt(`<p>Valores infomrados: ${num1} e ${num2}.</p>
    <p>O que vamos fazer?</p>
    <p>1- Somar.</p>
    <p>2- Subtrair.</p>
    <p>3- Multiplicar.</p>
    <p>4- Dividir.</p>
    `))

    switch (acao){
    case acao = 1:
        resultado = num1 + num2;
        res.innerHTML =`${num1} + ${num2} = <strong>${resultado}</strong>`
        break;
    case acao = 2:
        resultado = num1 - num2;
        res.innerHTML =`${num1} - ${num2} = <strong>${resultado}</strong>`
        break;
    case acao = 3:
        resultado = num1 * num2;
        res.innerHTML =`${num1} X ${num2} = <strong>${resultado}</strong>`
        break;
    case acao = 4:
        resultado = num1 / num2;
        res.innerHTML =`${num1} / ${num2} = <strong>${resultado}</strong>`
        break;
    default:
        res.innerHTML =`<strong>Opção invalida, você digitou 0 e 0, mas não sei o que fazer com eles</strong>`
    }


}

function limpar(){

    res.innerHTML = null

}