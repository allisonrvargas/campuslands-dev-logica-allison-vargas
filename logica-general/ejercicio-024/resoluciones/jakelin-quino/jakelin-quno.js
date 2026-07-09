const modelo = "Sport 600";
const kilometraje = 5000;
const estado = "usada";

let accion = "";
let motivo = "";

if (estado === "nueva" || kilometraje < 10000) {
    accion = "poner a la venta";
    motivo = "La moto cumple con los estandares de calidad.";
} else {
    accion = "enviar a mantenimiento";
    motivo = "El kilometraje es muy alto para la venta directa.";
}

console.log("accion:", accion);
console.log("motivo:", motivo);