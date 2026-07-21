//Ejercicio 031 - Logica general

'use strict';

const PRIORIDAD_ESTADOS = Object.freeze({
    bloqueado: 0,
    pendiente: 1,
    aprobado: 2,
});

const MOTIVOS = Object.freeze({
    bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
    pendiente: 'no hay bloqueos activos, se revisan primero las tareas en curso.',
    aprobado: 'no hay riesgos ni tareas pendientes, se revisan las tareas ya cerradas.',
});

function esEstadoValido(estado) {
    return Object.prototype.hasOwnProperty.call(PRIORIDAD_ESTADOS, estado);
}

function ordenarPorPrioridad(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items debe ser un arreglo de estados (strings).');
    }

    const estadosInvalidos = items.filter((estado) => !esEstadoValido(estado));
    if (estadosInvalidos.length > 0) {
        throw new RangeError(`Estados no reconocidos: ${estadosInvalidos.join(', ')}`);
    }

    return [...items].sort(
        (a, b) => PRIORIDAD_ESTADOS[a] - PRIORIDAD_ESTADOS[b],
    );
}

function determinarAccion(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return {
            accion: 'sin accion',
            motivo: 'la lista esta vacia, no hay tareas que revisar.',
        };
    }

    const [prioritario] = ordenarPorPrioridad(items);

    return {
        accion: `revisar ${prioritario}`,
        motivo: MOTIVOS[prioritario],
    };
}

module.exports = {
    PRIORIDAD_ESTADOS,
    ordenarPorPrioridad,
    determinarAccion,
};

if (require.main === module) {
    
    const casoNormal = ['aprobado', 'pendiente', 'bloqueado'];
    console.log('Caso normal ->', determinarAccion(casoNormal));
    
    const casoVacio = [];
    console.log('Caso borde (lista vacia) ->', determinarAccion(casoVacio));
    
    const casoSinBloqueos = ['aprobado', 'pendiente'];
    console.log('Caso borde (sin bloqueados) ->', determinarAccion(casoSinBloqueos));
}