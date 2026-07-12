/**
 * Organiza y clasifica una lista de peleadores de kickboxing según su peso y estado.
 * @param {Array} listaPeleadores - Lista de competidores con su nombre, peso en kg y prioridad de agenda.
 * @returns {Object} - Reporte con la cartelera organizada por categorías.
 */
function organizarCarteleraKickboxing(listaPeleadores) {
    // 1. Validación preventiva de la entrada
    if (!listaPeleadores || !Array.isArray(listaPeleadores) || listaPeleadores.length === 0) {
        return {
            estadoCartelera: "Cancelada",
            motivo: "No hay peleadores registrados en la lista para organizar el evento."
        };
    }

    const carteleraOrganizada = {
        Pluma: [],
        Ligero: [],
        Welter: [],
        Pesado: []
    };

    // 2. Ciclo para evaluar y organizar a cada peleador según las reglas de peso
    listaPeleadores.forEach(peleador => {
        let categoria = "";

        // Regla de clasificación por peso (KG)
        if (peleador.pesoKg < 65) {
            categoria = "Pluma";
        } else if (peleador.pesoKg >= 65 && peleador.pesoKg < 75) {
            categoria = "Ligero";
        } else if (peleador.pesoKg >= 75 && peleador.pesoKg < 85) {
            categoria = "Welter";
        } else {
            categoria = "Pesado";
        }

        // Regla de prioridad: Si tiene combate urgente, se posiciona al inicio de la lista de su categoría
        if (peleador.prioridadAlta === true) {
            carteleraOrganizada[categoria].unshift(peleador.nombre);
        } else {
            carteleraOrganizada[categoria].push(peleador.nombre);
        }
    });

    // 3. Emitir el resultado final estructurado
    return {
        estadoCartelera: "Organizada con éxito",
        totalPeleadores: listaPeleadores.length,
        categorias: carteleraOrganizada
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Un grupo mixto de peleadores con distintos pesos y prioridades
const peleadoresInscritos = [
    { nombre: "Juan 'El Toro'", pesoKg: 82, prioridadAlta: false }, // Welter al final
    { nombre: "Pedro 'Relámpago'", pesoKg: 60, prioridadAlta: true }, // Pluma al inicio
    { nombre: "Carlos 'La Roca'", pesoKg: 90, prioridadAlta: false }, // Pesado al final
    { nombre: "Luis 'Titán'", pesoKg: 80, prioridadAlta: true }      // Welter al inicio por urgencia
];

console.log("--- Caso Normal ---");
console.log(JSON.stringify(organizarCarteleraKickboxing(peleadoresInscritos), null, 2));

// 2. Caso Borde: Lista de competidores vacía
console.log("\n--- Caso Borde ---");
console.log(organizarCarteleraKickboxing([]));