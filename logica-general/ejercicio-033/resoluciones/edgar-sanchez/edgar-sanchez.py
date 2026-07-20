def evaluarTelemetriaParacaidismo(altitud, velocidad, tipoSalto):
    reporte = {
        "estadoSeguridad": "Error",
        "accionRequerida": "Datos inválidos"
    }

    # Regla 4: Control de consistencia en los datos de telemetría de entrada
    tipos_validos = ["Manual", "Tándem", "Militar"]
    if altitud < 0 or velocidad < 0 or tipoSalto not in tipos_validos:
        return reporte

    # Regla 1: Caso de Altitud de Seguridad Alta
    if altitud > 4500:
        reporte["estadoSeguridad"] = "Seguro"
        if tipoSalto == "Manual" and velocidad > 250:
            reporte["accionRequerida"] = "Estabilizar postura, velocidad límite superada"
        else:
            reporte["accionRequerida"] = "Mantener posición"

    # Regla 2: Caso de Altitud de Despliegue Crítico
    elif 1500 <= altitud <= 4500:
        if velocidad <= 60:
            reporte["estadoSeguridad"] = "Seguro"
            reporte["accionRequerida"] = "Campana abierta, controlar descenso"
        else:
            reporte["estadoSeguridad"] = "Despliegue Obligatorio"
            reporte["accionRequerida"] = "Abrir paracaídas principal inmediatamente"

    # Regla 3: Caso de Activación de Emergencia AAD
    else:  # altitud < 1500
        if velocidad > 100:
            reporte["estadoSeguridad"] = "Activación de Emergencia (AAD)"
            reporte["accionRequerida"] = "Disparar paracaídas de reserva"
        else:
            reporte["estadoSeguridad"] = "Seguro"
            reporte["accionRequerida"] = "Aterrizaje seguro o velocidad controlada"

    return reporte

def ejecutarPruebasParacaidismo():
    # Caso 1: Vuelo estable a gran altura
    prueba_1 = evaluarTelemetriaParacaidismo(6000, 190, "Manual")
    assert prueba_1["estadoSeguridad"] == "Seguro"
    assert prueba_1["accionRequerida"] == "Mantener posición"

    # Caso 2: Ventana obligatoria de apertura con velocidad alta
    prueba_2 = evaluarTelemetriaParacaidismo(3000, 200, "Tándem")
    assert prueba_2["estadoSeguridad"] == "Despliegue Obligatorio"
    assert "Abrir paracaídas" in prueba_2["accionRequerida"]

    # Caso 3: Altitud de peligro extremo y velocidad de impacto (Falla de apertura)
    prueba_3 = evaluarTelemetriaParacaidismo(1200, 180, "Militar")
    assert prueba_3["estadoSeguridad"] == "Activación de Emergencia (AAD)"
    assert "reserva" in prueba_3["accionRequerida"]

    # Caso 4: Control de errores de formato
    prueba_4 = evaluarTelemetriaParacaidismo(-100, 50, "Manual")
    assert prueba_4["estadoSeguridad"] == "Error"

ejecutarPruebasParacaidismo()