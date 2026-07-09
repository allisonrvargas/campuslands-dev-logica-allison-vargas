function analizarPatronPuntuacion(puntuaciones) {
    if (puntuaciones.length < 2) return "Datos insuficientes";

    let creciente = true;
    let decreciente = true;

    for (let i = 0; i < puntuaciones.length - 1; i++) {
        if (puntuaciones[i] < puntuaciones[i + 1]) decreciente = false;
        if (puntuaciones[i] > puntuaciones[i + 1]) creciente = false;
    }

    if (creciente) return "Patrón creciente: éxito constante";
    if (decreciente) return "Patrón decreciente: interés decayendo";
    return "Patrón errático: recepción mixta";
}

const peliculaA = [6, 7, 8, 9];
const peliculaB = [9, 8, 5, 2];
const peliculaC = [7, 9, 6, 8];

console.log(analizarPatronPuntuacion(peliculaA));
console.log(analizarPatronPuntuacion(peliculaB));
console.log(analizarPatronPuntuacion(peliculaC));