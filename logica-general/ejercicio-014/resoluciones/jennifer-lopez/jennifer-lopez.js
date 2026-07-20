let inventario = ["ok", "ok", "usada", "ok", "usada"];
let erroresDetectados = 0;
let mensaje = "";

if (inventario.length === 0) {
    mensaje = "Alerta: El inventario de herramientas esta completamente vacio.";
} else {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i] === "usada") {
            erroresDetectados++;
        }
    }
    mensaje = "Diagnostico: Se encontraron " + erroresDetectados + " agujas usadas que deben ser descartadas.";
}

console.log("erroresDetectados:", erroresDetectados);
console.log("mensaje:", mensaje);