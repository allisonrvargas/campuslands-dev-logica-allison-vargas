def evaluarPaquetesTurismo(paquetes, presupuestoTotalMaximo, diasDisponibles):
    reporte = {
        "ecoAmigable": [],
        "estandar": [],
        "costoTotalPromedioAptos": 0.0
    }

    if not paquetes:
        return reporte

    suma_costos_aptos = 0
    conteo_aptos = 0

    for paquete in paquetes:
        destino = paquete.get("destino", "Destino Desconocido")
        costo_dia = paquete.get("costoPorDia", 0)
        duracion = paquete.get("duracionDias", 0)
        huella = paquete.get("huellaCarbonoKg", 0.0)

        # 1. Filtro de Control de Datos
        if costo_dia <= 0 or duracion <= 0 or huella <= 0.0:
            continue

        # Calcular costo total del paquete
        costo_total = costo_dia * duracion

        # 2. Instrucción de Viabilidad Operativa
        if duracion <= diasDisponibles and costo_total <= presupuestoTotalMaximo:
            suma_costos_aptos += costo_total
            conteo_aptos += 1

            # 3. Clasificación de Impacto Ecológico
            huella_diaria = huella / duracion
            if huella_diaria <= 15.0:
                reporte["ecoAmigable"].append(destino)
            else:
                reporte["estandar"].append(destino)

    # Calcular el promedio final si existen destinos aptos
    if conteo_aptos > 0:
        reporte["costoTotalPromedioAptos"] = suma_costos_aptos / conteo_aptos

    return reporte

def ejecutarPruebasTurismo():
    agencia_paquetes = [
        {"destino": "Costa Rica", "costoPorDia": 120, "duracionDias": 5, "huellaCarbonoKg": 50.0, "requiereVisado": False},
        {"destino": "Japon", "costoPorDia": 300, "duracionDias": 7, "huellaCarbonoKg": 210.0, "requiereVisado": True},
        {"destino": "Europa Express", "costoPorDia": 400, "duracionDias": 10, "huellaCarbonoKg": 100.0, "requiereVisado": False},
        {"destino": "Datos Corruptos", "costoPorDia": -50, "duracionDias": 3, "huellaCarbonoKg": 10.0, "requiereVisado": False}
    ]

    # Ejecución de Prueba 1 (Caso de éxito mixto)
    resultado_1 = evaluarPaquetesTurismo(agencia_paquetes, 2500, 8)
    assert len(resultado_1["ecoAmigable"]) == 1
    assert "Costa Rica" in resultado_1["ecoAmigable"]
    assert len(resultado_1["estandar"]) == 1
    assert "Japon" in resultado_1["estandar"]
    assert "Europa Express" not in resultado_1["ecoAmigable"]
    assert resultado_1["costoTotalPromedioAptos"] == (600 + 2100) / 2

    # Ejecución de Prueba 2 (Filtro por presupuesto excedido)
    resultado_2 = evaluarPaquetesTurismo(agencia_paquetes, 500, 5)
    assert resultado_2["ecoAmigable"] == []
    assert resultado_2["costoTotalPromedioAptos"] == 0.0

    # Ejecución de Prueba 3 (Lista vacía)
    resultado_3 = evaluarPaquetesTurismo([], 3000, 15)
    assert resultado_3["costoTotalPromedioAptos"] == 0.0

ejecutarPruebasTurismo()