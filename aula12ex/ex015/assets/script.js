function verificar(){
    var data = new Date() // aqui estamos declarando a função date na variavel data
    var ano = data.getFullYear() // aqui estamos usando a variavel data com o a função date e pegando com o valor ano cheio
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div.res')
    //Preciso procurar informações sobre o length, ele existe no python e serve para contar os itens, aqui não entendi direito a função 
   
    /*Vamos criar uma tag que não existe em nosso arquivo html, para isso usamos o createElement e colocamos a tag dentro do parametro*/
    var img = document.createElement('img')
    /*Depois vamos definir os atributos dessa tag*/
    img.setAttribute('id', 'foto')


    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('erro')
    }else{
        /*Usamos o get element by name para pegar o nome do radio sex*/
        var fsex = document.getElementsByName('radsex')
        // sempre convertendo o valor do fano em numero
        var idade = ano - Number(fano.value)
        /*
        Sempre vá verificando seu codigo, pois assim é mais facil de saber onde você errou.

        res.innerHTML =`Idade calculada ${idade}`
        */
        var genero = ''

        if (fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 12){
                // criança
                //SET ATRIBUTE PARA COLOCAR OS ATRIBUTOS, A INFORMAÇÃO
                img.setAttribute('src', 'img/meninomini.PNG')
            }else if(idade < 21){
                // adolescente
                img.setAttribute('src', 'img/jovemhmini.PNG')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'img/adulthmini.PNG')
            }else{
                //idoso
                img.setAttribute('src', 'img/oldhmini.PNG')
            }

            



        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'img/meninamini.PNG')
            }else if(idade < 21){
                // adolescente
                img.setAttribute('src', 'img/jovemmmini.PNG')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'img/adultmmini.PNG')
            }else{
                //idoso
                img.setAttribute('src', 'img/oldmmini.PNG')
            }





        }
        res.style.textAlign = 'center' // alteramos o style do res.
        res.innerHTML = `<p>Detectamos ${genero} com idade ${idade} anos.</p>`
        // o appendchild coloca embaixo do que esta a cima como se fosse uma filha, herdando todas as coisas anteriores a ela.
        res.appendChild(img)
    }

}