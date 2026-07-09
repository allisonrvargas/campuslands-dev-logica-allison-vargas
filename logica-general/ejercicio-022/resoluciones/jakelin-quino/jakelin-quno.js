const golesFavor = 15;
const golesContra = 20;

let estado = "";
let mensaje = "";

if (golesFavor < 0 || golesContra < 0) {
    estado = "invalido";
    mensaje = "Los goles no pueden ser negativos.";
} else if (golesFavor > golesContra) {
    estado = "ganador";
    mensaje = "El equipo tiene diferencia positiva.";
} else {
    estado = "perdedor";
    mensaje = "El equipo necesita mejorar la defensa.";
}

console.log("estado:", estado);
console.log("mensaje:", mensaje);