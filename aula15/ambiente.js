let num = []
let nomes = ['marcos', 'fernando', 'claudio', 'marta', 'lucas']

num.push(32)
num[1] = 14
num[2] = 15

// relembrando comandos basicos
console.log(`numeros ${num[2]}`)
console.log(num.length)
console.log(num.sort())
console.log(nomes)
console.log(nomes.length)
console.log(nomes[3])
console.log(nomes[3].length)
console.log(nomes.sort())

// for basico muito utilizado, porém existe tbm o foreach que é tao interessante quanto. for in também
for(let i= 0; i <= nomes.length ;i++){ // percurso no vetor
    console.log(nomes[i])
}

// exemplo com o for in
for(let nome in nomes){ // serve para arrays e objects
    console.log(nomes[nome])
}

// indexOf = procurar o valor do indice  e retornar o indice do valor
let indicede = num.indexOf(15) // pra usar colocamos em uma variavel
// se  eu buscar por um valor que não existe dentro do array ele retorna o -1
//console.log(index)

if(indicede == -1){
    //return 'Esse valor é invalido' // return aqui não funcionou pois só posso usar return em uma funcao, caso contrario ela não funciona, então vamos usar o classico console.log
    console.log('esse valor que voce colocou é invalido')
}else{
    console.log(indicede)
}