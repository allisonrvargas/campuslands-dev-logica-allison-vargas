let pelicula = "Crímenes de tiempo";
let pasoActual = "procesando audio";

let accion = "";
let motivo = "";

if (pasoActual === "descargando") {
    accion = "esperar";
    motivo = "Aun se estan bajando los datos de la pelicula. Espera a que termine la descarga.";
} else if (pasoActual === "procesando audio") {
    accion = "pasar a listo";
    motivo = "El audio ya se proceso, la pelicula ya puede empezar. Preparate para verla.";
} else {
    accion = "reproducir";
    motivo = "La pelicula esta lista en pantalla.Dsfruta de la pelicula.";
}

console.log("pelicula:", pelicula);
console.log("pasoActual:", pasoActual);
console.log("accion:", accion);
console.log("motivo:", motivo);