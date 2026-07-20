// Ejercicio 035 - Velocidad, Tiempo y Distancia
// Autor: Stefani Sánchez

function calcularViaje(distancia, tiempo) {
    if (distancia < 0 || tiempo <= 0) {
        return {
            error: "Los datos ingresados no son válidos."
        };
    }

    const velocidad = distancia / tiempo;

    let clasificacion = "";

    if (velocidad < 30) {
        clasificacion = "Lento";
    } else if (velocidad < 80) {
        clasificacion = "Normal";
    } else {
        clasificacion = "Rapido";
    }

    return {
        distancia,
        tiempo,
        velocidad: Number(velocidad.toFixed(2)),
        clasificacion,
        explicacion: "La velocidad se obtuvo dividiendo la distancia entre el tiempo."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(calcularViaje(240, 4));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(calcularViaje(100, 0));