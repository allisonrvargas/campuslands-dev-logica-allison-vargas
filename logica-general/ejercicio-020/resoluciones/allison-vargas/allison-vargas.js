/**
 * Selecciona de forma estratégica la mejor opción de comida urbana según los filtros del usuario.
 * @param {Array} opcionesComida - Lista de platos o carritos de comida disponibles.
 * @param {Object} preferencias - Filtros del cliente (presupuestoMax, tiempoMaxMinutos).
 * @returns {Object} - La mejor opción seleccionada o un mensaje de error.
 */
function seleccionarComidaUrbana(opcionesComida, preferencias) {
    // 1. Validación preventiva de las entradas
    if (!opcionesComida || !Array.isArray(opcionesComida) || opcionesComida.length === 0 || !preferencias) {
        return {
            estado: "Búsqueda cancelada",
            motivo: "Faltan las opciones del menú o las preferencias de selección del cliente."
        };
    }

    const { presupuestoMax, tiempoMaxMinutos } = preferencias;
    let mejorOpcion = null;

    // 2. Ciclo para evaluar estratégicamente cada opción disponible
    opcionesComida.forEach(opcion => {
        // Regla A: Debe cumplir estrictamente con el presupuesto y el tiempo de espera máximo
        if (opcion.precio <= presupuestoMax && opcion.tiempoEsperaMinutos <= tiempoMaxMinutos) {

            // Regla B: De las que cumplen, se selecciona la que tenga la mejor calificación por estrellas
            if (!mejorOpcion || opcion.calificacionEstrellas > mejorOpcion.calificacionEstrellas) {
                mejorOpcion = opcion;
            }
        }
    });

    // 3. Devolver la respuesta final del filtro estratégico
    if (!mejorOpcion) {
        return {
            estado: "Sin coincidencias",
            motivo: "Ningún platillo de comida urbana se ajusta al presupuesto o al tiempo de espera solicitado."
        };
    }

    return {
        estado: "Opción seleccionada",
        recomendacion: mejorOpcion.nombre,
        precio: `$${mejorOpcion.precio}`,
        motivo: `Es la opción mejor calificada (${mejorOpcion.calificacionEstrellas} estrellas) que llega a tiempo y cuida tu bolsillo.`
    };
}

// === CASOS DE PRUEBA ===

// 1. Caso Normal: Varias opciones de comida, elige la mejor calificada que entra en el presupuesto
const menuUrbano = [
    { nombre: "Tacos de Asada", precio: 15, tiempoEsperaMinutos: 10, calificacionEstrellas: 4.2 },
    { nombre: "Mega Hamburguesa", precio: 35, tiempoEsperaMinutos: 25, calificacionEstrellas: 4.8 },
    { nombre: "Hot Dog Especial", precio: 20, tiempoEsperaMinutos: 12, calificacionEstrellas: 4.5 }
];

const misFiltros = { presupuestoMax: 25, tiempoMaxMinutos: 15 };

console.log("--- Caso Normal ---");
console.log(seleccionarComidaUrbana(menuUrbano, misFiltros));

// 2. Caso Borde: El presupuesto es demasiado bajo y nada del menú coincide
const filtrosTacaños = { presupuestoMax: 5, tiempoMaxMinutos: 10 };

console.log("\n--- Caso Borde ---");
console.log(seleccionarComidaUrbana(menuUrbano, filtrosTacaños));