function resolverCasosParacaidismo(listaSaltos) {
    // Inicialización de acumuladores lógicos
    const reporteTorreControl = {
        saltosAprobados: 0,
        saltosCancelados: 0,
        motivo: ""
    };

    // Caso borde primario: Listado inexistente o sin datos para analizar
    if (!listaSaltos || !Array.isArray(listaSaltos) || listaSaltos.length === 0) {
        reporteTorreControl.motivo = "No se recibieron registros de saltos programados para la jornada actual.";
        return reporteTorreControl;
    }

    // Proceso: Evaluar caso por caso usando un ciclo estructurado
    for (let i = 0; i < listaSaltos.length; i++) {
        const salto = listaSaltos[i];

        // Caso borde secundario: Validar que no existan datos físicos imposibles o negativos
        if (!salto || salto.velocidadVientoNudos < 0 || salto.alturaSaltoPies < 0) {
            continue; // Ignorar el caso corrupto sin sumarlo a las estadísticas de control
        }

        // Regla 1 e Invariante de Seguridad: Clima hostil o altura insuficiente
        if (salto.velocidadVientoNudos > 25 || salto.alturaSaltoPies < 3000) {
            reporteTorreControl.saltosCancelados++;
            continue;
        }

        // Regla 2: Verificación obligatoria de herramientas y paracaídas
        if (salto.verificacionEquipo === false) {
            reporteTorreControl.saltosCancelados++;
            continue;
        }

        // Si supera todas las reglas del negocio, el salto se autoriza de forma segura
        reporteTorreControl.saltosAprobados++;
    }

    // Evaluación final sobre el impacto del clima o fallas operativas
    if (reporteTorreControl.saltosAprobados === 0 && reporteTorreControl.saltosCancelados === 0) {
        reporteTorreControl.motivo = "No se procesaron registros debido a parámetros de vuelo o altitudes físicamente incoherentes.";
    } else {
        reporteTorreControl.motivo = `Evaluación completada. Se autorizaron ${reporteTorreControl.saltosAprobados} saltos bajo óptimas condiciones y se cancelaron ${reporteTorreControl.saltosCancelados} por no cumplir con el protocolo de seguridad.`;
    }

    return reporteTorreControl;
}

// Ejecución de pruebas para verificar salida en la consola del desarrollador
const cronogramaDia = [
    { paracaidista: "Mariana Rios", velocidadVientoNudos: 14, alturaSaltoPies: 10000, verificacionEquipo: true },
    { paracaidista: "Jorge Alva", velocidadVientoNudos: 28, alturaSaltoPies: 12000, verificacionEquipo: true }, // Viento alto
    { paracaidista: "Luis Cabrera", velocidadVientoNudos: 10, alturaSaltoPies: 9500, verificacionEquipo: false } // Equipo fallido
];

const datosInvalidos = [
    { paracaidista: "Salto Invalido", velocidadVientoNudos: -5, alturaSaltoPies: 0, verificacionEquipo: true }
];

console.log(resolverCasosParacaidismo(cronogramaDia));  // Caso Normal
console.log(resolverCasosParacaidismo(datosInvalidos)); // Caso Borde