let puntajes = [45, 80, 60];
let maximosPosibles = [50, 100, 80];

let puntajesNormalizados = [];

for (let i = 0; i < puntajes.length; i++) {
    let normalizado = (puntajes[i] / maximosPosibles[i]) * 100;
    puntajesNormalizados.push(normalizado.toFixed(2));
}

console.log("puntajes_normalizados:", puntajesNormalizados);

let suma = puntajesNormalizados.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
let promedio = suma / puntajesNormalizados.length;

if (promedio >= 80) {
    console.log("nivel: certificado experto");
} else {
    console.log("nivel: requiere capacitacion");
}