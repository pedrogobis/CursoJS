


function contar(){
    var res = document.querySelector('#res');
    var ini = document.querySelector('#ini');
    var fim = document.querySelector('#fim');
    var passo = document.querySelector('#passo');
    

    res.innerHTML = `<h3>Contando</h3>`;

  
    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        alert('Erro01 - Numero de inicio errada!')
    }else {
        res.innerHTML = `<h3>Contando</h3>`;

        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for(let j = i; j <= f; j+= p) {
            res.innerHTML +=`${j} `
        }
        


    }
    
}

function limpar(){
    res.innerHTML = 'Limpo!';
    
}