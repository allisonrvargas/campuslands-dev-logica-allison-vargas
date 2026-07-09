function clasificar(items, prioridad, regla) {

    if (items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "La regla prioriza riesgos antes de tareas normales."
        };
    }

    if (items.includes("pendiente")) {
        return {
            accion: "revisar pendiente",
            motivo: "No existen elementos bloqueados."
        };
    }

    return {
        accion: "sin acciones",
        motivo: "Todos los elementos están aprobados."
    };
}

const items = ["aprobado", "pendiente", "bloqueado"];

const resultado = clasificar(
    items,
    "alta",
    "revisar bloqueados primero"
);

console.log(resultado);