// Logica general 017 - Tablas de decision
// Arquitectura 3D

// Entradas
const proyectos = [
    { nombre: "Casa Moderna", presupuesto: 60000, terreno: true },
    { nombre: "Edificio", presupuesto: 30000, terreno: true },
    { nombre: "Villa", presupuesto: 80000, terreno: false }
];

// Funcion para aplicar la tabla de decision
function evaluarProyectos(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay proyectos registrados.";
    }

    const resultados = [];

    for (const proyecto of lista) {

        if (proyecto.presupuesto >= 50000 && proyecto.terreno) {
            resultados.push(`${proyecto.nombre}: Proyecto aprobado.`);
        } else if (proyecto.presupuesto < 50000) {
            resultados.push(`${proyecto.nombre}: Presupuesto insuficiente.`);
        } else {
            resultados.push(`${proyecto.nombre}: No existe un terreno disponible.`);
        }
    }

    return resultados;
}

// Prueba normal
console.log("Prueba 1:");
console.log(evaluarProyectos(proyectos));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(evaluarProyectos([]));