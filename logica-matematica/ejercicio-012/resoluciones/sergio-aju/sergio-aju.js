function calcularProbabilidadPunto(exitos, fallos) {
    const totalIntentos = exitos + fallos;
    if (totalIntentos === 0) {
        return {
            probabilidad: 0,
            estado: "Sin historial",
            explicacion: "No se han registrado intentos de servicio."
        };
    }
    const probabilidad = (exitos / totalIntentos) * 100;

    let nivel = "";
    if (probabilidad >= 70) {
        nivel = "Profesional";
    } else if (probabilidad >= 40) {
        nivel = "Intermedio";
    } else {
        nivel = "Principiante";
    }

    return {
        probabilidad: `${probabilidad.toFixed(2)}%`,
        nivel_jugador: nivel,
        explicacion: `De ${totalIntentos} intentos, ${exitos} fueron exitosos.`
    };
}
console.log("Caso Normal:", calcularProbabilidadPunto(15, 5)); 
console.log("Caso Borde:", calcularProbabilidadPunto(0, 0));  