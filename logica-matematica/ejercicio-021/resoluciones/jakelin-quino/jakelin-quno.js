let puntajeBase = 1500;
let victoriasConsecutivas = 5;
let faltas = 1;

let bonoRacha = victoriasConsecutivas * 50; 
let penalizacion = faltas * 200;

let puntajeFinal = puntajeBase + bonoRacha - penalizacion;

if (puntajeFinal < 0) {
    puntajeFinal = 0;
}

console.log("puntaje_base:", puntajeBase);
console.log("puntaje_final:", puntajeFinal);