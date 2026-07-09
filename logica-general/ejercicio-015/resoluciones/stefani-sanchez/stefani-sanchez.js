// Logica general 015 - Reglas de negocio
// Dibujo digital

// Entradas
const proyectos = [
    { cliente: "Carlos", formato: "PNG", resolucion: 300 },
    { cliente: "Ana", formato: "JPG", resolucion: 150 },
    { cliente: "Luis", formato: "PSD", resolucion: 300 }
];

// Función para validar las reglas de negocio
function validarProyectos(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {
        return "No hay proyectos registrados.";
    }

    const resultados = [];

    for (const proyecto of lista) {

        if (proyecto.formato !== "PNG" && proyecto.formato !== "JPG") {
            resultados.push(`${proyecto.cliente}: Formato no permitido.`);
        } else if (proyecto.resolucion < 300) {
            resultados.push(`${proyecto.cliente}: Resolucion insuficiente.`);
        } else {
            resultados.push(`${proyecto.cliente}: Proyecto aprobado.`);
        }
    }

    return resultados;
}

// Prueba normal
console.log("Prueba 1:");
console.log(validarProyectos(proyectos));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(validarProyectos([]));