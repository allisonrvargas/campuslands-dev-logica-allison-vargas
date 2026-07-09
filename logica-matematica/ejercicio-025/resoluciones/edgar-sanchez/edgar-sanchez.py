def gestionarOrdenTaller(nivelGravedad, horasEstimadas):
    reporteOrden = {
        "estado": "Error",
        "prioridad": "Ninguna"
    }

    # Regla 3: Validar que los rangos de entrada sean lógicos
    if nivelGravedad < 1 or nivelGravedad > 10 or horasEstimadas <= 0:
        return reporteOrden

    # Regla 1: Validar el límite máximo de horas permitidas en el taller
    if horasEstimadas > 48.0:
        reporteOrden["estado"] = "Rechazado"
        reporteOrden["prioridad"] = "Ninguna"
        return reporteOrden

    # Regla 2: Clasificar según el nivel de gravedad de la falla
    reporteOrden["estado"] = "Aceptado"
    if nivelGravedad >= 8:
        reporteOrden["prioridad"] = "Alta"
    else:
        reporteOrden["prioridad"] = "Estándar"

    return reporteOrden

def ejecutarPruebasTaller():
    # Caso 1: Orden aceptada con prioridad alta
    resultadoAlta = gestionarOrdenTaller(9, 14.5)
    assert resultadoAlta["estado"] == "Aceptado"
    assert resultadoAlta["prioridad"] == "Alta"

    # Caso 2: Orden rechazada por exceder las 48 horas límite
    resultadoRechazado = gestionarOrdenTaller(5, 52.0)
    assert resultadoRechazado["estado"] == "Rechazado"
    assert resultadoRechazado["prioridad"] == "Ninguna"

    # Caso 3: Error por gravedad fuera de rango (0)
    resultadoError = gestionarOrdenTaller(0, 10.0)
    assert resultadoError["estado"] == "Error"
    assert resultadoError["prioridad"] == "Ninguna"

ejecutarPruebasTaller()