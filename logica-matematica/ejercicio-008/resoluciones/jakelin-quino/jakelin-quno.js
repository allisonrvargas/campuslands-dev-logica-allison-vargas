let puntuaciones = [10, 20, 30, 40];
let diferenciaEsperada = 10;

let cumplePatron = true;
for (let i = 0; i < puntuaciones.length - 1; i++) {
    if (puntuaciones[i+1] - puntuaciones[i] !== diferenciaEsperada) {
        cumplePatron = false;
    }
}

if (cumplePatron) {
    console.log("resultado: patron confirmado");
    console.log("mensaje: las puntuaciones crecen de forma constante.");
} else {
    console.log("resultado: patron roto");
    console.log("mensaje: la diferencia entre puntuaciones no es constante.");
}