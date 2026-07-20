def configurarLienzoDigital(ancho, alto, capasSolicitadas, modoRenderizado):
    reporte = {
        "estadoLienzo": "Error de Parámetros",
        "capasFinales": 0
    }

    # Regla 3: Validar consistencia y rangos de las variables de dibujo
    modos_validos = ["Vectorial", "Rásterizado"]
    if ancho <= 0 or alto <= 0 or capasSolicitadas <= 0 or modoRenderizado not in modos_validos:
        return reporte

    # Calcular los megapíxeles totales del lienzo
    area_pixeles = ancho * alto
    capas_finales = capasSolicitadas
    estado = "Inicializado con Éxito"

    # Regla 2: Bloqueo absoluto por exceso masivo de memoria
    if area_pixeles > 30000000 and capasSolicitadas > 10:
        reporte["estadoLienzo"] = "Error de Memoria"
        reporte["capasFinales"] = 0
        return reporte

    # Regla 1: Aplicación de límites dinámicos por límites críticos
    if area_pixeles > 16000000:
        if modoRenderizado == "Rásterizado" and capasSolicitadas > 5:
            capas_finales = 5
            estado = "Lienzo Reducido automáticamente"
        elif modoRenderizado == "Vectorial" and capasSolicitadas > 20:
            capas_finales = 20
            estado = "Lienzo Reducido automáticamente"

    reporte["estadoLienzo"] = estado
    reporte["capasFinales"] = capas_finales
    return reporte

def ejecutarPruebasDibujo():
    # Caso 1: Reducción automática de capas en un lienzo Rásterizado muy grande
    prueba_1 = configurarLienzoDigital(4000, 4500, 12, "Rásterizado")
    assert prueba_1["estadoLienzo"] == "Lienzo Reducido automáticamente"
    assert prueba_1["capasFinales"] == 5

    # Caso 2: Error absoluto de memoria por pasarse del límite crítico
    prueba_2 = configurarLienzoDigital(6000, 6000, 15, "Vectorial")
    assert prueba_2["estadoLienzo"] == "Error de Memoria"
    assert prueba_2["capasFinales"] == 0

    # Caso 3: Lienzo estándar inicializado de manera exitosa
    prueba_3 = configurarLienzoDigital(1920, 1080, 8, "Rásterizado")
    assert prueba_3["estadoLienzo"] == "Inicializado con Éxito"
    assert prueba_3["capasFinales"] == 8

    # Caso 4: Control de parámetros inválidos (ancho en cero)
    prueba_4 = configurarLienzoDigital(0, 1080, 5, "Vectorial")
    assert prueba_4["estadoLienzo"] == "Error de Parámetros"

ejecutarPruebasDibujo()