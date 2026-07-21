function procesarPipeline(assets) {
    if (!assets || assets.length === 0) {
        return { accion: "error", motivo: "La lista de assets está vacía." };
    }

    if (assets.includes("bloqueado")) {
        return { accion: "revisar bloqueado", motivo: "La regla prioriza riesgos antes de tareas normales." };
    }

    if (assets.includes("pendiente")) {
        return { accion: "procesar pendiente", motivo: "No hay bloqueos, se procede con la producción." };
    }

    return { accion: "finalizado", motivo: "Todos los assets han sido aprobados." };
}

const assetsEjemplo = ["aprobado", "pendiente", "bloqueado"];
console.log(procesarPipeline(assetsEjemplo));