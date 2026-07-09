let puntajes = [72, 85, 90, 78, 88];

let mayor = puntajes[0];
let menor = puntajes[0];

for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] > mayor) {
        mayor = puntajes[i];
    }

    if (puntajes[i] < menor) {
        menor = puntajes[i];
    }
}

let puntaje = puntajes[2];
let puntajeNormalizado = (puntaje - menor) / (mayor - menor);

let categoria = "";

if (puntajeNormalizado >= 0.8) {
    categoria = "alto rendimiento";
} else {
    categoria = "rendimiento estandar";
}

let explicacion = "se normalizo un puntaje utilizando los valores minimo y maximo del conjunto.";

console.log("puntaje_normalizado:", puntajeNormalizado);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);