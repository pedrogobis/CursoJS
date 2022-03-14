/*var res = document.querySelector('#res');
var data = new Date();
var dia = data.getDay();
var mes = data.getMonth();
var dsem = data.getDate();
var hr = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();
*/





function clicou(){
    var meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    var semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    var agora = new Date
    var res = document.querySelector('#res'); // Erro no meu codigo estava aqui. eu não tinha selecionado corretamente.
    var dia = agora.getDate()
    var mes = agora.getMonth() 
    var ano = agora.getFullYear()
    var sem = agora.getDay()  
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds() 

    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    // ele criou um array com os nomes do ano, e aqui na hora de executar ele colocu a variavel meses(a variavel do array) com a posição da variavel mes(numero referente ao mes)
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>` 
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    // aqui a mesma coisa 
    res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}