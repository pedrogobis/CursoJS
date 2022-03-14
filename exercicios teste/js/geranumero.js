var res = document.querySelector('#res');

function clicou(){
    var num = Math.floor(Math.random() *100);

    res.innerHTML += `<p>Acabei de pensar no número <strong>${num}</strong></p>`

}

function limpar(){
    var res = document.querySelector('#res');
    res.innerHTML = null


}