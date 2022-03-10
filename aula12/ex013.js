var agora = new Date()
var diaSem = agora.getDay()
/*
Dias no js
0 - Domin
1 - Seg
2 - Ter
3 - Quar
4 - Quinta
5 - Sex
6 - Sab



*/

//console.log(diaSem)

/* o que entra no switch é expressão e não condição, então tenho que ficar esperto nisso, o switch vai meio que tratar um valor. 

se for testar intervalos é mais interessante o switch
valores pontuais
só funciona com strings e inteiros.
por isso ele é meio limitado
*/
switch(diaSem){
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sabado')
        break
    Default:
        console.log('Quebramos o tempo')
        break
   


}