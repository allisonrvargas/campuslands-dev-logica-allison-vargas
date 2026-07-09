//Ejercicio 012: Probabilidad Básica - Pingpong 

function analizarProbabilidadSaque(historialSaques) {
    // 1. Guardrail Estructural Perimetral
    if (!Array.isArray(historialSaques) || historialSaques.length === 0) {
        return {
            estado: "Error",
            motivo: "Se requiere un historial con al menos un saque registrado para calcular probabilidades."
        };
    }

    let saquesEfectivos = 0;
    let saquesFallidos = 0;
    let registrosCorruptos = 0;

    // 2. Procesamiento Lineal O(N) con aislamiento preventivo de excepciones
    for (let i = 0; i < historialSaques.length; i++) {
        const saque = historialSaques[i];

        if (!saque || typeof saque !== "object" || !("resultado" in saque)) {
            registrosCorruptos++;
            continue;
        }

        const resultadoLimpio = String(saque.resultado).trim().toLowerCase();

        if (resultadoLimpio === "efectivo") {
            saquesEfectivos++; 
        } else if (resultadoLimpio === "fallido") {
            saquesFallidos++;  
        } else {
            registrosCorruptos++; 
        }
    }

    // 3. Validación de contingencia si no se rescató ninguna métrica procesable
    const totalSaquesValidos = saquesEfectivos + saquesFallidos;
    if (totalSaquesValidos === 0) {
        return {
            estado: "Error",
            motivo: "El historial provisto no contiene saques con estados válidos ('Efectivo' o 'Fallido')."
        };
    }

    // 4. Aplicación precisa de la regla de Laplace
    const probabilidadAcierto = Math.round((saquesEfectivos / totalSaquesValidos) * 10000) / 100;

    // 5. Matriz de Clasificación Condicional Jerárquica
    let clasificacionRendimiento;
    if (probabilidadAcierto >= 80) {
        clasificacionRendimiento = "Nivel Profesional";
    } else if (probabilidadAcierto >= 50) {
        clasificacionRendimiento = "Nivel Intermedio";
    } else {
        clasificacionRendimiento = "En Entrenamiento";
    }

    // 6. Retorno del reporte analítico estandarizado
    return {
        analisEstadistico: {
            totalIntentosProcesados: totalSaquesValidos,
            aciertosContabilizados: saquesEfectivos,
            fallosContabilizados: saquesFallidos,
            ...(registrosCorruptos > 0 ? { alertasIgnoradas: registrosCorruptos } : {})
        },
        probabilidadExito: `${probabilidadAcierto}%`,
        clasificacion: clasificacionRendimiento
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 012 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Historial Balanceado de Entrenamiento",
        historial: [
            { resultado: "Efectivo" },
            { resultado: "Fallido" },
            { resultado: "Efectivo" },
            { resultado: "Efectivo" },
            { resultado: "Fallido" }
        ]
    },
    {
        tipo: "Caso de Tolerancia Logística - Datos Híbridos e Inyecciones Malformadas",
        historial: [
            { resultado: "efectivo " }, 
            null,                     
            { resultado: "FALLIDO" },  
            { resultado: "Invalido" }, 
            { resultado: "Efectivo" }
        ]
    },
    {
        tipo: "Caso Borde 1 (Guía) - Historial Estructural Vacío",
        historial: []
    },
    {
        tipo: "Caso Borde 2 (Guía) - Todo el lote de datos es corrupto",
        historial: [{ resultado: "Invalido" }, null]
    }
];

pruebas.forEach(({ tipo, historial }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarProbabilidadSaque(historial), null, 2));
});