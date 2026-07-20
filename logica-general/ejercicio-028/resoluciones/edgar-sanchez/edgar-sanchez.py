def procesarFlujoProduccion(pasoActual, presupuestoVFX, violenciaExplicita):
    reporte = {
        "estadoFlujo": "Error de Secuencia",
        "observaciones": "Fase de producción inválida"
    }

    # Regla 2: Validar límites del rango de pasos permitidos
    if pasoActual < 0 or pasoActual > 3:
        return reporte

    # Paso 0: Fase de desarrollo inicial
    if pasoActual == 0:
        reporte["estadoFlujo"] = "En Progreso"
        reporte["observaciones"] = "Guion en fase de revisión de premisa"
        return reporte

    # Regla 1: Validar condiciones del Paso 1 (Filtro financiero)
    if pasoActual >= 1:
        if presupuestoVFX < 50000.0:
            reporte["estadoFlujo"] = "Rechazado"
            reporte["observaciones"] = "Presupuesto de VFX por debajo del mínimo"
            return reporte
        elif pasoActual == 1:
            reporte["estadoFlujo"] = "En Progreso"
            reporte["observaciones"] = "Premisa y presupuesto inicial aprobados"

    # Validar condiciones del Paso 2 y 3 (Filtro de clasificación de contenido)
    if pasoActual >= 2:
        if violenciaExplicita:
            observacion_clasificacion = "Clasificación Restringida (Adultos)"
        else:
            observacion_clasificacion = "Clasificación General"

        if pasoActual == 2:
            reporte["estadoFlujo"] = "En Progreso"
            reporte["observaciones"] = f"VFX aprobados. {observacion_clasificacion}"
        elif pasoActual == 3:
            reporte["estadoFlujo"] = "Aprobado para Producción"
            reporte["observaciones"] = f"Proyecto listo para rodaje. {observacion_clasificacion}"

    return reporte

def ejecutarPruebasFlujos():
    # Caso 1: Flujo completado exitosamente sin restricciones
    prueba_exito = procesarFlujoProduccion(3, 150000.0, False)
    assert prueba_exito["estadoFlujo"] == "Aprobado para Producción"
    assert "Clasificación General" in prueba_exito["observaciones"]

    # Caso 2: Rechazado en el paso 1 por poco presupuesto para efectos especiales
    prueba_rechazo = procesarFlujoProduccion(1, 30000.0, False)
    assert prueba_rechazo["estadoFlujo"] == "Rechazado"
    assert prueba_rechazo["observaciones"] == "Presupuesto de VFX por debajo del mínimo"

    # Caso 3: Completado en paso 3 pero con advertencia de clasificación por violencia
    prueba_violencia = procesarFlujoProduccion(3, 85000.0, True)
    assert prueba_violencia["estadoFlujo"] == "Aprobado para Producción"
    assert "Clasificación Restringida" in prueba_violencia["observaciones"]

    # Caso 4: Error de secuencia por paso fuera de rango
    prueba_error = procesarFlujoProduccion(4, 90000.0, False)
    assert prueba_error["estadoFlujo"] == "Error de Secuencia"

ejecutarPruebasFlujos()