


function contar(){
    var res = document.querySelector('#res');
    var ini = document.querySelector('#ini');
    var fim = document.querySelector('#fim');
    var passo = document.querySelector('#passo');
    var inin = Number(ini.value);
    var fimn = Number(fim.value);
    var passon = Number(passo.value);
 
    // Corrigimos para sumir o texto.
   

    // Corrigi o por que não estava deixando o passo passar em branco.
    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       // declarei a inicial, para apenas valer os dados dentro do campo, pois do jeito anterior, se eu digitasse 0 não daria certo.
        alert('Erro01 - Numero de inicio errada!')
        res.innerHTML = `<h3>Impossivel contar</h3>`;
    }else {
       
        res.innerHTML = `<h3>Contando</h3>`;
        // se alguem colocar passo 0 ele já corrige e não quebra o site
        
        if(passon <=0){
            alert('Passo invalido, passo pelo menos como 1')
            passon = 1
        }


        if( inin < fimn){
            for(var c = inin; c <= fimn; c+= passon){
                // o codigo bugou, pelo mesmo erro que já tinha feito e anotado nos exercicios, faltou o '+' na frente do '='
                res.innerHTML +=`${c} &#x1F51C  `
            }

        }else{
            for(var c = inin; c>= fimn; c-= passon) {
                res.innerHTML +=`${c} &#x1F51C  `
            }
        }
           res.innerHTML += `&#x1F602`

        /* meu codigo.
        while(inin <= fimn){
            
            res.innerHTML += `${inin} &#x1F51C  `
            inin++
        }
        res.innerHTML += `&#x1F602`
        */






        /*
        res.innerHTML = `aqui ${ini.
            value}, ${fim.value}, ${passo.value}`;
            */


    }
    
}

function limpar(){
    res.innerHTML = 'Limpo!';
    
}