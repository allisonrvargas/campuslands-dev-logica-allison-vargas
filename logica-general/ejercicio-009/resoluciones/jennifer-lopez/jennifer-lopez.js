
let peli = "El Conjuro";
let espectador = "asustado";

let modoPantalla = "";
let accion = "";


if (espectador === "durmiendo") {
    modoPantalla = "Modo Apagado";
    accion = "Apagar la pantalla y el sonido por completo.";
} else if (espectador === "asustado") {
    modoPantalla = "Modo Seguro";
    accion = "Encender luces tenues y bajar volumen.";
} else {
    modoPantalla = "Modo Cine";
    accion = "Mantener luces apagadas y sonido a tope.";
}


console.log("modoPantalla:", modoPantalla);
console.log("accion:", accion);