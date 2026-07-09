let calificaciones = [10, 9, 8, 9, 10];

let patron = "";

for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 9) {
        patron += "A";
    } else if (calificaciones[i] >= 7) {
        patron += "B";
    } else {
        patron += "C";
    }
}

let categoria = "";

if (patron.startsWith("AA") && patron.endsWith("A")) {
    categoria = "obra maestra";
} else if (patron.includes("AAA")) {
    categoria = "muy recomendada";
} else {
    categoria = "recomendada";
}

let explicacion = "se genero un patron de puntuacion y se evaluaron varias condiciones sobre la secuencia obtenida.";

console.log("patron:", patron);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);