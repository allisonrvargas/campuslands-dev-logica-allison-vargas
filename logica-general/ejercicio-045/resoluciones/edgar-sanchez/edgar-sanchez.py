def organizarPrioridadesTaller(ordenes):
    if not ordenes:
        return []

    ordenes_validas = []
    pesos_falla = {"Critica": 3, "Media": 2, "Leve": 1}

    for orden in ordenes:
        falla = orden.get("falla")
        horas = orden.get("horasEstimadas", 0)
        
        if falla not in pesos_falla or horas <= 0:
            continue
            
        ordenes_validas.append(orden)

    ordenes_priorizadas = sorted(
        ordenes_validas,
        key=lambda x: (
            -pesos_falla[x["falla"]],
            -int(x.get("esPremium", False)),
            x.get("horasEstimadas", 0)
        )
    )

    return ordenes_priorizadas

def ejecutarPruebasTaller():
    lista_ingreso = [
        {"id": 1, "falla": "Media", "esPremium": False, "horasEstimadas": 4},
        {"id": 2, "falla": "Critica", "esPremium": False, "horasEstimadas": 8},
        {"id": 3, "falla": "Media", "esPremium": True, "horasEstimadas": 2},
        {"id": 4, "falla": "Leve", "esPremium": True, "horasEstimadas": 5},
        {"id": 5, "falla": "Leve", "esPremium": True, "horasEstimadas": 1},
        {"id": 6, "falla": "Invalida", "esPremium": False, "horasEstimadas": 2},
        {"id": 7, "falla": "Critica", "esPremium": False, "horasEstimadas": -1}
    ]

    resultado = organizarPrioridadesTaller(lista_ingreso)
    
    assert len(resultado) == 5
    assert resultado[0]["id"] == 2
    assert resultado[1]["id"] == 3
    assert resultado[2]["id"] == 1
    assert resultado[3]["id"] == 5
    assert resultado[4]["id"] == 4
    assert organizarPrioridadesTaller([]) == []

ejecutarPruebasTaller()