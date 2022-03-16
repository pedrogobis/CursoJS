


function contar(){
    var res = document.querySelector('#res');
    var ini = document.querySelector('#ini');
    var fim = document.querySelector('#fim');
    var passo = document.querySelector('#passo');


    
    res.innerHTML += `aqui ${ini}, ${fim}, ${passo}`;
}

function limpar(){
    res.innerHTML = 'Limpo!';
}