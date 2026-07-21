def auditarRankingFutbolSala(jugados, ganados, empatados, perdidos, golesFavor):
    reporte = {
        "veredicto": "Registro Rechazado",
        "puntosTotales": 0
    }

    # Regla 2: Restricción absoluta contra valores negativos
    if jugados < 0 or ganados < 0 or empatados < 0 or perdidos < 0 or golesFavor < 0:
        reporte["veredicto"] = "Registro Rechazado"
        return reporte

    # Regla 1: Filtro de Coherencia Aritmética (Verificar distribución de encuentros)
    suma_partidos = ganados + empatados + perdidos
    if suma_partidos != jugados:
        reporte["veredicto"] = "Error de Consistencia"
        return reporte

    # Regla 3: Si los datos son correctos, calcular la puntuación oficial del ranking
    puntos_calculados = (ganados * 3) + (empatados * 1)

    reporte["veredicto"] = "Datos Válidos"
    reporte["puntosTotales"] = puntos_calculados
    return reporte

def ejecutarPruebasRanking():
    # Caso 1: Auditoría exitosa con cálculo de puntos estándar
    prueba_1 = auditarRankingFutbolSala(10, 6, 2, 2, 35)
    assert prueba_1["veredicto"] == "Datos Válidos"
    assert prueba_1["puntosTotales"] == 20

    # Caso 2: Error de consistencia (Los partidos no cuadran con el total)
    prueba_2 = auditarRankingFutbolSala(8, 5, 2, 2, 20)
    assert prueba_2["veredicto"] == "Error de Consistencia"
    assert prueba_2["puntosTotales"] == 0

    # Caso 3: Registro rechazado por entrada destructiva (Negativos)
    prueba_3 = auditarRankingFutbolSala(5, 4, -1, 2, 15)
    assert prueba_3["veredicto"] == "Registro Rechazado"
    assert prueba_3["puntosTotales"] == 0

    # Caso 4: Caso de borde con equipo invicto perfecto
    prueba_4 = auditarRankingFutbolSala(4, 4, 0, 0, 18)
    assert prueba_4["veredicto"] == "Datos Válidos"
    assert prueba_4["puntosTotales"] == 12

ejecutarPruebasRanking()