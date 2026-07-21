def analizarFormulaQuimica(formula):
    reporte = {
        "cargaNeta": 0,
        "estabilidad": "Invalido",
        "valido": False
    }

    elementos = formula.get("elementos", [])
    
    # 1. Filtro de Integridad Molecular
    if len(elementos) < 2 or len(elementos) > 4:
        reporte["estabilidad"] = "Error: Cantidad de elementos fuera de rango"
        return reporte

    carga_neta = 0

    for el in elementos:
        simbolo = el.get("simbolo", "")
        atomos = el.get("cantidadAtomos", 0)
        valencia = el.get("estadoOxidacion", 0)

        # Validar átomos positivos
        if atomos <= 0:
            reporte["estabilidad"] = "Error: Atomos menores o iguales a cero"
            return reporte

        # 4. Excepción por Cargas Absurdas
        if valencia > 8 or valencia < -4:
            reporte["estabilidad"] = "Error de Valencia"
            return reporte

        # 2. Ley de Conservación de la Carga
        carga_neta += atomos * valencia

    # 3. Clasificación de Estabilidad Estequiométrica
    reporte["cargaNeta"] = carga_neta
    reporte["valido"] = True

    if carga_neta == 0:
        reporte["estabilidad"] = "Estable"
    elif abs(carga_neta) <= 3:
        reporte["estabilidad"] = "Ion Poliatomico Viable"
    else:
        reporte["estabilidad"] = "Inestable / Imposible"

    return reporte

def ejecutarPruebasQuimica():
    # Prueba 1: Molécula Estable (Dióxido de Carbono - CO2)
    co2 = {
        "compuesto": "Dióxido de Carbono",
        "elementos": [
            {"simbolo": "C", "cantidadAtomos": 1, "estadoOxidacion": 4},
            {"simbolo": "O", "cantidadAtomos": 2, "estadoOxidacion": -2}
        ]
    }
    res_1 = analizarFormulaQuimica(co2)
    assert res_1["cargaNeta"] == 0
    assert res_1["estabilidad"] == "Estable"
    assert res_1["valido"] is True

    # Prueba 2: Ion Viable (Nitrato - NO3)
    no3 = {
        "compuesto": "Ion Nitrato",
        "elementos": [
            {"simbolo": "N", "cantidadAtomos": 1, "estadoOxidacion": 5},
            {"simbolo": "O", "cantidadAtomos": 3, "estadoOxidacion": -2}
        ]
    }
    res_2 = analizarFormulaQuimica(no3)
    assert res_2["cargaNeta"] == -1
    assert res_2["estabilidad"] == "Ion Poliatomico Viable"

    # Prueba 3: Error de Valencia (Imposible físicamente)
    compuesto_erroneo = {
        "compuesto": "Fórmula Imposible",
        "elementos": [
            {"simbolo": "X", "cantidadAtomos": 1, "estadoOxidacion": 12},
            {"simbolo": "O", "cantidadAtomos": 2, "estadoOxidacion": -2}
        ]
    }
    res_3 = analizarFormulaQuimica(compuesto_erroneo)
    assert res_3["estabilidad"] == "Error de Valencia"
    assert res_3["valido"] is False

ejecutarPruebasQuimica()