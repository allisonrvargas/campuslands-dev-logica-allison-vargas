def filtrarInventarioMotosAvanzado(inventario, precioMinimo, precioMaximo, transmisionRequerida):
    # Regla 1: Validar consistencia del rango de precios de búsqueda
    if precioMinimo < 0 or precioMaximo < precioMinimo:
        return []

    # Control de lista vacía
    if not inventario:
        return []

    motosSeleccionadas = []
    transmisionBusqueda = transmisionRequerida.strip().lower()

    for moto in inventario:
        # Extraer atributos individuales
        transmisionMoto = moto.get("transmision", "").strip().lower()
        precioMoto = moto.get("precio", 0.0)
        stockMoto = moto.get("unidadesDisponibles", 0)

        # Regla 2 y 3: Evaluar los filtros concurrentes de coincidencia
        if (transmisionMoto == transmissionBusqueda and 
            precioMinimo <= precioMoto <= precioMaximo and 
            stockMoto > 0):
            
            motosSeleccionadas.append(moto)

    return motosSeleccionadas

def ejecutarPruebasMotosAvanzado():
    # Catálogo de pruebas
    catalogoMotos = [
        {"modelo": "Sport 300", "transmision": "Manual", "precio": 5500.0, "unidadesDisponibles": 4},
        {"modelo": "Hyper Tourer", "transmision": "Manual", "precio": 14000.0, "unidadesDisponibles": 2},
        {"modelo": "Scooter City", "transmision": "Automática", "precio": 4500.0, "unidadesDisponibles": 10},
        {"modelo": "Naked 600", "transmision": "Manual", "precio": 7500.0, "unidadesDisponibles": 0}
    ]

    # Caso 1: Filtro normal (Sport 300 debe calificar; Naked 600 no tiene stock, Hyper Tourer cara)
    resultado1 = filtrarInventarioMotosAvanzado(catalogoMotos, 4000, 9000, "Manual")
    assert len(resultado1) == 1
    assert resultado1[0]["modelo"] == "Sport 300"

    # Caso 2: Filtro automática en rango
    resultado2 = filtrarInventarioMotosAvanzado(catalogoMotos, 3000, 6000, "Automática")
    assert len(resultado2) == 1
    assert resultado2[0]["modelo"] == "Scooter City"

    # Caso 3: Error en el rango de precios solicitado (Mínimo mayor que máximo)
    resultadoInvalido = filtrarInventarioMotosAvanzado(catalogoMotos, 10000, 5000, "Manual")
    assert resultadoInvalido == []

ejecutarPruebasMotosAvanzado()