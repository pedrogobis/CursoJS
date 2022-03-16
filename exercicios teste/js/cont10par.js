var contador = 0;
var res = document.querySelector('#res');


function clicou(){
    var divide = contador / 2
    res.innerHTML +=`<strong>Contando de 1 até 10, marcando os pares</strong>`

    while(contador <= 10){
        res.innerHTML += `${contador} &#x1F51C`
    }
    if(divide == 2){
        res.innerHTML += ` impar `
    } else{
        
    }




}

function limpar(){
    res.innerHTML = null;

}