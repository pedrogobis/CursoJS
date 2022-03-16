


function contar(){
    var res = document.querySelector('#res');
    var ini = document.querySelector('#ini');
    var fim = document.querySelector('#fim');
    var passo = document.querySelector('#passo');
    var inin = ini.value;
    var fimn = fim.value;
    var passo = passo.value;
 

    if( Number(ini.value) == 0 || Number(fim.value) == 0 || Number(passo.value) == 0){
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