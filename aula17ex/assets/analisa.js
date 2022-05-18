let res = document.querySelector('#listadevalores');
let numero = document.querySelector('#inputnumero');
let finalizardados = document.querySelector('#resultadoFinalizar')
let numerosInseridos = [];
//definindo a variavel do array como global, consegui corrigir o problema de substituição de numeros, agora está funcionando 

// O professor, para verificar se o numero é valido e se o valor é maior que 100 ou menor que zero, ele criou duas funcoes de verificação a parte, muito sabio.

// ele faz a conversão dos numeros dentro destas funcoes aparentemente

function eNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

// verificando se o numero já esta na lista com o indexof
function naLista(n,lista){
    if(lista.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function fazer(){
    // se é numero e não esta nalista faça...
    if(eNumero(numero.value) && !naLista(numero.value, numerosInseridos)){
        numerosInseridos.push(Number(numero.value));// converteu direto na hora de inserir
        //meu ele não usou loop 
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        res.appendChild(item);
        finalizardados.innerHTML= null ;
    } else {
        alert('Valor invalido ou já adicionado na lista')
    }
    numero.value='';
    numero.focus()//deixa o atributo focado
}

function finalizar(){
    
    if(numerosInseridos.length == 0){ // tinha deixado como menos de um e ele colocou igual a 0
        alert('Erro, insira valores no sistema!')
    } else {

    let totalitens = numerosInseridos.length; // tinha pensado em fazer isso no começo kkk

    let maior = numerosInseridos[0];
    let menor = numerosInseridos[0];
    let soma = 0;
    let media = 0;
    // mano que absurdo, ele não usou nada do padrão feito pelo js, ele simplesmente criou um forIN e fez a alteração 
    // para numero em numeros
    for(let pos in numerosInseridos){
        // o for in vai percorrer todos os valores, então a gente coloca soma adiciona sempre o valor do numeroinserido[posicaonumero]
        soma += numerosInseridos[pos]
        // numeros[posicaonumero] é maior que o valor de maior?
        if(numerosInseridos[pos]> maior)
            // se sim o maior recebe o numeros[posicaonumero]
            maior = numerosInseridos[pos];
        // numeros[posicaonumero] é menor que o valor de menor?
        if(numerosInseridos[pos] < menor)
            // se sim menor recebe o valor de numeros[posicaonumero]
            menor = numerosInseridos[pos]
    }
    //media recebe soma / total de itens
    media =  soma/totalitens;

    finalizardados.innerHTML = `<p>Ao todo, temos <strong>${totalitens}</strong> numeros cadastrados</p>\n`

    finalizardados.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong></p>`
    finalizardados.innerHTML +=`<p>O menor informado foi <strong>${menor}</strong></p>`
    finalizardados.innerHTML +=`<p>Somando todos os valores <strong>${soma}</strong></p> `
    finalizardados.innerHTML +=`<p>A media dos valores digitado é <strong>${media}</strong></p> `
    }
}

/*

function fazer(){
    
    let num = Number(numero.value); // convertendo o valor digitado para numero, embora como definimos o imput como numero, imagino** que já converta automaticamente.
    numerosInseridos.push(num)

    if(numero.value.length == 0){
        
        return alert('Erro, voce precisa digitar um numero!')// caso o campo fique em branco
        
    }else if(num > 100){
        
        return alert('valor maior que 100, não podemos adicionar')
    }res.innerHTML = null; // arranca o texto inserido
    finalizardados.innerHTML= null ;

    console.log(numerosInseridos); //verificando se foi inserido no array

    //Feito caralho, era loop mesmo que faltava e corrigi o erro!
    for(unid in numerosInseridos){
    let numeroAdicionado = document.createElement('option');
    numeroAdicionado.text += `O ${numerosInseridos[unid]} foi adicionado  `;
    numeroAdicionado.value += `res${numerosInseridos[unid]}`
    res.appendChild(numeroAdicionado)
    }    
         
    numero.value='';
    
    }

function finalizar(){
    
    if(numerosInseridos.length == 0){ // tinha deixado como menos de um e ele colocou igual a 0
        alert('Erro, insira valores no sistema!')
    } else {

    let totalitens = numerosInseridos.length; // tinha pensado em fazer isso no começo kkk

    let max = numerosInseridos.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity);

    let min = numerosInseridos.reduce(function(a, b) {
        return Math.min(a, b);
      }, +Infinity);


    //console.log(min, max)// verificacao

    let soma = numerosInseridos.reduce(function(soma, i) {
        return soma + i;
    });

    let media =  soma/totalitens;

    finalizardados.innerHTML = `<p>Ao todo, temos <strong>${totalitens}</strong> numeros cadastrados</p>\n`

    finalizardados.innerHTML += `<p>O maior valor informado foi <strong>${max}</strong></p>`
    finalizardados.innerHTML +=`<p>O menor informado foi <strong>${min}</strong></p>`
    finalizardados.innerHTML +=`<p>Somando todos os valores <strong>${soma}</strong></p> `
    finalizardados.innerHTML +=`<p>A media dos valores digitado é <strong>${media}</strong></p> `
    }
}
*/
