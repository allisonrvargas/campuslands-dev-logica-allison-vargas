let tiemposSustos = [10, 20, 30, 45, 50];
let intervaloMaldito = 10;

let sustosIrregulares = 0;
for (let i = 0; i < tiemposSustos.length; i++) {
    if (tiemposSustos[i] % intervaloMaldito !== 0) {
        sustosIrregulares++;
    }
}

if (sustosIrregulares === 0) {
    console.log("resultado: patron maldito confirmado");
    console.log("mensaje: todos los sustos ocurren en intervalos precisos.");
} else {
    console.log("resultado: patron roto");
    console.log("mensaje: hay sustos que no siguen el intervalo esperado.");
}