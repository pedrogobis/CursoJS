var res = window.document.querySelector('p#res')

function clicou1(){
    /*Adicionando o += de primeira, significa que ele sempre vai manter o anterior.
    
    colocar dentro de <p> para ficar sempre numa nova linha
    */
    res.innerHTML += `<p>Clicou no primeiro botão</p>`
}
function clicou2(){
    res.innerHTML += `<p>Clicou no segundo botão</p>`
}
function clicou3(){
    res.innerHTML += `<p>Clicou no terceiro botão</p>`
}
function clicou4(){
    res.innerHTML += `<p>Clicou no quarto botão</p>`
}
function clicou5(){
    res.innerHTML += `<p>Clicou no quinto botão</p>`
}
