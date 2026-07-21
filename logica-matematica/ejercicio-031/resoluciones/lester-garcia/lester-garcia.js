let golpesDirectos = 6;
let golpesCirculares = 5;
let tecnicasEspeciales = 2;

let combinaciones = golpesDirectos * golpesCirculares;

let totalCombinaciones = combinaciones + tecnicasEspeciales;

let categoria = "";

if (totalCombinaciones >= 30 && tecnicasEspeciales >= 2) {
    categoria = "estrategia avanzada";
} else if (totalCombinaciones >= 20) {
    categoria = "estrategia intermedia";
} else {
    categoria = "estrategia basica";
}

let explicacion = "se calcularon las combinaciones posibles y se evaluo la cantidad de tecnicas especiales para determinar la categoria.";

console.log("combinaciones:", combinaciones);
console.log("total_combinaciones:", totalCombinaciones);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);