let alturas = [1500, 900, 1200, 850];
let casosRiesgo = 0;
let mensaje = "";
let errorSensor = false;

for (let i = 0; i < alturas.length; i++) {
    if (alturas[i] <= 0) {
        errorSensor = true;
        break;
    }
    if (alturas[i] < 1000) {
        casosRiesgo++; 
    }
}

if (errorSensor) {
    mensaje = "Error: Se encontro un valor de altura imposible en los registros.";
    casosRiesgo = 0;
} else {
    mensaje = "Analisis terminado. Se detectaron " + casosRiesgo + " casos de riesgo por apertura baja.";
}


console.log("casosRiesgo:", casosRiesgo);
console.log("mensaje:", mensaje);