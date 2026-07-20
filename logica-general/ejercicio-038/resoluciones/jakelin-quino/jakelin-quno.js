let tipoSoldadura = "especializada"; // "basica", "avanzada", "especializada"
let operarioDisponible = true;

function asignarTurno(tipo, disponible) {
    if (!disponible) {
        return "Acción: Esperar turno. Motivo: No hay operarios disponibles.";
    }
    
    switch (tipo) {
        case "basica":
            return "Acción: Turno asignado a operario Junior.";
        case "avanzada":
            return "Acción: Turno asignado a operario Senior.";
        case "especializada":
            return "Acción: Turno asignado a Maestro Soldador.";
        default:
            return "Acción: Consultar supervisor. Motivo: Tipo de soldadura desconocido.";
    }
}

console.log(asignarTurno(tipoSoldadura, operarioDisponible));