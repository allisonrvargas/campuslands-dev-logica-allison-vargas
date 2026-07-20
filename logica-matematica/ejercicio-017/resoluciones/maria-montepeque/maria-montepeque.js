//Ejercicio 017: Estadísticas de Ranking - Arquitectura 3D

function generarRankingArquitectura3D(listadoPlanos) {
    // 1. Guardrail Estructural Perimetral del Lote
    if (!Array.isArray(listadoPlanos) || listadoPlanos.length === 0) {
        return {
            estado: "Error",
            motivo: "El lote de planos provisto está vacío o no es un arreglo válido."
        };
    }

    let sumaViabilidadGlobal = 0;
    let maxViabilidad = -1;
    let planoGanador = null;

    const conteoClasificaciones = {
        premium: 0,
        estandar: 0,
        bajoUmbral: 0
    };

    // 2. Procesamiento Lineal O(N) libre de mutación de origen
    for (let i = 0; i < listadoPlanos.length; i++) {
        const plano = listadoPlanos[i];

        if (!plano || typeof plano !== "object") {
            return {
                estado: "Error",
                motivo: `El plano en el índice ${i} no es un objeto válido.`
            };
        }

        const optimizacion = Number(plano.optimizacionMalla);
        const rigor = Number(plano.rigorEscala);
        const fidelidad = Number(plano.fidelidadTextura);
        const nombre = String(plano.nombre || `Plano Anónimo #${i + 1}`).trim();

        if (!Number.isFinite(optimizacion) || !Number.isFinite(rigor) || !Number.isFinite(fidelidad)) {
            return {
                estado: "Error",
                motivo: `El plano en el índice ${i} contiene atributos técnicos incompletos, no numéricos o vacíos.`
            };
        }

        if (optimizacion < 0 || optimizacion > 100 ||
            rigor < 0 || rigor > 100 ||
            fidelidad < 0 || fidelidad > 100) {
            return {
                estado: "Error",
                motivo: `Error de rango en el índice ${i}: Las puntuaciones deben estar estrictamente entre 0 y 100.`
            };
        }

        // 3. Proceso de Cálculo Ponderado Exacto: 45% Geometría, 30% Escala, 25% Texturas
        const indiceViabilidad = (optimizacion * 0.45) + (rigor * 0.30) + (fidelidad * 0.25);
        const scoreViabilidadRedondeado = Math.round(indiceViabilidad * 100) / 100;

        sumaViabilidadGlobal += indiceViabilidad;

        let rangoAsignado = "";
        if (scoreViabilidadRedondeado >= 85) {
            rangoAsignado = "Premium";
            conteoClasificaciones.premium++;
        } else if (scoreViabilidadRedondeado >= 60) {
            rangoAsignado = "Estándar";
            conteoClasificaciones.estandar++;
        } else {
            rangoAsignado = "Bajo Umbral";
            conteoClasificaciones.bajoUmbral++;
        }

        if (scoreViabilidadRedondeado > maxViabilidad) {
            maxViabilidad = scoreViabilidadRedondeado;
            planoGanador = {
                nombre: nombre,
                scoreViabilidad: scoreViabilidadRedondeado,
                rango: rangoAsignado
            };
        }
    }

    // 4. Redondeo del promedio general mitigando el error de coma flotante
    const promedioLote = Math.round((sumaViabilidadGlobal / listadoPlanos.length) * 100) / 100;

    return {
        resumenLote: {
            totalPlanosAuditados: listadoPlanos.length,
            promedioViabilidadLote: promedioLote
        },
        distribucionNiveles: conteoClasificaciones,
        ganadorRanking: planoGanador ? {
            nombreEstructura: planoGanador.nombre,
            scoreFinal: planoGanador.scoreViabilidad,
            categoriaAsignada: planoGanador.rango
        } : null
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 017 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Auditoría de Planos para el Complejo Urbano",
        lote: [
            { nombre: "Eco-Rascacielos Alfa", optimizacionMalla: 92, rigorEscala: 88, fidelidadTextura: 80 }, 
            { nombre: "Centro Comercial Sostenible", optimizacionMalla: 70, rigorEscala: 95, fidelidadTextura: 85 }, 
            { nombre: "Pabellón de Cristal", optimizacionMalla: 55, rigorEscala: 60, fidelidadTextura: 50 }  
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Atributos numéricos enviados como Strings",
        lote: [
            { nombre: "Villa Clásica", optimizacionMalla: "85", rigorEscala: "90", fidelidadTextura: "75" }
        ]
    },
    {
        tipo: "Caso Crítico Detectado - Inyección de NaN (Anti-Crash Guardrail)",
        lote: [
            { nombre: "Render Corrupto", optimizacionMalla: NaN, rigorEscala: 90, fidelidadTextura: 80 }
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Intento de procesamiento con lote vacío",
        lote: []
    },
    {
        tipo: "Caso Borde 2 (Guía) - Control de excepciones por desborde de puntaje",
        lote: [
            { nombre: "Mansión Render Erróneo", optimizacionMalla: 105, rigorEscala: 90, fidelidadTextura: 85 }
        ]
    }
];

pruebas.forEach(({ tipo, lote }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(generarRankingArquitectura3D(lote), null, 2));
});