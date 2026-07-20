function evaluarHiperdeportivo(auto) {
    
    const factorConversion = 1.60934;
    const velocidadKmh = auto.velocidadMph * factorConversion;

    let categoria = "";
    if (velocidadKmh >= 400) {
        categoria = "hiperdeportivo extremo";
    } else if (velocidadKmh >= 300) {
        categoria = "hiperdeportivo";
    } else {
        categoria = "deportivo de alto rendimiento";
    }

    return {
        modelo: auto.modelo,
        velocidad_kmh: parseFloat(velocidadKmh.toFixed(2)),
        categoria: categoria
    };
}