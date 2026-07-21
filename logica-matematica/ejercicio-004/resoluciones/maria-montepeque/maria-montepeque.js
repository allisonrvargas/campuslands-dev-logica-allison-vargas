//Ejercicio 004: Rangos y Máximos - Inventario de Motos

function analizarInventarioMotos(inventario) {
    // 1. Guardrail Estructural Uniforme
    if (!Array.isArray(inventario) || inventario.length === 0) {
        return {
            total_motos: 0,
            mensaje: "Inventario vacío",
            clasificacion_gama: { Urbana: 0, Intermedia: 0, AltaCilindrada: 0 },
            unidad_top: null
        };
    }

    const clasificacionGama = {
        Urbana: 0,       
        Intermedia: 0,     
        AltaCilindrada: 0  
    };

    let motoMasCostosa = null;
    let totalMotosValidas = 0;

    // 2. Procesamiento Lineal O(N) con sanitización embebida por elemento
    inventario.forEach((item) => {
        if (!item || typeof item !== "object") return;

        const modelo = String(item.modelo || "Modelo Genérico").trim();
        const cilindraje = Number(item.cilindraje) || 0;
        const precio = Number(item.precio) || 0;

        totalMotosValidas++;

        if (cilindraje < 250) {
            clasificacionGama.Urbana++;
        } else if (cilindraje <= 600) {
            clasificacionGama.Intermedia++;
        } else {
            clasificacionGama.AltaCilindrada++;
        }

        if (!motoMasCostosa || precio > motoMasCostosa.precio) {
            motoMasCostosa = { modelo, precio, cilindraje };
        }
    });

    // 3. Manejo de contingencia si todos los objetos del array estaban corruptos
    if (totalMotosValidas === 0) {
        return {
            total_motos: 0,
            mensaje: "Inventario con datos inválidos",
            clasificacion_gama: { Urbana: 0, Intermedia: 0, AltaCilindrada: 0 },
            unidad_top: null
        };
    }

    // 4. Retorno del informe final sanitizado
    return {
        total_motos: totalMotosValidas,
        clasificacion_gama: clasificacionGama,
        unidad_top: motoMasCostosa
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 004 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Flota Balanceada",
        inventario: [
            { modelo: "Honda Navi 110", cilindraje: 110, precio: 1500 },
            { modelo: "Yamaha MT-03", cilindraje: 321, precio: 5500 },
            { modelo: "BMW S 1000 RR", cilindraje: 999, precio: 22000 },
            { modelo: "Kawasaki Ninja 400", cilindraje: 399, precio: 6800 }
        ]
    },
    {
        tipo: "Caso Borde (Guía) - Array Totalmente Vacío",
        inventario: []
    },
    {
        tipo: "Caso Crítico Detectado - Elemento Nulo en Índice Cero (Crash de Puntero)",
        inventario: [
            null,
            { modelo: "Suzuki Gixxer 150", cilindraje: 155, precio: 2800 },
            { modelo: "Ducati Panigale V4", cilindraje: 1103, precio: 26000 }
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Propiedades Omitidas",
        inventario: [
            { modelo: "KTM Duke 200", cilindraje: 200 }, // Falta el precio
            { modelo: "Yamaha R6", precio: 12000 }       // Falta el cilindraje
        ]
    }
];

pruebas.forEach(({ tipo, inventario }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarInventarioMotos(inventario), null, 2));
});
//Ejercicio 004: Rangos y Máximos - Inventario de Motos

function analizarInventarioMotos(inventario) {
    // 1. Guardrail Estructural Uniforme
    if (!Array.isArray(inventario) || inventario.length === 0) {
        return {
            total_motos: 0,
            mensaje: "Inventario vacío",
            clasificacion_gama: { Urbana: 0, Intermedia: 0, AltaCilindrada: 0 },
            unidad_top: null
        };
    }

    const clasificacionGama = {
        Urbana: 0,        
        Intermedia: 0,    
        AltaCilindrada: 0  
    };

    let motoMasCostosa = null;
    let totalMotosValidas = 0;

    // 2. Procesamiento Lineal O(N) con sanitización embebida por elemento
    inventario.forEach((item) => {
        if (!item || typeof item !== "object") return;

        const modelo = String(item.modelo || "Modelo Genérico").trim();
        const cilindraje = Number(item.cilindraje) || 0;
        const precio = Number(item.precio) || 0;

        totalMotosValidas++;

        if (cilindraje < 250) {
            clasificacionGama.Urbana++;
        } else if (cilindraje <= 600) {
            clasificacionGama.Intermedia++;
        } else {
            clasificacionGama.AltaCilindrada++;
        }

        if (!motoMasCostosa || precio > motoMasCostosa.precio) {
            motoMasCostosa = { modelo, precio, cilindraje };
        }
    });

    // 3. Manejo de contingencia si todos los objetos del array estaban corruptos
    if (totalMotosValidas === 0) {
        return {
            total_motos: 0,
            mensaje: "Inventario con datos inválidos",
            clasificacion_gama: { Urbana: 0, Intermedia: 0, AltaCilindrada: 0 },
            unidad_top: null
        };
    }

    // 4. Retorno del informe final sanitizado
    return {
        total_motos: totalMotosValidas,
        clasificacion_gama: clasificacionGama,
        unidad_top: motoMasCostosa
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 004 ---");

const pruebas = [
    {
        tipo: "Caso Normal (Guía) - Flota Balanceada",
        inventario: [
            { modelo: "Honda Navi 110", cilindraje: 110, precio: 1500 },
            { modelo: "Yamaha MT-03", cilindraje: 321, precio: 5500 },
            { modelo: "BMW S 1000 RR", cilindraje: 999, precio: 22000 },
            { modelo: "Kawasaki Ninja 400", cilindraje: 399, precio: 6800 }
        ]
    },
    {
        tipo: "Caso Borde (Guía) - Array Totalmente Vacío",
        inventario: []
    },
    {
        tipo: "Caso Crítico Detectado - Elemento Nulo en Índice Cero (Crash de Puntero)",
        inventario: [
            null,
            { modelo: "Suzuki Gixxer 150", cilindraje: 155, precio: 2800 },
            { modelo: "Ducati Panigale V4", cilindraje: 1103, precio: 26000 }
        ]
    },
    {
        tipo: "Caso Tolerancia a Fallos - Propiedades Omitidas",
        inventario: [
            { modelo: "KTM Duke 200", cilindraje: 200 }, 
            { modelo: "Yamaha R6", precio: 12000 }      
        ]
    }
];

pruebas.forEach(({ tipo, inventario }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(analizarInventarioMotos(inventario), null, 2));
});