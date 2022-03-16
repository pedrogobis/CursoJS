function clicou(){
    var res = document.querySelector('#res');
    var numentrada = document.querySelector('#num');
    var nun = Number(numentrada.value);
    var contador = 0;
    
    // para substituir o atual colque um inner antes de executar a funçao
    
    res.innerHTML =`Tabuada do ${nun}`
    if(numentrada.value.length == 0){
        alert('Erro - Voce precisa digitar um numero!')
        res.innerHTML ='<p class="error">Digite um numero valido, pó &#x1F937</p>'
    }else{
        while(contador <= 10){
            var resultado = contador * nun;
            res.innerHTML +=`<p class="result">${nun} X ${contador} = <strong>${resultado}</strong></p>`
            contador++;
        }



        
    }
}