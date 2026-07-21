def simularPedidoComidaUrbana(orden):
    reporte = {
        "costoComida": 0.0,
        "tarifaEnvio": 0.0,
        "tiempoEstimadoMin": 0,
        "requierePrioritario": False,
        "estado": "Procesando"
    }

    platillos = orden.get("platillos", [])
    distancia = orden.get("distanciaKm", 0.0)
    clima = orden.get("tipoClima", "Normal")

    # 2. Filtro de Datos e Integridad
    if not platillos or distancia <= 0.0:
        reporte["estado"] = "Orden Invalida"
        return reporte

    costo_comida = 0.0
    tiempo_cocina = 0

    # Diccionarios de referencia para evitar estructuras condicionales anidadas y rígidas
    TABLA_PRECIOS = {"Hamburguesa": 6.50, "Pizza": 9.00, "Tacos": 4.00}
    TABLA_TIEMPOS = {"Hamburguesa": 8, "Pizza": 12, "Tacos": 5}

    for item in platillos:
        cat = item.get("categoria", "")
        cant = item.get("cantidad", 0)

        if cat not in TABLA_PRECIOS or cant <= 0:
            reporte["estado"] = "Orden Invalida"
            return reporte

        costo_comida += TABLA_PRECIOS[cat] * cant
        tiempo_cocina += TABLA_TIEMPOS[cat] * cant

    # 3. Simulación Logística y Fórmulas de Envío
    envio_base = distancia * 1.20
    tiempo_adicional_clima = 0

    if clima == "Lluvia":
        envio_base = envio_base * 1.25  # +25% de recargo logístico
        tiempo_adicional_clima = 10     # +10 minutos por retraso vial

    tiempo_total = tiempo_cocina + tiempo_adicional_clima

    # 4. Activación de Conductor Prioritario
    requiere_prioritario = tiempo_cocina > 45 or distancia > 8.0

    # Consolidación de Resultados en el Reporte
    reporte["costoComida"] = round(costo_comida, 2)
    reporte["tarifaEnvio"] = round(envio_base, 2)
    reporte["tiempoEstimadoMin"] = tiempo_total
    reporte["requierePrioritario"] = requiere_prioritario
    reporte["estado"] = "Simulacion Exitosa"

    return reporte

def ejecutarPruebasComidaUrbana():
    # Prueba 1: Pedido grande bajo tormenta urbana (Requiere Reparto Prioritario)
    orden_festival = {
        "pedidoId": "CF-101",
        "platillos": [
            {"categoria": "Hamburguesa", "cantidad": 3},
            {"categoria": "Pizza", "cantidad": 2}
        ],
        "distanciaKm": 10.0,
        "tipoClima": "Lluvia"
    }
    res_1 = simularPedidoComidaUrbana(orden_festival)
    assert res_1["costoComida"] == 37.50
    assert res_1["tarifaEnvio"] == 15.00
    assert res_1["tiempoEstimadoMin"] == 58
    assert res_1["requierePrioritario"] is True
    assert res_1["estado"] == "Simulacion Exitosa"

    # Prueba 2: Pedido simple y rápido en la misma zona
    orden_rapida = {
        "pedidoId": "CF-102",
        "platillos": [{"categoria": "Tacos", "cantidad": 4}],
        "distanciaKm": 3.5,
        "tipoClima": "Normal"
    }
    res_2 = simularPedidoComidaUrbana(orden_rapida)
    assert res_2["costoComida"] == 16.00
    assert res_2["tarifaEnvio"] == 4.20
    assert res_2["tiempoEstimadoMin"] == 20
    assert res_2["requierePrioritario"] is False

    # Prueba 3: Datos de entrada corruptos o ilógicos
    orden_erronea = {
        "pedidoId": "CF-ERR",
        "platillos": [{"categoria": "Inexistente", "cantidad": -1}],
        "distanciaKm": 0.0,
        "tipoClima": "Normal"
    }
    res_3 = simularPedidoComidaUrbana(orden_erronea)
    assert res_3["estado"] == "Orden Invalida"
    assert res_3["costoComida"] == 0.0

ejecutarPruebasComidaUrbana()