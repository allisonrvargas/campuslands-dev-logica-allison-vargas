let cancion = "Plan A";
let duracion = 180; 

let estado = "";
let motivo = "";


if (duracion <= 0) {
    estado = "inconsistencia";
    motivo = "Error: Una cancion no puede durar cero segundos o menos.";
} else {
    estado = "valido";
    motivo = "La pista se puede reproducir sin problemas.";
}

console.log("cancion:", cancion);
console.log("duracion:", duracion);
console.log("estado:", estado);
console.log("motivo:", motivo);