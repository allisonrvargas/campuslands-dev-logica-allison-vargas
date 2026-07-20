def analizarHorarioMaraton(duraciones, tamanoBloque):
    reporteHorario = {
        "programacionExacta": False,
        "minutosExcedentes": 0,
        "minutosParaCompletar": 0
    }

    # Regla 3: Validar contingencia y consistencia de datos de entrada
    if not duraciones or tamanoBloque <= 0:
        return reporteHorario

    # Calcular la sumatoria total del tiempo del maratón de terror
    tiempoTotal = sum(duraciones)

    # Regla 1: Aplicar operador módulo de divisibilidad
    residuo = tiempoTotal % tamanoBloque

    if residuo == 0:
        reporteHorario["programacionExacta"] = True
        reporteHorario["minutosExcedentes"] = 0
        reporteHorario["minutosParaCompletar"] = 0
    else:
        # Regla 2: Calcular el desfase y el tiempo necesario para balancear el bloque
        reporteHorario["programacionExacta"] = False
        reporteHorario["minutosExcedentes"] = residuo
        reporteHorario["minutosParaCompletar"] = tamanoBloque - residuo

    return reporteHorario

def ejecutarPruebasMiedo():
    # Caso 1: Divisibilidad exacta en bloques de 60 min
    resultadoExacto = analizarHorarioMaraton([90, 120, 90], 60)
    assert resultadoExacto["programacionExacta"] is True
    assert resultadoExacto["minutosExcedentes"] == 0
    assert resultadoExacto["minutosParaCompletar"] == 0

    # Caso 2: Con residuo (Exceden 40 min, faltan 20 min)
    resultadoAjuste = analizarHorarioMaraton([105, 115], 60)
    assert resultadoAjuste["programacionExacta"] is False
    assert resultadoAjuste["minutosExcedentes"] == 40
    assert resultadoAjuste["minutosParaCompletar"] == 20

    # Caso 3: Control de lista vacía
    resultadoVacio = analizarHorarioMaraton([], 60)
    assert resultadoVacio["programacionExacta"] is False

ejecutarPruebasMiedo()