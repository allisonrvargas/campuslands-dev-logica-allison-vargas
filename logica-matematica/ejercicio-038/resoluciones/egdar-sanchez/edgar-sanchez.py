def evaluarCalidadSoldadura(juntas):
    reporte = {
        "aprobadoEstructural": [],
        "requierePulido": [],
        "rechazado": [],
        "porcentajeRechazo": 0.0
    }

    if not juntas:
        return reporte

    conteo_validas = 0
    conteo_rechazos = 0

    for junta in juntas:
        id_junta = junta.get("idJunta", "ID Desconocido")
        porosidad = junta.get("porosidadPorMetro", -1)
        penetracion = junta.get("penetracionPorcentaje", -1)

        # 1. Filtro de Control de Datos
        if porosidad < 0 or penetracion < 0 or penetracion > 100:
            continue

        conteo_validas += 1

        # 2. Cálculo de Puntaje Estructural Ponderado (PDE)
        penetracion_defectuosa = 100 - penetracion
        pde = (porosidad * 3) + penetracion_defectuosa

        # 3. Normalización y Asignación de Estados
        if pde <= 15:
            reporte["aprobadoEstructural"].append(id_junta)
        elif pde <= 40:
            reporte["requierePulido"].append(id_junta)
        else:
            reporte["rechazado"].append(id_junta)
            conteo_rechazos += 1

    # Calcular porcentaje final si existen juntas válidas procesadas
    if conteo_validas > 0:
        porcentaje = (conteo_rechazos / conteo_validas) * 100
        reporte["porcentajeRechazo"] = round(porcentaje, 2)

    return reporte

def ejecutarPruebasSoldadura():
    # Prueba 1: Flujo estándar con distribución completa de estados
    inspeccion_lote = [
        {"idJunta": "J-01", "porosidadPorMetro": 2, "penetracionPorcentaje": 95, "tipoElectrodo": "E7018"},
        {"idJunta": "J-02", "porosidadPorMetro": 5, "penetracionPorcentaje": 80, "tipoElectrodo": "E6010"},
        {"idJunta": "J-03", "porosidadPorMetro": 12, "penetracionPorcentaje": 50, "tipoElectrodo": "E7018"},
        {"idJunta": "J-Corrupta", "porosidadPorMetro": -5, "penetracionPorcentaje": 120, "tipoElectrodo": "E6013"}
    ]

    resultado_1 = evaluarCalidadSoldadura(inspeccion_lote)
    assert resultado_1["aprobadoEstructural"] == ["J-01"]
    assert resultado_1["requierePulido"] == ["J-02"]
    assert resultado_1["rechazado"] == ["J-03"]
    assert resultado_1["porcentajeRechazo"] == 33.33

    # Prueba 2: Colección vacía
    resultado_empty = evaluarCalidadSoldadura([])
    assert resultado_empty["porcentajeRechazo"] == 0.0
    assert len(resultado_empty["aprobadoEstructural"]) == 0

ejecutarPruebasSoldadura()