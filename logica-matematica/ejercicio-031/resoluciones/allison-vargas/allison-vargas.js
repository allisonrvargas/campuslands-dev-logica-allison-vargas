function calcularCombatesKickboxing(grupoA, grupoB = 0) {
    // 1. Validar entradas
    if (typeof grupoA !== 'number' || grupoA < 0 || typeof grupoB !== 'number' || grupoB < 0) {
        return {
            total_combates: 0,
            clasificacion: "inválido",
            explicacion: "El número de peleadores debe ser un valor entero no negativo."
        };
    }

    let totalCombates = 0;

    // 2. Determinar si es torneo inter-grupo o interno (todos contra todos)
    if (grupoB > 0) {
        // Principio multiplicativo entre dos grupos
        totalCombates = grupoA * grupoB;
    } else {
        // Combates internos: n * (n - 1) / 2
        if (grupoA < 2) {
            return {
                total_combates: 0,
                clasificacion: "inválido",
                explicacion: "Se necesitan al menos 2 peleadores para organizar combates internos."
            };
        }
        totalCombates = (grupoA * (grupoA - 1)) / 2;
    }

    // 3. Clasificar el evento
    let clasificacion = "";
    if (totalCombates >= 20) {
        clasificacion = "gran torneo";
    } else if (totalCombates >= 8) {
        clasificacion = "velada estándar";
    } else {
        clasificacion = "exhibición";
    }

    const tipoEvento = grupoB > 0 ? "inter-grupo" : "todos contra todos";

    return {
        total_combates: totalCombates,
        clasificacion: clasificacion,
        explicacion: `Modalidad ${tipoEvento}. Se pueden realizar ${totalCombates} combates en total.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Inter-grupo) ===");
const caso1 = calcularCombatesKickboxing(5, 4);
console.log(caso1);

console.log("\n=== Caso Borde (Peleadores insuficientes) ===");
const caso2 = calcularCombatesKickboxing(1, 0);
console.log(caso2);