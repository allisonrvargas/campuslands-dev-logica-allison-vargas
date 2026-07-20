def cotizarProyecto3D(orden):
    reporte = {
        "costoBase": 0.0,
        "costoFinal": 0.0,
        "descuentoTotal": 0.0,
        "aprobado": False
    }

    frames = orden.get("cantidadFrames", 0)
    tipo = orden.get("tipoRender", "")
    motor = orden.get("motorRender", "")
    presupuesto = orden.get("presupuestoCliente", 0)

    # 4. Control de Datos Negativos o Incompletos
    if frames <= 0 or presupuesto <= 0:
        return reporte

    # 1. Tarifas Base por Estilo
    tarifa_por_frame = 0.0
    if tipo == "Stylized":
        tarifa_por_frame = 2.50
    elif tipo == "Photorealistic":
        tarifa_por_frame = 4.50
    else:
        return reporte # Tipo de renderizado no soportado

    costo_base = frames * tarifa_por_frame
    descuento = 0.0
    recargo = 0.0

    # 2. Descuentos y Recargos Escalonados
    if frames > 500:
        descuento = costo_base * 0.15

    if tipo == "Photorealistic" and motor in ["Unreal Engine 5", "Blender Cycles"]:
        recargo = costo_base * 0.10

    costo_final = costo_base - descuento + recargo

    # 3. Viabilidad Económica
    reporte["costoBase"] = costo_base
    reporte["costoFinal"] = costo_final
    reporte["descuentoTotal"] = descuento
    reporte["aprobado"] = costo_final <= presupuesto

    return reporte

def ejecutarPruebasAnimacion():
    # Prueba 1: Volumen alto con recargo de motor (Caso Excedido)
    proyecto_high_end = {
        "cantidadFrames": 1000,
        "tipoRender": "Photorealistic",
        "motorRender": "Blender Cycles",
        "presupuestoCliente": 4000
    }
    resultado_1 = cotizarProyecto3D(proyecto_high_end)
    assert resultado_1["costoBase"] == 4500.0
    assert resultado_1["descuentoTotal"] == 675.0
    assert resultado_1["costoFinal"] == 4275.0
    assert resultado_1["aprobado"] is False

    # Prueba 2: Proyecto Estilizado Estándar (Caso Aprobado)
    proyecto_indie = {
        "cantidadFrames": 200,
        "tipoRender": "Stylized",
        "motorRender": "Eevee",
        "presupuestoCliente": 600
    }
    resultado_2 = cotizarProyecto3D(proyecto_indie)
    assert resultado_2["costoFinal"] == 500.0
    assert resultado_2["aprobado"] is True

    # Prueba 3: Datos de entrada inválidos
    proyecto_invalido = {
        "cantidadFrames": -50,
        "tipoRender": "Stylized",
        "presupuestoCliente": 1000
    }
    assert cotizarProyecto3D(proyecto_invalido)["costoFinal"] == 0.0

ejecutarPruebasAnimacion()