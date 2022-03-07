var idade = 22

console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log(`Não vota.`)

}else if (idade < 18 || idade > 65){ // poso colocar a sentença dentro do proprio if e abrir, assim economiza um bloco, utilizamos o ou também
        console.log(`voto opcional ein otario`)
}else {
    console.log(`Voto obrigatorio vadia`)
}

    
    