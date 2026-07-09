function simularGanancias(inversionInicial, tasaDiaria, dias) {
    if (inversionInicial < 0 || tasaDiaria < 0 || dias < 0) {
        return { error: "Los valores deben ser positivos." };
    }

    let gananciaActual = inversionInicial;
    for (let i = 1; i <= dias; i++) {
        gananciaActual += (gananciaActual * tasaDiaria);
    }

    return {
        dias_simulados: dias,
        ganancia_final: gananciaActual.toFixed(2),
        explicacion: `Simulación de crecimiento compuesto al ${tasaDiaria * 100}% diario durante ${dias} días.`
    };
}
console.log("Caso Normal:", simularGanancias(100, 0.05, 10)); 
console.log("Caso Borde (0 días):", simularGanancias(100, 0.05, 0));