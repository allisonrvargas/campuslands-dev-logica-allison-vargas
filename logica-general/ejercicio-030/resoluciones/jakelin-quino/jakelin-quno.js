const destino = "Francia";
const requiereVisa = true;
const tieneVisa = false;

let estado = "";
let mensaje = "";

if (requiereVisa === true && tieneVisa === false) {
    estado = "bloqueado";
    mensaje = "No se puede viajar: se requiere visa obligatoria.";
} else {
    estado = "aprobado";
    mensaje = "El itinerario está listo para el viaje.";
}

console.log("estado:", estado);
console.log("mensaje:", mensaje);