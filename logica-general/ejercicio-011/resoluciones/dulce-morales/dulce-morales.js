function organizarListasKickboxing(listaPeleadores) {
    // Inicialización de acumuladores y estructuras de salida
    const organizacion = {
        totalOrganizados: 0,
        listasClasificadas: {
            categoria_ligera: [],
            categoria_pesada: []
        },
        motivo: ""
    };

    // Caso borde primario: Lista vacía o datos nulos
    if (!listaPeleadores || !Array.isArray(listaPeleadores) || listaPeleadores.length === 0) {
        organizacion.motivo = "No se encontraron atletas inscritos con datos físicos válidos para organizar los grupos de combate.";
        return organizacion;
    }

    // Proceso: Recorrer la lista mediante un ciclo tradicional
    for (let i = 0; i < listaPeleadores.length; i++) {
        const peleador = listaPeleadores[i];

        // Validar datos coherentes de la inscripción
        if (!peleador || peleador.pesoKg <= 0 || peleador.peleasGanadas < 0) {
            continue; // Saltar competidor corrupto sin sumarlo
        }

        // Regla de negocio: Clasificación por umbral de peso oficial (70 kg)
        if (peleador.pesoKg <= 70) {
            organizacion.listasClasificadas.categoria_ligera.push(peleador.nombre);
        } else {
            organizacion.listasClasificadas.categoria_pesada.push(peleador.nombre);
        }

        // Incrementar el contador acumulador de competidores válidos
        organizacion.totalOrganizados++;
    }

    // Evaluar si después del ciclo no se clasificó a nadie válido
    if (organizacion.totalOrganizados === 0) {
        organizacion.motivo = "No se encontraron atletas inscritos con datos físicos válidos para organizar los grupos de combate.";
        return organizacion;
    }

    organizacion.motivo = `Se organizó la lista del torneo de kickboxing de forma correcta. Un total de ${organizacion.totalOrganizados} peleadores fueron distribuidos de manera segura.`;
    return organizacion;
}

// Ejecución de pruebas para verificar consola
const inscritosTorneo = [
    { nombre: "Alex Silva", pesoKg: 65, peleasGanadas: 12 },
    { nombre: "Marcus Vane", pesoKg: 84, peleasGanadas: 15 },
    { nombre: "Danny Torres", pesoKg: 70, peleasGanadas: 8 }
];

const inscritosFalsos = [
    { nombre: "Fighter Invalido", pesoKg: -5, peleasGanadas: 0 }
];

console.log(organizarListasKickboxing(inscritosTorneo)); // Caso Normal
console.log(organizarListasKickboxing(inscritosFalsos)); // Caso Borde