function normalizarEspecificaciones(auto) {
    const MPH_A_KMH = 1.60934;
    const HP_A_KW = 0.7457;

    const velocidadKmh = auto.unidadVelocidad === "mph" 
        ? auto.velocidad * MPH_A_KMH 
        : auto.velocidad;

    const potenciaKw = auto.unidadPotencia === "hp" 
        ? auto.potencia * HP_A_KW 
        : auto.potencia;

    return {
        modelo: auto.modelo,
        velocidadKmh: parseFloat(velocidadKmh.toFixed(2)),
        potenciaKw: parseFloat(potenciaKw.toFixed(2))
    };
}

const autoEjemplo = { modelo: "Koenigsegg", velocidad: 300, unidadVelocidad: "mph", potencia: 1600, unidadPotencia: "hp" };
console.log(normalizarEspecificaciones(autoEjemplo));