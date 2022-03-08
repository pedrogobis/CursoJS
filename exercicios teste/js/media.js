var res = document.querySelector('p#res')

function clicou(){
    var nome = window.prompt('Qual o nome do aluno?')
    var nota1 = Number(prompt('Digite a primeira nota do aluno'))
    var nota2 = Number(prompt('Digite a segunda nota do aluno'))
    var media = (nota1 + nota2) / 2

    res.innerHTML =`<p>A media final do ${nome} foi :</p>`
    res.innerHTML += `<p>As nota nas A1 foi: ${nota1} e na A2 foi: ${nota2}</p> `
    res.innerHTML += `<p>A media final vai ser ${media}</p>`
    
    if (media >= 7){
        res.innerHTML += `<hr>`
        res.innerHTML += `<p class="pass">Parabens você passou de ano</p>`
        

    }else{
        res.innerHTML += `<hr>`
        res.innerHTML += `<p class="rep">Voce ficou de DP.</p>`
    }
}