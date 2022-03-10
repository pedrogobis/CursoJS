var res = document.querySelector('#res');
// Pega toda a informação da data do sistema
var data = new Date();
// var hrdta = data.getHours() - aqui pega um dado especifico no sisteama.

function clicou(){
    res.innerHTML = `Agora são exatamente <mark>${data}!</mark>`
}