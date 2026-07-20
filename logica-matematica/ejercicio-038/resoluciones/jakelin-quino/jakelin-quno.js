let puntajes = [60, 80, 90];
let maximoPosible = 100;

let puntajesNormalizados = puntajes.map(p => (p / maximoPosible) * 100);

console.log("Puntajes normalizados:", puntajesNormalizados);