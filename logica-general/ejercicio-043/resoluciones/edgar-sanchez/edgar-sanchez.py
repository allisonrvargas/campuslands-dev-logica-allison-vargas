def tomarDecisionTorneo(pingA, pingB, antiCheatActivo, servidor):
    reporte = {
        "decision": "Partida Suspendida",
        "servidorFinal": "Ninguno"
    }

    servidores_validos = ["Local", "Regional", "Global"]
    if pingA < 0 or pingB < 0 or servidor not in servidores_validos:
        return reporte

    if not antiCheatActivo:
        return reporte

    if pingA > 180 or pingB > 180:
        return reporte

    if servidor == "Local":
        if pingA <= 40 and pingB <= 40:
            reporte["decision"] = "Partida Autorizada"
            reporte["servidorFinal"] = "Local"
        elif pingA <= 100 and pingB <= 100:
            reporte["decision"] = "Cambio de Servidor Requerido"
            reporte["servidorFinal"] = "Regional"
        else:
            reporte["decision"] = "Cambio de Servidor Requerido"
            reporte["servidorFinal"] = "Global"

    elif servidor == "Regional":
        if pingA <= 100 and pingB <= 100:
            reporte["decision"] = "Partida Autorizada"
            reporte["servidorFinal"] = "Regional"
        else:
            reporte["decision"] = "Cambio de Servidor Requerido"
            reporte["servidorFinal"] = "Global"

    elif servidor == "Global":
        reporte["decision"] = "Partida Autorizada"
        reporte["servidorFinal"] = "Global"

    return reporte

def ejecutarPruebasEsports():
    prueba_1 = tomarDecisionTorneo(25, 30, True, "Local")
    assert prueba_1["decision"] == "Partida Autorizada"
    assert prueba_1["servidorFinal"] == "Local"

    prueba_2 = tomarDecisionTorneo(65, 20, True, "Local")
    assert prueba_2["decision"] == "Cambio de Servidor Requerido"
    assert prueba_2["servidorFinal"] == "Regional"

    prueba_3 = tomarDecisionTorneo(15, 15, False, "Local")
    assert prueba_3["decision"] == "Partida Suspendida"
    assert prueba_3["servidorFinal"] == "Ninguno"

    prueba_4 = tomarDecisionTorneo(120, 90, True, "Regional")
    assert prueba_4["decision"] == "Cambio de Servidor Requerido"
    assert prueba_4["servidorFinal"] == "Global"

ejecutarPruebasEsports()