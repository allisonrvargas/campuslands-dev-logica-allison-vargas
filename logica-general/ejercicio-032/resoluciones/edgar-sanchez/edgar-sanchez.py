def seleccionarPalaOptima(oponente, opcionesPalas):
    reporte = {
        "palaRecomendada": "Ninguna",
        "estrategia": "Indefinida"
    }

    # Regla 3: Validar consistencia de datos de entrada
    estilos_validos = ["Atacante", "Defensivo"]
    if not opcionesPalas or oponente.get("estilo") not in estilos_validos:
        return reporte

    estilo_rival = oponente["estilo"]

    # Regla 1: Definir la estrategia y las llaves de prioridad según el rival
    if estilo_rival == "Atacante":
        reporte["estrategia"] = "Contrapeso de Control"
        # Para ordenar de mayor a menor usando sorted(), invertimos el valor con un signo menos
        # Tupla de ordenamiento: (-AtributoPrincipal, -AtributoSecundario)
        llave_ordenamiento = lambda pala: (-pala.get("control", 0), -pala.get("ataque", 0))
    else:
        reporte["estrategia"] = "Ofensiva Total"
        llave_ordenamiento = lambda pala: (-pala.get("ataque", 0), -pala.get("control", 0))

    # Regla 2: Ordenar las palas aplicando el criterio de prioridad y desempate
    palas_ordenadas = sorted(opcionesPalas, key=llave_ordenamiento)

    # Seleccionar la mejor opción (la primera de la lista ordenada)
    reporte["palaRecomendada"] = palas_ordenadas[0]["nombre"]
    return reporte

def ejecutarPruebasPingPong():
    # Inventario de palas para las pruebas
    inventario = [
        {"nombre": "Pala Alpha", "control": 9, "ataque": 6},
        {"nombre": "Pala Beta", "control": 7, "ataque": 9},
        {"nombre": "Striker X", "control": 5, "ataque": 8},
        {"nombre": "Striker Y", "control": 7, "ataque": 8}
    ]

    # Caso 1: Contra oponente Atacante se prioriza control (Pala Alpha tiene 9)
    rival_atacante = {"estilo": "Atacante", "velocidadRemate": 8}
    prueba_1 = seleccionarPalaOptima(rival_atacante, inventario)
    assert prueba_1["palaRecomendada"] == "Pala Alpha"
    assert prueba_1["estrategia"] == "Contrapeso de Control"

    # Caso 2: Contra oponente Defensivo se prioriza ataque. 
    # Beta tiene 9. Striker X y Y tienen 8 (Y gana a X por desempate de control, pero Beta les gana a ambas)
    rival_defensivo = {"estilo": "Defensivo", "velocidadRemate": 4}
    prueba_2 = seleccionarPalaOptima(rival_defensivo, inventario)
    assert prueba_2["palaRecomendada"] == "Pala Beta"
    assert prueba_2["estrategia"] == "Ofensiva Total"

    # Caso 3: Evaluación de desempate estricto entre Striker X y Striker Y ante un rival defensivo
    sub_inventario = [
        {"nombre": "Striker X", "control": 5, "ataque": 8},
        {"nombre": "Striker Y", "control": 7, "ataque": 8}
    ]
    prueba_desempate = seleccionarPalaOptima(rival_defensivo, sub_inventario)
    assert prueba_desempate["palaRecomendada"] == "Striker Y"

ejecutarPruebasPingPong()