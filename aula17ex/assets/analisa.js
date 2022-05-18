let res = document.querySelector('#res');
let numero = document.querySelector('#inputnumero');
let inputlimp = document.querySelector('#inputnumero');
let numerosInseridos = [];
//definindo a variavel do array como global, consegui corrigir o problema de substituição de numeros, agora está funcionando 

function fazer(){
    
    let num = Number(numero.value); // convertendo o valor digitado para numero, embora como definimos o imput como numero, imagino** que já converta automaticamente.
    numerosInseridos.push(num)

    if(numero.value.length == 0){
        alert('Erro, voce precisa digitar um numero!')// caso o campo fique em branco
    }else if(num > 100){
        return
    }res.innerHTML = null; // arranca o texto inserido
    
    console.log(numerosInseridos); //verificando se foi inserido no array

    let numeroAdicionado = document.createElement('option');
    res.appendChild(numeroAdicionado)
    numeroAdicionado.text += `O ${num} foi adicionado  `;
    numeroAdicionado.value += `res${num}`
        
        /*
        

        //para corrgir o problema provavelmente vou precisar usar um for, agora qual? i don't Know no moment.
        
       */
       

        
    
        
    inputlimp.value='';
    
    }


function finalizar(){
    let finalizardados = document.querySelector('#resultadoFinalizar')

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

