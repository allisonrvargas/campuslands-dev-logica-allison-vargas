def filtrarInventarioMotos(inventario, cilindradaMinima):
    # Regla 3: Control de catálogo vacío
    if not inventario:
        return []

    LIMITE_PRESUPUESTO = 10000.0
    motosFiltradas = []

    for moto in inventario:
        # Regla 1 y 2: Validar condiciones concurrentes de cilindrada y precio
        if moto["cilindrada"] >= cilindradaMinima and moto["precio"] <= LIMITE_PRESUPUESTO:
            motosFiltradas.append(moto)

    return motosFiltradas

def ejecutarPruebasFiltros():
    # Caso 1: Filtrado normal (Una califica, una se pasa de precio, otra no llega a cilindrada)
    catalogo = [
        {"modelo": "Scooter 150", "cilindrada": 150, "precio": 2500.0},
        {"modelo": "Sport 600", "cilindrada": 600, "precio": 8500.0},
        {"modelo": "Touring 1200", "cilindrada": 1200, "precio": 15000.0}
    ]
    
    resultado = filtrarInventarioMotos(catalogo, 250)
    assert len(resultado) == 1
    assert resultado[0]["modelo"] == "Sport 600"

    # Caso 2: Ninguna cumple con el mínimo de cilindrada
    catalogoBajo = [{"modelo": "Moped 100", "cilindrada": 100, "precio": 1500.0}]
    resultadoVacio = filtrarInventarioMotos(catalogoBajo, 250)
    assert resultadoVacio == []

    # Caso 3: Entrada vacía
    assert filtrarInventarioMotos([], 125) == []

ejecutarPruebasFiltros()