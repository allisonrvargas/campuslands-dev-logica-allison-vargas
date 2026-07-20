//Ejercicio 019: Validaciones Numéricas - Estabilidad Termoquímica

function evaluarEstabilidadQuimica(loteReacciones, limiteEnergiaMax) {
    // 1. Guardrail Estructural Perimetral del Lote
    if (!Array.isArray(loteReacciones) || loteReacciones.length === 0) {
        return {
            estado: "Error",
            motivo: "El lote de fórmulas químicas no contiene registros válidos para analizar."
        };
    }

    const limiteMax = Number(limiteEnergiaMax);
    if (!Number.isFinite(limiteMax) || limiteMax <= 0) {
        return {
            estado: "Error",
            motivo: "El límite de energía máxima debe ser un número real finito mayor a cero."
        };
    }

    let sumaEnergias = 0;
    let compuestosEstables = 0;
    let reactivosCorruptos = 0;

    // 2. Procesamiento Transaccional O(N) Libre de Paros de Ejecución
    const resultadosAnalisis = [];

    for (let i = 0; i < loteReacciones.length; i++) {
        const reaccion = loteReacciones[i];

        if (!reaccion || typeof reaccion !== "object") {
            reactivosCorruptos++;
            continue;
        }

        const formula = String(reaccion.formula || `Sustancia Desconocida #${i + 1}`).trim();
        const energiaActivacion = Number(reaccion.energiaActivacion);
        const entropia = Number(reaccion.entropia);

        if (!Number.isFinite(energiaActivacion) || !Number.isFinite(entropia)) {
            reactivosCorruptos++;
            continue; 
        }

        if (energiaActivacion < 0 || entropia <= 0) {
            reactivosCorruptos++;
            continue;
        }

        const indiceEstabilidad = energiaActivacion - (entropia * 0.05);
        const iecFinal = Math.round(indiceEstabilidad * 100) / 100;

        let dictamenEstabilidad;
        if (iecFinal <= (limiteMax * 0.5)) {
            dictamenEstabilidad = "Altamente Estable (Reacción Segura)";
        } else if (iecFinal <= limiteMax) {
            dictamenEstabilidad = "Estabilidad Crítica (Requiere Control)";
        } else {
            dictamenEstabilidad = "Inestable (Riesgo de Exotermia)";
        }

        sumaEnergias += energiaActivacion;
        if (dictamenEstabilidad !== "Inestable (Riesgo de Exotermia)") {
            compuestosEstables++;
        }

        resultadosAnalisis.push({
            sustancia: formula,
            energiaBase: `${energiaActivacion} kJ/mol`,
            indiceCalculado: iecFinal,
            evaluacion: dictamenEstabilidad
        });
    }

    // 3. Validación de Contingencia por Corrupción Total de Datos
    const totalSustanciasValidas = resultadosAnalisis.length;
    if (totalSustanciasValidas === 0) {
        return {
            estado: "Error",
            motivo: "Ningún reactivo en el lote superó las auditorías de consistencia física y termodinámica."
        };
    }

    // 4. Redondeo estadístico de precisión
    const promedioEnergiaLote = Math.round((sumaEnergias / totalSustanciasValidas) * 100) / 100;

    // 5. Retorno del informe analítico unificado
    return {
        auditoriaLaboratorio: {
            totalCompuestosRecibidos: loteReacciones.length,
            compuestosAnalizadosExitosos: totalSustanciasValidas,
            compuestosSeguros: compuestosEstables,
            promedioEnergiaActivacion: `${promedioEnergiaLote} kJ/mol`,
            ...(reactivosCorruptos > 0 ? { alertasReactivosDescartados: reactivosCorruptos } : {})
        },
        analisIndividual: resultadosAnalisis
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 019 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Análisis de Compuestos Estándar",
        lote: [
            { formula: "H2O (Agua)", energiaActivacion: 42.5, entropia: 188.8 },    
            { formula: "CO2 (Dióxido de Carbono)", energiaActivacion: 85.0, entropia: 213.7 }, 
            { formula: "TNT (Trinitrotolueno)", energiaActivacion: 165.0, entropia: 320.1 }   
        ],
        limite: 100
    },
    {
        tipo: "Caso Tolerancia a Fallos - Datos Híbridos en Strings y Muestras Corruptas",
        lote: [
            { formula: "NH3 (Amoníaco)", energiaActivacion: "65.2", entropia: "192.4" },
            { formula: "Reactivo Inyectado Dañado", energiaActivacion: "DATA_CORRUPTA", entropia: 120 }, 
            { formula: "O2 (Oxígeno)", energiaActivacion: 12.0, entropia: 205.0 }
        ],
        limite: "120"
    },
    {
        tipo: "Caso Borde 1 (Guía) - Control de Lote Estructura Vacía",
        lote: [],
        limite: 100
    },
    {
        tipo: "Caso Borde 2 (Guía) - Simulación de error por datos inconsistentes (Entropía Negativa)",
        lote: [
            { formula: "Compuesto Inestable", energiaActivacion: 50, entropia: -5 }
        ],
        limite: 100
    }
];

pruebas.forEach(({ tipo, lote, limite }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(evaluarEstabilidadQuimica(lote, limite), null, 2));
});