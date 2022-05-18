let amigo = {
    nome:'fernando',
    sexo:'M',
    peso: 64.8,
    engordar(p=0){// funcao já pode ser chamada na frenet 
        console.log('engordou')
        this.peso += p
    }
    }
    
    amigo.engordar(2)

    console.log(`${amigo.nome} pesa ${amigo.peso}`)