function clicou(){
    let res = document.querySelector('#res');
    let numentrada = document.querySelector('#num');
              
    if(numentrada.value.length == 0){
        alert('Erro - Voce precisa digitar um numero!')
    }else{
        
        let nun = Number(numentrada.value);
       
        res.innerHTML = null; 
        /**
         * 
         * Fazendo o mesmo excercicio, porém dessa vez com o for, parece mais simples.
         * 
         * 
         * 
         */
        for(let c = 1; c <= 10;c++){
            let item = document.createElement('option')
            
            item.text =`${nun} X ${c} = ${nun * c}`
           
            item.value =`res${c}`
          
            res.appendChild(item)
        }
      


        
    }
}