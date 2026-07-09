let participantes = [12, 18, 25, 30];
let bono = 8;
let penalizacion = 3;

let suma = 0;
for (let i = 0; i < participantes.length; i++) {
    suma = suma + participantes[i];
}

let puntajeFinal = suma + bono - penalizacion;
let clasificacion = "";

if (puntajeFinal >= 50) {
    clasificacion = "profesional";
} else {
    clasificacion = "competitivo";
}

console.log("puntaje_final:", puntajeFinal);
console.log("clasificacion:", clasificacion);