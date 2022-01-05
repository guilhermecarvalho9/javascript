function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) //Uso da função dentro dela mesma = RECURSIVIDADE
    }
}

console.log(fatorial(4))