var res = document.querySelector('p#clicou')
var contador = 0

function contar(){
    contador ++
    res.innerHTML =`Você deu ${contador} clicks`
                    
    

}
function zerar(){
    contador = 0
    res.innerHTML= null


}


