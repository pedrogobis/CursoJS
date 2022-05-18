let res = document.querySelector('#res');
let numero = document.querySelector('#inputnumero');
let finalizardados = document.querySelector('#resultadoFinalizar')
let numerosInseridos = [];
//definindo a variavel do array como global, consegui corrigir o problema de substituição de numeros, agora está funcionando 

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
    
    if(numerosInseridos.length < 1){
        alert('Erro, insira valores no sistema!')
    }

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

    let media =  soma/numerosInseridos.length

    finalizardados.innerHTML = `<p>Ao todo, temos <strong>${numerosInseridos.length}</strong> numeros cadastrados</p>\n`

    finalizardados.innerHTML += `<p>O maior valor informado foi <strong>${max}</strong></p>`
    finalizardados.innerHTML +=`<p>O menor informado foi <strong>${min}</strong></p>`
    finalizardados.innerHTML +=`<p>Somando todos os valores <strong>${soma}</strong></p> `
    finalizardados.innerHTML +=`<p>A media dos valores digitado é <strong>${media}</strong></p> `
}

