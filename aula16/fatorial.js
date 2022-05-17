function fatorial(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
//5! = 5x4x3x2x1 = 120
// não faço a minima ideia do que seja fatorial!
console.log(fatorial(5))