function definirPrioridadTaller(esEmergencia, tipoReparacion, esClienteFiel) {
    if (esEmergencia) {
        return { prioridad: "Crítica", accion: "Atención inmediata" };
    }    
    if (tipoReparacion === "motor" || tipoReparacion === "frenos") {
        return { prioridad: "Alta", accion: "Programar para turno de mañana" };
    }
    if (esClienteFiel) {
        return { prioridad: "Media", accion: "Programar en 48 horas" };
    }
    return { prioridad: "Baja", accion: "Programar según disponibilidad" };
}

console.log(definirPrioridadTaller(true, "electrico", false));
console.log(definirPrioridadTaller(false, "mantenimiento", false));