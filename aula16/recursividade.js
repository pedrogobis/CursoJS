function fatorial(n){
    if( n == 1 ){
        return 1
    }else{
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5))

// recursividade chama dentro da funcao ela mesma com um calculo diferente
// não conhecia o fatorial, dormi na aula de matematica heehehe