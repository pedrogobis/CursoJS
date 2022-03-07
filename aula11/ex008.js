/*Criamos um arquivo com o js separado, e agora vamos executar os js no console, como não tem arquivo html relacionado usamos o console.*/ 
console.log('O console funcionou corretamente!')

var vel = prompt('qual a sua velocidade atual ')
console.log(`A velocidade do seu carro é ${vel} km/h`)
if(vel > 60){ // condição simples.
    console.log('voce ultrapasou o limite da via, Você acaba de receber uma multinha ^^')
}
console.log('dirija sempre usando cinto de segurança')