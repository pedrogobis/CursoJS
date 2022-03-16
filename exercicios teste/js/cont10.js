var res = document.querySelector('#res');

function clicou(){
    var contador = 0;
    

    res.innerHTML += `<p>Contando até 10</p>`;
    while(contador<=10){
        res.innerHTML += `${contador} &#x1F51C`
        contador++
    }
    res.innerHTML += `&#x1F602`
}

function limpar(){
    res.innerHTML = null;
}