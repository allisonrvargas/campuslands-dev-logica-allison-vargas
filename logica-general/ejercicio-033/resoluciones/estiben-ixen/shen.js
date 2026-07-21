function evaluarSalto(datosSalto) {
    const { alturaMetros, velocidadVientoKmh, estadoParacaidas, experienciaSaltador } = datosSalto;

    if (estadoParacaidas !== "certificado") {
        return { apto: false, razon: "Equipo no certificado" };
    }


    if (velocidadVientoKmh > 40) {
        return { apto: false, razon: "Viento demasiado fuerte" };
    }

    if (alturaMetros < 1000) {
        return { apto: false, razon: "Altura insuficiente" };
    }

    let nivelRiesgo = "bajo";
    if (velocidadVientoKmh > 25 || (alturaMetros < 2000 && experienciaSaltador < 50)) {
        nivelRiesgo = "alto";
    }

    return {
        apto: true,
        nivelRiesgo: nivelRiesgo,
        recomendacion: nivelRiesgo === "alto" ? "Uso de reserva obligatorio" : "Salto estándar"
    };
}