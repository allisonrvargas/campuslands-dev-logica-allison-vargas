let duraciones = [180, 210, 240, 270];

function esSecuenciaAritmetica(arr) {
    if (arr.length < 2) return true;
    let diferencia = arr[1] - arr[0];
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diferencia) {
            return false;
        }
    }
    return true;
}

let resultado = esSecuenciaAritmetica(duraciones);

console.log("playlist:", duraciones);
console.log("tipo_secuencia:", resultado ? "aritmética constante" : "aleatoria/variable");