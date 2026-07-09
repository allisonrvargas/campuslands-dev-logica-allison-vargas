//Reto 021: Clasificación por reglas - Videojuegos competitivos

function clasificarReglasVideojuegos(items, prioridad, regla) {
    // 1. Casos Borde Estructurales Estrictos
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "recalibrar emparejamiento",
            motivo: "La lista de jugadores o estados de la sala se encuentra vacía o inválida."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar servidor",
            motivo: "No se especificaron los metadatos obligatorios de prioridad o regla de emparejamiento."
        };
    }

    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Mapeo a Set para lookup inmediato O(1)
    const setJugadores = new Set(items.map(item => String(item).toLowerCase().trim()));
    const tieneBloqueado = setJugadores.has("bloqueado");
    const tienePendiente = setJugadores.has("pendiente");

    // 3. Matriz de Decisiones Simétrica de Emparejamiento
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "recalibrar emparejamiento",
            motivo: "Alerta de seguridad: Se detectaron cuentas de jugador o estados de sala bloqueados en la cola."
        };
    }

    if (tienePendiente) {
        return {
            accion: "asignar cola de baja prioridad",
            motivo: "Se detectaron usuarios con estados pendientes o solicitudes de emparejamiento en espera."
        };
    }

    // 4. Flujo Óptimo Seguro
    return {
        accion: "iniciar partida",
        motivo: "Todos los competidores han verificado su estado y la sala cumple las reglas de emparejamiento."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 021 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción de Cuenta Baneada (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Lista Estructural Vacía",
        items: [], prioridad: "alta", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(clasificarReglasVideojuegos(items, prioridad, regla), null, 2));
});