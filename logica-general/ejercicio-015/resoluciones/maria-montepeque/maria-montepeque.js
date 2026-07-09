//Reto 015: Reglas de negocio - Dibujo digital

function procesarReglasDibujoDigital(items, prioridad, regla) {
    // 1. Casos Borde Estructurales
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: "crear lienzo nuevo",
            motivo: "El proyecto no contiene capas o elementos válidos para ser procesados."
        };
    }
    if (!prioridad || !regla) {
        return {
            accion: "revisar specifications",
            motivo: "Faltan parámetros indispensables (prioridad o regla) para exportar el proyecto."
        };
    }

<<<<<<< HEAD
=======
    // Sanitización hermética de tipos en la cabecera
>>>>>>> upstream/dev
    const reglaLimpia = String(regla).toLowerCase().trim();
    const prioridadLimpia = String(prioridad).toLowerCase().trim();

    // 2. Indexación Analítica O(N): Lookup instantáneo O(1) vía Set nativo
    const setCapas = new Set(items.map(capa => String(capa).toLowerCase().trim()));
    const tieneBloqueado = setCapas.has("bloqueado");
    const tienePendiente = setCapas.has("pendiente");

    // 3. Matriz de Decisiones Simétrica de Control de Flujo de Trabajo
    if (tieneBloqueado && prioridadLimpia === "alta" && reglaLimpia === "revisar bloqueados primero") {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (tieneBloqueado) {
        return {
            accion: "revisar especificaciones",
            motivo: "Alerta de integridad: Se detectaron capas o assets bloqueados que impiden la compilación segura del archivo."
        };
    }

    if (tienePendiente) {
        return {
            accion: "renderizar bocetos",
            motivo: "Se detectaron capas pendientes que deben ser consolidadas antes de la entrega final."
        };
    }

    // 4. Flujo de Exportación Limpio
    return {
        accion: "exportar ilustracion",
        motivo: "Todas las capas están aprobadas y el archivo base se encuentra listo para entrega."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 015 ---");

const pruebas = [
    {
        tipo: "Caso Ejemplo - Prioridad Alta",
        items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso de Negocio - Intercepción de Bloqueo Inseguro (Prioridad Media)",
        items: ["aprobado", "bloqueado"], prioridad: "media", regla: "revisar bloqueados primero"
    },
    {
        tipo: "Caso Borde - Cabecera Incompleta",
        items: ["pendiente"], prioridad: "", regla: "revisar bloqueados primero"
    }
];

pruebas.forEach(({ tipo, items, prioridad, regla }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(procesarReglasDibujoDigital(items, prioridad, regla), null, 2));
});