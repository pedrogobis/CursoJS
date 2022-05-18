let res = document.querySelector('#res');
let numero = document.querySelector('#inputnumero');
let numerosInseridos = [];
//definindo a variavel do array como global, consegui corrigir o problema de substituição de numeros, agora está funcionando 

function fazer(){
    let num = Number(numero.value); // convertendo o valor digitado para numero, embora como definimos o imput como numero, imagino** que já converta automaticamente.
    numerosInseridos.push(num)

    if(numero.value.length == 0){
        alert('Erro, voce precisa digitar um numero!')// caso o campo fique em branco
    }else if(num > 100){
        return
    }
        
        
        res.innerHTML = null; // arranca o texto inserido

        
        
        console.log(numerosInseridos);
        
        
           
            let numeroAdicionado = document.createElement('option');
            res.appendChild(numeroAdicionado)
            numeroAdicionado.text = `O ${num} foi adicionado  `;
            numeroAdicionado.value = `res${num}`
        
        /*
        

        //para corrgir o problema provavelmente vou precisar usar um for, agora qual? i don't Know no moment.
        
       */
       

        
    
        

    }


function finalizar(){
    let finalizardados = document.querySelector('#resultadoFinalizar')

    var max = Math.max(numerosInseridos);
    var min = Math.min(numerosInseridos);
    var soma = numerosInseridos.reduce(function(soma, i) {
        return soma + i;
    });

    finalizardados.innerHTML = `Ao todo, temos ${numerosInseridos.length} cadastrados\n`

    finalizardados.innerHTML += `O maior valor informado foi ${max}\n`
    finalizardados.innerHTML +=`O menor informado foi ${min}`
    finalizardados.innerHTML +=`Somando todos os valores ${soma} `
    finalizardados.innerHTML +=`a media dos valores digitado é `
}

