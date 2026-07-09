function convertirVelocidad(kmh) {
    // Validacion
    if (kmh < 0) return { error: "La velocidad no puede ser negativa." };

    const mph = kmh * 0.621371;
    const ms = kmh * 0.277778;

    let categoria = "";
    if (kmh >= 400) {
        categoria = "Hiperdeportivo Extremo";
    } else if (kmh >= 300) {
        categoria = "Superdeportivo";
    } else {
        categoria = "Deportivo Estándar";
    }

    return {
        kmh: kmh,
        mph: mph.toFixed(2),
        ms: ms.toFixed(2),
        categoria: categoria,
        explicacion: `Conversion realizada basada en estandares internacionales.`
    };
}

// Pruebas
console.log("Caso Normal (350 km/h):", convertirVelocidad(350));
console.log("Caso Borde (Auto detenido):", convertirVelocidad(0));