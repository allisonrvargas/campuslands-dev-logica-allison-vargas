// ==========================================
// Reto: Soldadura
// Campuslands
// ==========================================

// Función para clasificar un trabajo de soldadura según el tiempo empleado.
function clasificarTrabajo(nombreProyecto, horasTrabajo) {

    // Validación de datos
    if (horasTrabajo < 0) {
        return {
            proyecto: nombreProyecto,
            clasificacion: "Dato inválido",
            mensaje: "Las horas de trabajo no pueden ser negativas."
        };
    }

    let clasificacion = "";

    if (horasTrabajo >= 40) {
        clasificacion = "Proyecto industrial";
    } else if (horasTrabajo >= 20) {
        clasificacion = "Proyecto complejo";
    } else if (horasTrabajo >= 8) {
        clasificacion = "Proyecto estándar";
    } else {
        clasificacion = "Reparación rápida";
    }

    return {
        proyecto: nombreProyecto,
        horasTrabajo: horasTrabajo,
        clasificacion: clasificacion
    };
}

// ======================
// Prueba 1 (Caso normal)
// ======================
const prueba1 = clasificarTrabajo("Estructura Metálica", 25);
console.log("Prueba 1");
console.log(prueba1);

// ======================
// Prueba 2 (Caso límite)
// ======================
const prueba2 = clasificarTrabajo("Portón Residencial", -5);
console.log("\nPrueba 2");
console.log(prueba2);