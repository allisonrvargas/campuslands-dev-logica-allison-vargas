let lienzos = [1200, 4500, 800, 3000];
let lienzosPremium = 0;
let mensaje = "";
let archivoCorrupto = false;

for (let i = 0; i < lienzos.length; i++) {
    if (lienzos[i] <= 0) {
        archivoCorrupto = true;
        break;
    }
    if (lienzos[i] > 2000) {
        lienzosPremium++; // Acumulador
    }
}

if (archivoCorrupto) {
    mensaje = "Error de negocio: Hay un archivo corrupto con resolucion de 0 pixeles.";
    lienzosPremium = 0;
} else {
    mensaje = "Regla de negocio aplicada: Tienes " + lienzosPremium + " lienzos en categoria Premium.";
}


console.log("lienzosPremium:", lienzosPremium);
console.log("mensaje:", mensaje);