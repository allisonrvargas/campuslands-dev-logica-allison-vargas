//Ejercicio 005: Mínimos y Límites - Taller Mecánico

function analizarInventarioTaller(refacciones) {
    const reporteAlertas = {
        repuestosParaPedido: [],
        articuloMasCritico: ""
    };

    // 1. Guardrail Estructural
    if (!Array.isArray(refacciones) || refacciones.length === 0) {
        return reporteAlertas;
    }

    let maximoDeficitEncontrado = -Infinity; 
    let totalItemsValidos = 0;

    // 2. Procesamiento Lineal O(N) con sanitización por elemento
    for (let i = 0; i < refacciones.length; i++) {
        const item = refacciones[i];
        
        if (!item || typeof item !== "object") continue;

        const nombre = String(item.repuesto || "Repuesto Genérico").trim();
        const cantidad = Number(item.cantidad) || 0;
        const limiteSeguridad = Number(item.limiteMinimo) || 0;

        totalItemsValidos++;

        if (cantidad < limiteSeguridad) {
            reporteAlertas.repuestosParaPedido.push(nombre);
        }

        const deficitActual = limiteSeguridad - cantidad;
        
        if (deficitActual > maximoDeficitEncontrado) {
            maximoDeficitEncontrado = deficitActual;
            reporteAlertas.articuloMasCritico = nombre;
        }
    }

    if (totalItemsValidos === 0) {
        reporteAlertas.articuloMasCritico = "";
    }

    return reporteAlertas;
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 005 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Evaluación de Umbrales",
        refacciones: [
            { repuesto: "Pastillas de freno", cantidad: 3, limiteMinimo: 5 },  
            { repuesto: "Filtro de aceite", cantidad: 12, limiteMinimo: 10 }, 
            { repuesto: "Bujías", cantidad: 1, limiteMinimo: 8 },           
            { repuesto: "Líquido de frenos", cantidad: 6, limiteMinimo: 4 }  
        ]
    },
    {
        tipo: "Caso Borde (Guía) - Estructure Vacía",
        refacciones: []
    },
    {
        tipo: "Caso Crítico - Demostración de Criticidad por Déficit vs Cantidad Bruta",
        refacciones: [
            { repuesto: "Tornillos raros", cantidad: 0, limiteMinimo: 0 },    
            { repuesto: "Amortiguadores", cantidad: 2, limiteMinimo: 20 }    
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Datos Corruptos Intermedios",
        refacciones: [
            null,
            { repuesto: "Llantas", cantidad: "1", limiteMinimo: "5" },
            { cantidad: 10 }
        ]
    }
];

pruebas.forEach(({ tipo, refacciones }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarInventarioTaller(refacciones), null, 2));
});