const estados = ["suspenso", "susto", "final"];
const ambiente = "oscuro";

let accion = "continuar visualizacion";
let motivo = "el ambiente es seguro para ver la pelicula.";

let haySusto = false;
for (let i = 0; i < estados.length; i++) {
    if (estados[i] === "susto") {
        haySusto = true;
    }
}

if (ambiente === "oscuro" && haySusto) {
    accion = "activar modo supervivencia";
    motivo = "el ambiente oscuro potencia el impacto del susto.";
}

console.log("accion:", accion);
console.log("motivo:", motivo);