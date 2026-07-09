//Ejercicio 016: Presupuestos y Descuentos - Animación 3D

function cotizarProyectoAnimacion(desgloseProyecto) {
    // 1. Guardrail Estructural Perimetral del Proyecto
    if (!desgloseProyecto || !Array.isArray(desgloseProyecto.escenas) || desgloseProyecto.escenas.length === 0) {
        return {
            estado: "Error",
            motivo: "No se encontraron escenas válidas en la solicitud para generar un presupuesto."
        };
    }

    let presupuestoBrutoTotal = 0;
    let totalElementosComplejidad = 0;
    const COSTO_ELEMENTO_ADICIONAL = 120.00; 

    // 2. Procesamiento Lineal O(N) con validación e inmunización anti-NaN
    for (let i = 0; i < desgloseProyecto.escenas.length; i++) {
        const escena = desgloseProyecto.escenas[i];

        if (!escena || typeof escena !== "object") {
            return {
                estado: "Error",
                motivo: `Error en la escena del índice ${i}: El registro no es un objeto válido.`
            };
        }

        const costoBase = Number(escena.costoBase);
        const elementosComplejos = Number(escena.elementosComplejos);

        if (!Number.isFinite(costoBase) || !Number.isFinite(elementosComplejos)) {
            return {
                estado: "Error",
                motivo: `Error en la escena del índice ${i}: Los valores de costo base y elementos complejos deben ser numéricos reales.`
            };
        }

        if (costoBase < 0 || elementosComplejos < 0) {
            return {
                estado: "Error",
                motivo: `Valores inválidos en la escena del índice ${i}: No se permiten costos ni cantidades negativas.`
            };
        }

        const costoEscenaCalculado = costoBase + (elementosComplejos * COSTO_ELEMENTO_ADICIONAL);
        
        presupuestoBrutoTotal += costoEscenaCalculado;
        totalElementosComplejidad += elementosComplejos;
    }

    // 3. Matriz de Negocio: Determinación de Reglas de Descuento Jerárquicas
    let porcentajeDescuento = 0;
    let motivoDescuento = "No aplica incentivo comercial (No cumple umbrales de volumen o presupuesto).";
    const cantidadEscenas = desgloseProyecto.escenas.length;

    if (cantidadEscenas >= 8 || presupuestoBrutoTotal > 10000) {
        porcentajeDescuento = 0.18; 
        motivoDescuento = "Descuento por Proyecto de Alta Envergadura (≥8 escenas o presupuesto > $10,000)";
    } else if (cantidadEscenas >= 4 || presupuestoBrutoTotal > 5000) {
        porcentajeDescuento = 0.10; 
        motivoDescuento = "Descuento Estándar de Estudio (≥4 escenas o presupuesto > $5,000)";
    }

    // 4. Cálculos contables finales mitigando el error de coma flotante
    const ahorroTotal = Math.round((presupuestoBrutoTotal * porcentajeDescuento) * 100) / 100;
    const presupuestoNetoFinal = Math.round((presupuestoBrutoTotal - ahorroTotal) * 100) / 100;

    // 5. Retorno estructurado del informe de producción
    return {
        metadatosProyecto: {
            nombreCortometraje: String(desgloseProyecto.nombre || "Proyecto Independiente Sin Título").trim(),
            totalEscenasProcesadas: cantidadEscenas,
            totalModelosComplejosRenderizados: totalElementosComplejidad
        },
        auditoriaFinanciera: {
            costoBrutoInicial: `$${(Math.round(presupuestoBrutoTotal * 100) / 100).toFixed(2)}`,
            politicaAplicada: motivoDescuento,
            porcentajeDescuento: `${porcentajeDescuento * 100}%`,
            montoDescontado: `$${ahorroTotal.toFixed(2)}`,
            costoNetoFinal: `$${presupuestoNetoFinal.toFixed(2)}`
        }
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 016 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Proyecto cinematográfico de gran escala (18% Descuento)",
        payload: {
            nombre: "Neo-Guatemala 2026",
            escenas: [
                { identificador: "Escena 1 - Intro Suburbios", costoBase: 2500, elementosComplejos: 5 },  
                { identificador: "Escena 2 - Persecución Naves", costoBase: 4000, elementosComplejos: 12 }, 
                { identificador: "Escena 3 - Laboratorio",        costoBase: 1800, elementosComplejos: 3 }   
            ]
        }
    },
    {
        tipo: "Caso Tolerancia a Fallos - Valores numéricos en String desde Formularios",
        payload: {
            nombre: "Animación Web Comercial",
            escenas: [
                { identificador: "UI-Intro", costoBase: "3000", elementosComplejos: "2" } 
            ]
        }
    },
    {
        tipo: "Caso Crítico Detectado - Inyección Silenciosa de NaN (Anti-Crash Guardrail)",
        payload: {
            nombre: "Boceto Dañado",
            escenas: [
                { identificador: "Escena-X", costoBase: NaN, elementosComplejos: 4 }
            ]
        }
    },
    {
        tipo: "Caso Borde 1 (Guía) - Proyecto vacío sin especificaciones",
        payload: { nombre: "Test Vacío", escenas: [] }
    },
    {
        tipo: "Caso Borde 2 (Guía) - Detección de Costo Negativo",
        payload: {
            nombre: "Error Render",
            escenas: [
                { identificador: "Escena Dañada", costoBase: -1000, elementosComplejos: 2 }
            ]
        }
    }
];

pruebas.forEach(({ tipo, payload }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(cotizarProyectoAnimacion(payload), null, 2));
});