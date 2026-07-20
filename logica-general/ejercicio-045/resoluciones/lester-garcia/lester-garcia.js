const reparaciones = [
    { vehiculo: "Sedan", prioridad: "media", urgente: false },
    { vehiculo: "Camioneta", prioridad: "alta", urgente: true },
    { vehiculo: "Motocicleta", prioridad: "alta", urgente: false },
    { vehiculo: "Pickup", prioridad: "baja", urgente: false }
];

let siguienteTrabajo = "";
let motivo = "";

// Buscar primero una reparación urgente
for (let i = 0; i < reparaciones.length; i++) {
    if (reparaciones[i].urgente) {
        siguienteTrabajo = reparaciones[i].vehiculo;
        motivo = "Es una reparación marcada como urgente.";
        break;
    }
}

// Si no hay urgentes, buscar la primera de prioridad alta
if (siguienteTrabajo === "") {
    for (let i = 0; i < reparaciones.length; i++) {
        if (reparaciones[i].prioridad === "alta") {
            siguienteTrabajo = reparaciones[i].vehiculo;
            motivo = "Es la primera reparación con prioridad alta.";
            break;
        }
    }
}

// Si no existe ninguna prioridad alta, tomar la primera disponible
if (siguienteTrabajo === "") {
    siguienteTrabajo = reparaciones[0].vehiculo;
    motivo = "No existen trabajos urgentes ni de prioridad alta.";
}

console.log("siguienteTrabajo:", siguienteTrabajo);
console.log("motivo:", motivo);