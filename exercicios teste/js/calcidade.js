var res = document.querySelector('#res');
var data = new Date;
var ano = data.getFullYear();

function clicou(){
    var anoid = Number(prompt('Em que ano você nasceu?'))
    var ano1 = Number(ano);
    

    var anoatual = ano1 - anoid;
    
    res.innerHTML = `<p>Quem nasceu em ${anoid} vai completar <strong>${anoatual}</strong> anos em ${ano}</p>`

}