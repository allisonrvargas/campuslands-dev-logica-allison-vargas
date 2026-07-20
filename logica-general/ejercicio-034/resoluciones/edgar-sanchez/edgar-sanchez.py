def gestionarDespachoParacaidismo(vientoNudos, pesoKg, lincenciaInstructor):
    reporte = {
        "veredicto": "Error de Parámetros",
        "zonaAsignada": "Invalida"
    }

    # Regla 4: Validar consistencia y rango físico de las variables de entrada
    licencias_validas = ["A", "B", "C", "D"]
    if vientoNudos < 0 or pesoKg <= 0 or lincenciaInstructor not in licencias_validas:
        return reporte

    # Regla 1: Restricción climática absoluta por ráfagas peligrosas
    if vientoNudos > 25:
        reporte["veredicto"] = "Operación Suspendida"
        reporte["zonaAsignada"] = "Ninguna"
        return reporte

    # Regla 2: Validar la combinación de viento medio y nivel de licencia
    autorizado = False
    if vientoNudos > 15:
        if lincenciaInstructor in ["C", "D"]:
            autorizado = True
    else:
        autorizado = True

    # Procesar resultados en caso de pasar las pruebas de seguridad
    if autorizado:
        reporte["veredicto"] = "Lanzamiento Autorizado"
        
        # Regla 3: Asignación de la zona de aterrizaje según la inercia del peso
        if pesoKg > 180.0:
            reporte["zonaAsignada"] = "Zona Alfa (Pista Principal)"
        elif 90.0 <= pesoKg <= 180.0:
            reporte["zonaAsignada"] = "Zona Bravo (Campo Abierto)"
        else:
            reporte["zonaAsignada"] = "Zona Charly (Área Ligera)"
    else:
        reporte["veredicto"] = "Operación Suspendida"
        reporte["zonaAsignada"] = "Ninguna"

    return reporte

def ejecutarPruebasAvanzadas():
    # Caso 1: Salto autorizado con viento exigente e instructor máster
    prueba_1 = gestionarDespachoParacaidismo(18, 200.0, "C")
    assert prueba_1["veredicto"] == "Lanzamiento Autorizado"
    assert prueba_1["zonaAsignada"] == "Zona Alfa (Pista Principal)"

    # Caso 2: Suspendido por viento alto para el nivel del instructor
    prueba_2 = gestionarDespachoParacaidismo(18, 85.0, "B")
    assert prueba_2["veredicto"] == "Operación Suspendida"
    assert prueba_2["zonaAsignada"] == "Ninguna"

    # Caso 3: Salto normal con viento suave, apto para cualquier instructor (Licencia A)
    prueba_3 = gestionarDespachoParacaidismo(12, 110.0, "A")
    assert prueba_3["veredicto"] == "Lanzamiento Autorizado"
    assert prueba_3["zonaAsignada"] == "Zona Bravo (Campo Abierto)"

    # Caso 4: Control de datos corruptos (Masa negativa)
    prueba_4 = gestionarDespachoParacaidismo(5, -10.0, "D")
    assert prueba_4["veredicto"] == "Error de Parámetros"

ejecutarPruebasAvanzadas()