//Ejercicio 018: Normalización de Puntajes - Soldadura Industrial

function normalizarEvaluacionSoldadura(registrosSoldadura, bonoGas, penalizacionPorosidad) {
    // 1. Guardrail Estructural Perimetral del Lote
    if (!Array.isArray(registrosSoldadura) || registrosSoldadura.length === 0) {
        return {
            estado: "Error",
            motivo: "El lote de registros de soldadura está vacío o no es un arreglo válido."
        };
    }

    const bono = Number(bonoGas);
    const penalizacion = Number(penalizacionPorosidad);

    if (!Number.isFinite(bono) || !Number.isFinite(penalizacion)) {
        return {
            estado: "Error",
            motivo: "Los modificadores de planta (Bono de Gas y Penalización) deben ser valores numéricos reales."
        };
    }

    let sumaPuntajesNormalizados = 0;
    let conteoAprobados = 0;
    let alertasCorrupcion = 0;

    // 2. Transformación Transaccional Inmutable O(N) sin peligro de colapso por excepción
    const resultadosNormalizados = [];

    for (let i = 0; i < registrosSoldadura.length; i++) {
        const registro = registrosSoldadura[i];

        if (!registro || typeof registro !== "object") {
            alertasCorrupcion++;
            continue;
        }

        const operario = String(registro.nombreOperario || `Operario Anónimo #${i + 1}`).trim();
        const puntajeDirecto = Number(registro.puntajeDirecto);

        if (!Number.isFinite(puntajeDirecto)) {
            alertasCorrupcion++;
            continue;
        }

        if (puntajeDirecto < 0 || puntajeDirecto > 150) {
            alertasCorrupcion++;
            continue;
        }

        const puntajeBase100 = (puntajeDirecto / 150) * 100;

        let puntajeAjustado = puntajeBase100 + bono - penalizacion;

        puntajeAjustado = Math.max(0, Math.min(100, puntajeAjustado));
        const puntajeFinalEstable = Math.round(puntajeAjustado * 100) / 100;

        let clasificacionCostura;
        if (puntajeFinalEstable >= 85) {
            clasificacionCostura = "Certificación Alta (Suficiente)";
        } else if (text = puntajeFinalEstable >= 70) {
            clasificacionCostura = "Aceptable con Observación";
        } else {
            clasificacionCostura = "Rechazado por Defecto Mecánico";
        }

        sumaPuntajesNormalizados += puntajeFinalEstable;
        if (puntajeFinalEstable >= 70) {
            conteoAprobados++;
        }

        resultadosNormalizados.push({
            operario: operario,
            inspeccionOriginal: `${puntajeDirecto} pts / 150`,
            calificacionNormalizada: puntajeFinalEstable,
            estadoEstructural: clasificacionCostura
        });
    }

    // 3. Verificación de contingencia por si todo el lote fue descartado por corrupción de datos
    const totalMuestrasValidas = resultadosNormalizados.length;
    if (totalMuestrasValidas === 0) {
        return {
            estado: "Error",
            motivo: "Ningún registro del lote superó las auditorías de consistencia numérica."
        };
    }

    // 4. Redondeo del promedio estadístico del taller
    const promedioTaller = Math.round((sumaPuntajesNormalizados / totalMuestrasValidas) * 100) / 100;

    // 5. Retorno del reporte ejecutivo final unificado
    return {
        auditoriaTaller: {
            totalMuestrasAnalizadas: registrosSoldadura.length,
            muestrasProcesadasExitosas: totalMuestrasValidas,
            muestrasAprobadas: conteoAprobados,
            rendimientoPromedioNormalizado: promedioTaller,
            ...(alertasCorrupcion > 0 ? { registrosDescartadosPorFalla: alertasCorrupcion } : {})
        },
        detallesMuestreo: resultadosNormalizados
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 018 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Inspección de Probetas en Taller Metalúrgico",
        lote: [
            { nombreOperario: "Carlos Mendoza", puntajeDirecto: 135 }, 
            { nombreOperario: "Ana Palacios", puntajeDirecto: 105 },   
            { nombreOperario: "Jorge Estévez", puntajeDirecto: 75 }     
        ],
        bono: 5, penalizacion: 2
    },
    {
        tipo: "Caso Tolerancia a Fallos - Datos Numéricos en String e Inyecciones Mixtas",
        lote: [
            { nombreOperario: "Luis Gómez", puntajeDirecto: "120" }, 
            { nombreOperario: "Falla Temporal", puntajeDirecto: "INVALIDO_DATA" }, 
            { nombreOperario: "Elena Rostova", puntajeDirecto: 150 }
        ],
        bono: "10", penalizacion: "5"
    },
    {
        tipo: "Caso Crítico (Guía) - Encapsulamiento Matemática Extrema (Deducción masiva)",
        lote: [{ nombreOperario: "Operario Prueba", puntajeDirecto: 20 }],
        bono: 0, penalizacion: 40
    },
    {
        tipo: "Caso Borde (Guía) - Manejo preventivo de arreglos vacíos",
        lote: [],
        bono: 5, penalizacion: 2
    }
];

pruebas.forEach(({ tipo, lote, bono, penalizacion }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(normalizarEvaluacionSoldadura(lote, bono, penalizacion), null, 2));
});