function organizarEspectadores(totalEspectadores, capacidadPorFila) {
    if (capacidadPorFila <= 0) return { error: "La fila debe tener capacidad mayor a 0." };
    if (totalEspectadores < 0) return { error: "No puede haber espectadores negativos." };

    const filasLlenas = Math.floor(totalEspectadores / capacidadPorFila);
    const sobrantes = totalEspectadores % capacidadPorFila;

    let estado = "";
    if (sobrantes === 0) {
        estado = "Distribución perfecta";
    } else {
        estado = `Requiere una fila adicional para ${sobrantes} personas`;
    }

    return {
        filas_completas: filasLlenas,
        espectadores_sueltos: sobrantes,
        estado: estado,
        explicacion: `Se aplicó operador módulo (%) para calcular el residuo de la división.`
    };
}
console.log("Caso Normal:", organizarEspectadores(50, 8));
console.log("Caso Borde (Divisibilidad exacta):", organizarEspectadores(40, 8));