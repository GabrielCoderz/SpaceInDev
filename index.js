let numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
let n = 0

function numRomanos(num){
    let qtd = num.length

    for(let i = 0; i<qtd; i++){
        let atual = num[i];
        let prox = num[i+1];
        
        
        if(prox && numerosRomanos[prox] > numerosRomanos[atual]){
            n -= numerosRomanos[atual]
        } else {
            n += numerosRomanos[atual]
        }

        
    }

    return console.log(n);
}

let num = 'V'
numRomanos(num)