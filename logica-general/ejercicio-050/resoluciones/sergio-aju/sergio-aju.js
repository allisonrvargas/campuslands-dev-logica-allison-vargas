function generarItinerario(prefs) {
    let ruta = "";
    let mensaje = "";

    if (prefs.presupuestoTotal < 500 || prefs.diasDisponibles < 3) {
        ruta = "Tour Local";
        mensaje = "Presupuesto o tiempo limitado, se asigna ruta local.";
    } else if (prefs.interes === "aventura") {
        ruta = "Senderismo en Montaña";
        mensaje = "Ruta seleccionada por interés de aventura.";
    } else {
        ruta = "Spa y Playa";
        mensaje = "Ruta seleccionada por interés de relax.";
    }

    return { ruta, mensaje };
}