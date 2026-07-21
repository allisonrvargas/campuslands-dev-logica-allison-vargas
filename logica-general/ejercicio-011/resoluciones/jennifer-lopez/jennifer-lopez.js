let pesosInscritos = [65, 82, 70, 90, 58];

let totalLigeros = 0;
let totalPesados = 0;
let mensaje = "";


if (pesosInscritos.length === 0) {
    mensaje = "Error: No hay peleadores inscritos en la lista para organizar.";
} else {
    for (let i = 0; i < pesosInscritos.length; i++) {
        let pesoActual = pesosInscritos[i];
        if (pesoActual < 70) {
            totalLigeros = totalLigeros + 1; 
        } else {
            totalPesados = totalPesados + 1; 
        }
    }

    mensaje = "Lista organizada: salieron " + totalLigeros + " de peso ligero y " + totalPesados + " de peso pesado.";
}

console.log("totalLigeros:", totalLigeros);
console.log("totalPesados:", totalPesados);
console.log("mensaje:", mensaje);