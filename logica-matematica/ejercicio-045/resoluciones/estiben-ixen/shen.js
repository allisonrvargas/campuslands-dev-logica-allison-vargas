function evaluarComponenteMecanico(componente, desgasteActual, limiteSeguridad, kilometraje) {
    const requiereCambioInmediato = desgasteActual >= limiteSeguridad;

    const alertaPreventiva = desgasteActual >= (limiteSeguridad * 0.8) && !requiereCambioInmediato;

    let estado = "";
    let accion = "";

    if (requiereCambioInmediato) {
        estado = "Crítico: Sustitución obligatoria";
        accion = "Reemplazar componente inmediatamente";
    } else if (alertaPreventiva) {
        estado = "Atención: Mantenimiento preventivo sugerido";
        accion = "Programar cambio en los próximos 500km";
    } else {
        estado = "Óptimo: Dentro de rangos de seguridad";
        accion = "Continuar operación normal";
    }

    return {
        componente: componente,
        estado: estado,
        accion: accion,
        explicacion: `Desgaste al ${desgasteActual}%. Límite: ${limiteSeguridad}%. Kilometraje: ${kilometraje}km.`
    };
}

console.log("Caso normal:", evaluarComponenteMecanico("Pastillas de freno", 40, 80, 5000));
console.log("Caso borde (Crítico):", evaluarComponenteMecanico("Bomba de agua", 85, 80, 15000));