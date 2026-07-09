/**
 * Organiza y agrupa una lista de peleadores de kickboxing según su categoría de peso.
 * @param {Array} peleadores - Arreglo de objetos con los datos de los atletas (nombre, pesoKg).
 * @returns {Object} - Objeto con las listas organizadas por categorías o reporte de error.
 */
function organizarPeleadoresKickboxing(peleadores) {
    // 1. Validación preventiva de la entrada
    if (!peleadores || !Array.isArray(peleadores) || peleadores.length === 0) {
        return {
            accion: "cancelar emparejamientos",
            motivo: "No hay peleadores registrados en la lista para organizar."
        };
    }

    // 2. Inicialización de los contenedores (acumuladores de listas)
    const organizacion = {
        pesoLigero: [],
        pesoMedio: [],
        pesoPesado: []
    };

    // 3. Ciclo de clasificación según reglas de negocio basadas en el peso
    peleadores.forEach(peleador => {
        const peso = peleador.pesoKg;

        if (peso < 65) {
            organizacion.pesoLigero.push(peleador.nombre);
        } else if (peso >= 65 && peso <= 80) {
            organizacion.pesoMedio.push(peleador.nombre);
        } else if (peso > 80) {
            organizacion.pesoPesado.push(peleador.nombre);
        }
    });

    return organizacion;
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Lista con múltiples peleadores distribuidos en diferentes pesos
const listaInscritos = [
    { nombre: "Carlos Mendoza", pesoKg: 62 },
    { nombre: "Daniela Ruiz", pesoKg: 74 },
    { nombre: "Andrés Silva", pesoKg: 85 },
    { nombre: "Sofía Gómez", pesoKg: 68 }
];

console.log("--- Caso Normal ---");
console.log(organizarPeleadoresKickboxing(listaInscritos));

// 2. Caso Borde: Lista completamente vacía sin atletas inscritos
console.log("\n--- Caso Borde ---");
console.log(organizarPeleadoresKickboxing([]));