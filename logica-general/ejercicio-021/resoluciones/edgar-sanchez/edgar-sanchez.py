def clasificarJugadorCompetitivo(mmr, winRate):
    reporteClasificacion = {
        "liga": "Invalida",
        "subdivision": "Ninguna"
    }

    # Regla 3: Control de consistencia en las métricas de entrada
    if mmr < 0 or winRate < 0.0 or winRate > 100.0:
        return reporteClasificacion

    # Regla 1: Clasificación base por franjas jerárquicas de MMR
    if mmr < 1500:
        ligaAsignada = "Plata"
    elif mmr < 2500:
        ligaAsignada = "Oro"
    else:
        ligaAsignada = "Diamante"

    # Regla 2: Evaluación del modificador por tasa de victorias (Win Rate)
    if winRate > 60.0:
        subdivisionAsignada = "Élite"
    else:
        subdivisionAsignada = "Estándar"

    reporteClasificacion["liga"] = ligaAsignada
    reporteClasificacion["subdivision"] = subdivisionAsignada

    return reporteClasificacion

def ejecutarPruebasClasificacion():
    # Caso 1: Jugador en Oro con alta tasa de victorias (Élite)
    resultadoElite = clasificarJugadorCompetitivo(1800, 65.5)
    assert resultadoElite["liga"] == "Oro"
    assert resultadoElite["subdivision"] == "Élite"

    # Caso 2: Jugador justo en el límite de Oro con tasa estándar
    resultadoBorde = clasificarJugadorCompetitivo(1500, 60.0)
    assert resultadoBorde["liga"] == "Oro"
    assert resultadoBorde["subdivision"] == "Estándar"

    # Caso 3: Error de datos por tasa por encima del 100%
    resultadoError = clasificarJugadorCompetitivo(2800, 105.0)
    assert resultadoError["liga"] == "Invalida"
    assert resultadoError["subdivision"] == "Ninguna"

ejecutarPruebasClasificacion()