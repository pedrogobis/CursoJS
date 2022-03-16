


function contar(){
    var res = document.querySelector('#res');
    var ini = document.querySelector('#ini');
    var fim = document.querySelector('#fim');
    var passo = document.querySelector('#passo');
    var inin = Number(ini.value);
    var fimn = Number(fim.value);
    var passon = Number(passo.value);
 
    // Corrigimos para sumir o texto.
    res.innerHTML = ``;

    // Corrigi o por que não estava deixando o passo passar em branco.
    if( inin == 0 || fimn == 0 || passon == 0){
        alert('Erro01 - Numero de inicio errada!')
    }else{

        while(inin <= fimn){
            
            res.innerHTML += `${inin} &#x1F51C  `
            inin++
        }
        res.innerHTML += `&#x1F602`







        /*
        res.innerHTML = `aqui ${ini.
            value}, ${fim.value}, ${passo.value}`;
            */


    }
    
}

function limpar(){
    res.innerHTML = 'Limpo!';
    
}