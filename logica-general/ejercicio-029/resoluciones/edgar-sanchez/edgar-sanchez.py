def simularEstadosMiedo(estadoInicial, eventos, esSensible):
    reporte = {
        "estadoFinal": "Error",
        "saturacionSustos": 0
    }

    # Validar consistencia del estado de origen
    estados_validos = ["Calma", "Alerta", "Pánico"]
    if estadoInicial not in estados_validos:
        reporte["estadoFinal"] = "Error"
        return reporte

    # Control de lista de eventos vacía
    if not eventos:
        reporte["estadoFinal"] = estadoInicial
        return reporte

    estado_actual = estadoInicial
    saturacion = 0

    for evento in eventos:
        # Regla 2: Modificar comportamiento del evento si el espectador es altamente sensible
        evento_efectivo = evento
        if esSensible and evento == "Música Suspenso":
            evento_efectivo = "Jump Scare"

        # Regla 1: Máquina de estados según el estímulo efectivo
        if evento_efectivo == "Resolución":
            estado_actual = "Calma"
            
        elif evento_efectivo == "Jump Scare":
            estado_actual = "Pánico"
            saturacion += 1
            
        elif evento_efectivo in ["Silencio", "Música Suspenso"]:
            if estado_actual == "Calma":
                estado_actual = "Alerta"
            elif estado_actual == "Alerta":
                estado_actual = "Pánico"

    reporte["estadoFinal"] = estado_actual
    reporte["saturacionSustos"] = saturacion
    return reporte

def ejecutarPruebasEstados():
    # Caso 1: Flujo normal que termina relajándose con una resolución
    prueba_normal = simularEstadosMiedo("Calma", ["Música Suspenso", "Jump Scare", "Resolución"], False)
    assert prueba_normal["estadoFinal"] == "Calma"
    assert prueba_normal["saturacionSustos"] == 1

    # Caso 2: Espectador sensible entra en pánico rápido con la música ambiental
    prueba_sensible = simularEstadosMiedo("Calma", ["Música Suspenso"], True)
    assert prueba_sensible["estadoFinal"] == "Pánico"
    assert prueba_sensible["saturacionSustos"] == 1

    # Caso 3: Estado inicial corrupto o no registrado
    prueba_error = simularEstadosMiedo("Feliz", ["Silencio"], False)
    assert prueba_error["estadoFinal"] == "Error"

ejecutarPruebasEstados()