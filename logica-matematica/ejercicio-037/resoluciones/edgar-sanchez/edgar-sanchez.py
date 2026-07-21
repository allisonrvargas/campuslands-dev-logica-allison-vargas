def evaluarPresupuestoAnimacion(proyecto):
    reporte = {
        "costoBase": 0.0,
        "costoFinal": 0.0,
        "descuentoAplicado": 0.0,
        "estado": "Rechazado por Datos"
    }

    frames = proyecto.get("totalFrames", 0)
    capas = proyecto.get("capasRender", 0)
    simulacion = proyecto.get("requiereSimulacion", False)
    presupuesto = proyecto.get("presupuestoMaximo", -1)

    # 1. Control de Integridad y Rangos
    if frames <= 0 or capas < 1 or capas > 10 or presupuesto < 0:
        return reporte

    # 2. Cálculo de Procesamiento por Capas
    costo_base = frames * (capas * 0.50)
    
    descuento = 0.0
    recargo = 0.0

    # 3. Modificadores Financieros Sucesivos
    if frames > 1200:
        descuento = costo_base * 0.20

    if simulacion:
        recargo = costo_base * 0.15

    costo_final = costo_base - descuento + recargo

    # 4. Evaluación de Viabilidad
    reporte["costoBase"] = costo_base
    reporte["costoFinal"] = costo_final
    reporte["descuentoAplicado"] = descuento
    
    if costo_final <= presupuesto:
        reporte["estado"] = "Viable"
    else:
        reporte["estado"] = "Presupuesto Insuficiente"

    return reporte

def ejecutarPruebasAvanzadas():
    # Prueba 1: Simulación de producción masiva (Excede Presupuesto)
    escena_epica = {
        "nombreEscena": "Batalla_Final",
        "totalFrames": 2000,
        "capasRender": 4,
        "requiereSimulacion": True,
        "presupuestoMaximo": 3500
    }
    res_1 = evaluarPresupuestoAnimacion(escena_epica)
    assert res_1["costoBase"] == 4000.0
    assert res_1["descuentoAplicado"] == 800.0
    assert res_1["costoFinal"] == 3800.0
    assert res_1["estado"] == "Presupuesto Insuficiente"

    # Prueba 2: Escena comercial corta (Aprobado)
    escena_comercial = {
        "nombreEscena": "Logo_Animado",
        "totalFrames": 300,
        "capasRender": 2,
        "requiereSimulacion": False,
        "presupuestoMaximo": 400
    }
    res_2 = evaluarPresupuestoAnimacion(escena_comercial)
    assert res_2["costoFinal"] == 300.0
    assert res_2["estado"] == "Viable"

    # Prueba 3: Caso de error por exceso de capas de renderizado (> 10)
    escena_corrupta = {
        "nombreEscena": "Test_Error",
        "totalFrames": 500,
        "capasRender": 12,
        "requiereSimulacion": False,
        "presupuestoMaximo": 1000
    }
    res_3 = evaluarPresupuestoAnimacion(escena_corrupta)
    assert res_3["costoFinal"] == 0.0
    assert res_3["estado"] == "Rechazado por Datos"

ejecutarPruebasAvanzadas()