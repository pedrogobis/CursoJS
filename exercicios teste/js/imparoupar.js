
var res = window.document.querySelector('#res')

function clicou(){
    var num = Number(prompt('Digite o numero a ser verificado'))

    if ((num % 2) == 0){
        res.style.color = 'green';
        res.innerHTML = `O ${num} que foi digitado é <strong>PAR!</strong>`;
    } else{
        res.style.color = 'purple';
        res.innerHTML = `O ${num} que foi digitado é <strong>IMPAR!</strong>`
    }
}