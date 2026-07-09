let nivelesAceite = [3.5, 4.2, 2.8, 5.0, 3.2];
let limiteMinimo = 3.0;

let nivelMinimoEncontrado = Math.min(...nivelesAceite);

let estadoTaller = "";
if (nivelMinimoEncontrado < limiteMinimo) {
    estadoTaller = "alerta: vehiculos en riesgo";
} else {
    estadoTaller = "operativo: niveles seguros";
}

console.log("nivel_minimo_detectado:", nivelMinimoEncontrado);
console.log("estado:", estadoTaller);