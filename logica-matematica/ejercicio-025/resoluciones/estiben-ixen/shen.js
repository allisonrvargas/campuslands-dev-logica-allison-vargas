function evaluarServiciosTaller(servicios) {
    if (!servicios || servicios.length === 0) {
        return { total_servicios: 0, costo_minimo: 0, alerta: "sin actividad" };
    }

    const costos = servicios.map(s => s.costo);
    const total = costos.length;
    const costoMinimo = Math.min(...costos);
    
    let alerta = "";
    if (costoMinimo < 20) {
        alerta = "revisar margen de ganancia";
    } else if (costoMinimo >= 100) {
        alerta = "servicio premium";
    } else {
        alerta = "estandar";
    }

    return {
        total_servicios: total,
        costo_minimo: costoMinimo,
        alerta: alerta
    };
}