def buscarHiperdeportivoOptimo(catalogo, velocidadMinimaRequerida, presupuestoMaximo):
    if not catalogo:
        return None

    auto_optimo = None
    mejor_relacion = float('inf')

    for auto in catalogo:
        vel = auto.get("velocidadMaxima", 0)
        peso = auto.get("pesoKg", 0)
        hp = auto.get("caballosFuerza", 0)
        precio = auto.get("precioMilones", 0.0)

        if vel <= 0 or peso <= 0 or hp <= 0 or precio <= 0.0:
            continue

        if vel >= velocidadMinimaRequerida and precio <= presupuestoMaximo:
            relacion_actual = peso / hp
            
            if relacion_actual < mejor_relacion:
                mejor_relacion = relacion_actual
                auto_optimo = auto

    return auto_optimo

def ejecutarPruebasHiperdeportivos():
    catalogo_autos = [
        {"marca": "Bugatti", "modelo": "Chiron", "velocidadMaxima": 420, "pesoKg": 1995, "caballosFuerza": 1500, "precioMilones": 3.2},
        {"marca": "Koenigsegg", "modelo": "Jesko", "velocidadMaxima": 480, "pesoKg": 1420, "caballosFuerza": 1600, "precioMilones": 3.0},
        {"marca": "Pagani", "modelo": "Huayra", "velocidadMaxima": 383, "pesoKg": 1350, "caballosFuerza": 730, "precioMilones": 2.8},
        {"marca": "Invalido", "modelo": "X", "velocidadMaxima": 500, "pesoKg": -1000, "caballosFuerza": 1000, "precioMilones": 1.0}
    ]

    resultado_1 = buscarHiperdeportivoOptimo(catalogo_autos, 400, 3.5)
    assert resultado_1 is not None
    assert resultado_1["modelo"] == "Jesko"

    resultado_2 = buscarHiperdeportivoOptimo(catalogo_autos, 350, 2.0)
    assert resultado_2 is None

    resultado_3 = buscarHiperdeportivoOptimo([], 400, 5.0)
    assert resultado_3 is None

ejecutarPruebasHiperdeportivos()