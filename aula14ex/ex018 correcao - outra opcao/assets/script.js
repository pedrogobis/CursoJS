function clicou(){
    let res = document.querySelector('#res');
    let numentrada = document.querySelector('#num');
              
    if(numentrada.value.length == 0){
        alert('Erro - Voce precisa digitar um numero!')
    }else{
        // converteu o nun em numero só dentro do else.
        let nun = Number(numentrada.value);
        let c = 1; // contador começou no 1

        // '' ou null da na mesma.
        res.innerHTML = null; 
        //limpa antes de começar 

        while(c <= 10){
            // criou dinamicamente um campo dentro do option
            let item = document.createElement('option')
            // cada item vai receber o texto, com a seguinte infomração
            item.text =`${nun} X ${c} = ${nun * c}`
            // cada item vai ter esse valor. ** note que ele colocu a variavel e cada item novo vai receber um numero novo também.
            item.value =`res${c}`
            // adiciona itens abaixo de outro, no caso vai adicionar um item embaixo  de no caso o selection e vai herdar as infos.
            res.appendChild(item)
            c++
        }



        
    }
}