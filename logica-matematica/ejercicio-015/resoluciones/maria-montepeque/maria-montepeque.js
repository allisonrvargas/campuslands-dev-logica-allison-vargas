//Ejercicio 015: Velocidad, Tiempo y Distancia - Dibujo Digital

function analizarTrazadoDigital(registrosMuestreo) {
    // 1. Guardrail Estructural Perimetral del Digitalizador
    if (!Array.isArray(registrosMuestreo) || registrosMuestreo.length === 0) {
        return {
            estado: "Error",
            motivo: "No se han detectado muestras de entrada en el digitalizador para procesar el trazo."
        };
    }

    let distanciaTotalPixeles = 0;
    let tiempoTotalInterpolacion = 0;
    let tramosValidosProcesados = 0;

    // 2. Recorrido Lineal O(N) de Telemetría Vectorial
    for (let i = 0; i < registrosMuestreo.length; i++) {
        const muestra = registrosMuestreo[i];

        if (!muestra || typeof muestra !== "object") {
            return {
                estado: "Error",
                motivo: `Muestra corrupta en el índice ${i}: El segmento del trazado no es un objeto válido.`
            };
        }

        const velocidad = Number(muestra.velocidad);
        const tiempo = Number(muestra.tiempo);

        if (!Number.isFinite(velocidad) || !Number.isFinite(tiempo)) {
            return {
                estado: "Error",
                motivo: `Muestra corrupta en el índice ${i}: Los valores de velocidad y tiempo deben ser numéricos reales.`
            };
        }

        if (velocidad < 0 || tiempo < 0) {
            return {
                estado: "Error",
                motivo: `Muestra inválida en el índice ${i}: La física digital no permite velocidades ni tiempos negativos.`
            };
        }

        const distanciaTramo = velocidad * tiempo;

        distanciaTotalPixeles += distanciaTramo;
        tiempoTotalInterpolacion += tiempo;
        tramosValidosProcesados++;
    }

    // 3. Mitigación de División por Cero y Redondeo Aritmético de Precisión
    const velocidadPromedioGeneral = tiempoTotalInterpolacion > 0 
        ? (distanciaTotalPixeles / tiempoTotalInterpolacion) 
        : 0;

    let dinamicaPincel;
    if (velocidadPromedioGeneral >= 120) {
        dinamicaPincel = "Trazo Dinámico Rápido (Ideal para bocetado y líneas de acción)";
    } else if (velocidadPromedioGeneral >= 40) {
        dinamicaPincel = "Trazo Controlado Estándar (Ideal para delineado / Lineart preciso)";
    } else {
        dinamicaPincel = "Trazo Lento de Precisión (Ideal para microdetalles o sombreado)";
    }

    // 4. Retorno del Reporte Analítico de Renderizado Estandarizado
    return {
        telemetriaLienzo: {
            segmentosCapturados: tramosValidosProcesados,
            tiempoTotalDibujo: `${(Math.round(tiempoTotalInterpolacion * 100) / 100).toFixed(2)} segundos`,
            longitudTotalTrazo: `${(Math.round(distanciaTotalPixeles * 100) / 100).toFixed(2)} píxeles`
        },
        analisisAlgoritmico: {
            velocidadMediaMuestreo: `${(Math.round(velocidadPromedioGeneral * 100) / 100).toFixed(2)} px/seg`,
            clasificacionPincel: dinamicaPincel
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 015 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Trazo fluido de bocetado rápido continuo",
        muestras: [
            { tramo: "Inicio-Curva", velocidad: 150, tiempo: 0.5 },
            { tramo: "Curva-Ascenso", velocidad: 180, tiempo: 0.4 },
            { tramo: "Remate-Final",  velocidad: 100, tiempo: 0.3 }
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Calibración en formato String desde la UI",
        muestras: [
            { tramo: "Trazo-A", velocidad: "60", tiempo: "1.2" }
        ]
    },
    {
        tipo: "Caso Crítico Detectado - Inyección Silenciosa de NaN (Anti-Crash)",
        muestras: [
            { tramo: "Trazo-B", velocidad: NaN, tiempo: 0.5 }
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Muestreo estructuralmente vacío",
        muestras: []
    },
    {
        tipo: "Caso Borde 2 (Guía) - Registro físico erróneo (Tiempo negativo)",
        muestras: [
            { tramo: "Trazo-Falla", velocidad: 80, tiempo: -1.5 }
        ]
    }
];

pruebas.forEach(({ tipo, muestras }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarTrazadoDigital(muestras), null, 2));
});