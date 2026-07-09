def procesarInstruccionesViaje(instrucciones, tipoPasaporte, climaSevero):
    reporte = {
        "estadoItinerario": "Denegado",
        "controlesAprobados": 0
    }

    # Control de contingencia para listas vacías o tipos de pasaporte inválidos
    pasaportes_validos = ["Regular", "Diplomático"]
    if not instrucciones or tipoPasaporte not in pasaportes_validos:
        return reporte

    checkInHecho = False
    controles_exitosos = 0

    for paso in instrucciones:
        paso_limpio = paso.strip()

        if paso_limpio == "Check-in":
            checkInHecho = True
            controles_exitosos += 1

        elif paso_limpio == "Control de Visas":
            # Regla 1: El pasaporte diplomático goza de exención inmediata
            if tipoPasaporte == "Regular" or tipoPasaporte == "Diplomático":
                controles_exitosos += 1

        elif paso_limpio == "Embarque":
            # Regla 3: Validar que se haya hecho Check-in previamente
            if not checkInHecho:
                reporte["estadoItinerario"] = "Denegado"
                reporte["controlesAprobados"] = controles_exitosos
                return reporte

            # Regla 2: Si hay clima adverso en el embarque, se reprograma el vuelo
            if climaSevero:
                reporte["estadoItinerario"] = "Reprogramado"
                reporte["controlesAprobados"] = controles_exitosos
                return reporte
            
            controles_exitosos += 1
        
        else:
            # Cualquier otra instrucción general válida (ej. "Escala", "Equipaje")
            controles_exitosos += 1

    # Si se completaron todas las instrucciones sin penalizaciones
    reporte["estadoItinerario"] = "Autorizado"
    reporte["controlesAprobados"] = controles_exitosos
    return reporte

def ejecutarPruebasInstrucciones():
    # Caso 1: Flujo limpio autorizado
    itinerario_ok = ["Check-in", "Control de Visas", "Embarque"]
    prueba_1 = procesarInstruccionesViaje(itinerario_ok, "Regular", False)
    assert prueba_1["estadoItinerario"] == "Autorizado"
    assert prueba_1["controlesAprobados"] == 3

    # Caso 2: Reprogramado por tormenta en fase de embarque
    itinerario_clima = ["Check-in", "Embarque"]
    prueba_2 = procesarInstruccionesViaje(itinerario_clima, "Diplomático", True)
    assert prueba_2["estadoItinerario"] == "Reprogramado"
    assert prueba_2["controlesAprobados"] == 1

    # Caso 3: Denegado por abordar sin hacer Check-in previo
    itinerario_invalido = ["Control de Visas", "Embarque"]
    prueba_3 = procesarInstruccionesViaje(itinerario_invalido, "Regular", False)
    assert prueba_3["estadoItinerario"] == "Denegado"

ejecutarPruebasInstrucciones()