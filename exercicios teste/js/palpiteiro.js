var res = document.querySelector('#res');
var sort = Math.floor(Math.random() * 51)

function clicou(){
    var num = Number(prompt('Digite o numero que você acha que é!'));
    if(num == sort){
        res.innerHTML += `<p><strong>PARABÉNS!</strong> VOCÊ ACERTOU O NUMERO, É  ${sort}</p>`
        var bt = window.document.querySelector('#botao')
        bt.innerHTML = '<strong>Parabens! otario! &#128076;</strong>	'
    }else if(num > sort){
        res.innerHTML += `<p>Você falou ${num}, Meu numero é <strong>MENOR</strong></p>`
    }else if(num < sort){
        res.innerHTML += `<p>Você falou ${num}, Meu numero é <strong>MAIOR</strong></p>`
    }


}