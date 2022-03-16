var res = document.querySelector('#res');

function clicou(){
    var contador = 0;
    

    res.innerHTML += `<p>Contando até 10</p>`;// pra pular linha tem que colocar tag e eu esqueci disso também
    while(contador<=10){
        res.innerHTML += `${contador} &#x1F51C` // Meu erro estava aqui, eu esqueci de colocar o + na frente do = então ele só estava printando o ultimo numero
        contador++
    }
    res.innerHTML += `&#x1F602`
}

function limpar(){
    res.innerHTML = null;
}