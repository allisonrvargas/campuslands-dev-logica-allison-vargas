function clasificarAuto(nombre, velocidadKmh) {
    if (velocidadKmh <= 0) return "Error: Velocidad inválida";

    const factorConversion = 0.621371;
    const velocidadMph = (velocidadKmh * factorConversion).toFixed(2);
    
    let categoria = "";
    if (velocidadKmh > 400) {
        categoria = "Hiperdeportivo Élite";
    } else if (velocidadKmh >= 300) {
        categoria = "Deportivo de Alto Rendimiento";
    } else {
        categoria = "Deportivo Estándar";
    }

    return { nombre, velocidadMph, categoria };
}
console.log(clasificarAuto("Bugatti Chiron", 420));
console.log(clasificarAuto("Auto Lento", 0));
