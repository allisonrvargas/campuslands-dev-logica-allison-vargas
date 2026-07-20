let canciones = 10;
let incremento = 3;

let secuencia = [];

for (let i = 1; i <= canciones; i++) {
    secuencia.push(i * incremento);
}

let ultimoValor = secuencia[secuencia.length - 1];

let estado = "";

if (ultimoValor >= 30 && canciones >= 10) {
    estado = "playlist completa";
} else if (ultimoValor >= 20) {
    estado = "playlist intermedia";
} else {
    estado = "playlist corta";
}

let explicacion = "se genero una secuencia numerica con un incremento constante y se evaluaron el ultimo valor y la cantidad de canciones.";

console.log("secuencia:", secuencia);
console.log("ultimo_valor:", ultimoValor);
console.log("estado:", estado);
console.log("explicacion:", explicacion);