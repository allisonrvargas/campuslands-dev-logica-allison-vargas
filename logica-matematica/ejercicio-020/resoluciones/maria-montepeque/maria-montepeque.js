//Ejercicio 020: Simulaciones con Fórmulas - Comida Urbana

function simularRentabilidadMenu(menuComida, costoFijoEnvio) {
    // 1. Guardrail Estructural Perimetral del Menú
    const envioFijo = Number(costoFijoEnvio);
    
    if (!Array.isArray(menuComida) || menuComida.length === 0 || !Number.isFinite(envioFijo) || envioFijo < 0) {
        return {
            estado: "Error",
            motivo: "El lote del menú no contiene elementos válidos o el costo de envío es incorrecto."
        };
    }

    let totalIngresosBrutos = 0;
    let totalCostosProduccion = 0;
    let platillosCorruptos = 0;

    // 2. Procesamiento Transaccional O(N) libre de paros catastróficos por excepciones
    const analisisFinanciero = [];

    for (let i = 0; i < menuComida.length; i++) {
        const platillo = menuComida[i];

        if (!platillo || typeof platillo !== "object") {
            platillosCorruptos++;
            continue;
        }

        const nombre = String(platillo.nombre || `Platillo Anónimo #${i + 1}`).trim();
        const precioVenta = Number(platillo.precioVenta);
        const costoIngredientes = Number(platillo.costoIngredientes);
        const tasaDesperdicio = Number(platillo.tasaDesperdicio ?? 0);
        
        if (!Number.isFinite(precioVenta) || !Number.isFinite(costoIngredientes) || !Number.isFinite(tasaDesperdicio)) {
            platillosCorruptos++;
            continue;
        }

        if (precioVenta <= 0 || costoIngredientes <= 0 || tasaDesperdicio < 0 || tasaDesperdicio > 1) {
            platillosCorruptos++;
            continue;
        }

        // Proceso 1: Aplicación de la fórmula de costo operativo real con merma
        const costoRealProduccion = costoIngredientes * (1 + tasaDesperdicio) + envioFijo;
        const costoRealRedondeado = Math.round(costoRealProduccion * 100) / 100;

        // Proceso 2: Cálculo de la utilidad neta y márgenes porcentuales vectoriales
        const utilidadNeta = precioVenta - costoRealProduccion;
        const margenUtilidad = Math.round(((utilidadNeta / precioVenta) * 100) * 100) / 100;

        // Proceso 3: Clasificación Jerárquica Comercial Limpia
        let viabilidadMenu;
        if (margenUtilidad >= 40) {
            viabilidadMenu = "Platillo Estrella (Alta Rentabilidad)";
        } else if (margenUtilidad >= 15) {
            viabilityMenu = "Platillo Rentable (Margen Estándar)";
        } else {
            viabilidadMenu = "Revisar Receta (Margen Crítico o Pérdida)";
        }

        totalIngresosBrutos += precioVenta;
        totalCostosProduccion += costoRealProduccion;

        analisisFinanciero.push({
            platillo: nombre,
            costoFinal: costoRealRedondeado,
            margen: `${margenUtilidad}%`,
            diagnostico: viabilidadMenu
        });
    }

    // 3. Validación de Contingencia por Corrupción Absoluta de Datos
    const totalPlatillosValidos = analisisFinanciero.length;
    if (totalPlatillosValidos === 0) {
        return {
            estado: "Error",
            motivo: "Ningún platillo del menú superó las auditorías de consistencia de rangos y finitud numérica."
        };
    }

    // 4. Balance financiero global del negocio libre de errores IEEE 754
    const utilidadGlobal = Math.round((totalIngresosBrutos - totalCostosProduccion) * 100) / 100;
    const rentabilidadGeneral = totalIngresosBrutos > 0 
        ? Math.round(((utilidadGlobal / totalIngresosBrutos) * 100) * 100) / 100 
        : 0;

    // 5. Retorno estructurado del informe de viabilidad económica del menú
    return {
        balanceGeneralNegocio: {
            totalPlatillosRecibidos: menuComida.length,
            totalPlatillosSimulados: totalPlatillosValidos,
            utilidadNetaTotal: utilidadGlobal,
            porcentajeRentabilidadGlobal: `${rentabilidadGeneral}%`,
            ...(platillosCorruptos > 0 ? { alertasPlatillosDescartados: platillosCorruptos } : {})
        },
        analisPormenorizado: analisisFinanciero
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 020 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Simulación de Margen de Comida Urbana",
        menu: [
            { nombre: "Monster Burger XL", precioVenta: 75.0, costoIngredientes: 25.0, tasaDesperdicio: 0.10 }, 
            { nombre: "Tacos de Birria (Orden)", precioVenta: 45.0, costoIngredientes: 18.0, tasaDesperdicio: 0.15 }, 
            { nombre: "Papas Nativas Suprema", precioVenta: 30.0, costoIngredientes: 15.0, tasaDesperdicio: 0.05 }  
        ],
        envio: 5.0
    },
    {
        tipo: "Caso Tolerancia a Fallos - Números como Strings e Inyecciones Parciales",
        menu: [
            { nombre: "Hot Dog Especial", precioVenta: "35", costoIngredientes: "12", tasaDesperdicio: "0.08" },
            { nombre: "Bebida Gigante Corrupta", precioVenta: NaN, costoIngredientes: 5, tasaDesperdicio: 0 }, 
            { nombre: "Alitas BBQ (6 uds)", precioVenta: 40.0, costoIngredientes: 14.0 }
        ],
        envio: "2.5"
    },
    {
        tipo: "Caso Borde 1 (Guía) - Control de Menú Estructuralmente Vacío",
        menu: [],
        envio: 5.0
    },
    {
        tipo: "Caso Borde 2 (Guía) - Intento de simulación con precios inválidos (Negativos)",
        menu: [
            { nombre: "Hot Dog Simple", precioVenta: -10, costoIngredientes: 5, tasaDesperdicio: 0.1 }
        ],
        envio: 2.0
    }
];

pruebas.forEach(({ tipo, menu, envio }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(simularRentabilidadMenu(menu, envio), null, 2));
});