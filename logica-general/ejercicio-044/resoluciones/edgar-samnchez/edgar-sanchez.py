def filtrarInventarioMotos(motos):
    if not motos:
        return []

    motos_aptas = []
    
    for moto in motos:
        cc = moto.get("cilindradaCc", 0)
        km = moto.get("kilometraje", 0)
        legal = moto.get("tecnicoMecanicaAlDia", False)

        if cc < 0 or km < 0:
            continue

        if km <= 45000 and cc >= 100 and legal:
            motos_aptas.append(moto)

    return motos_aptas

def ejecutarPruebasMotos():
    inventario = [
        {"modelo": "Moto A", "cilindradaCc": 150, "kilometraje": 12000, "tecnicoMecanicaAlDia": True},
        {"modelo": "Moto B", "cilindradaCc": 250, "kilometraje": 50000, "tecnicoMecanicaAlDia": True},
        {"modelo": "Moto C", "cilindradaCc": 99, "kilometraje": 1000, "tecnicoMecanicaAlDia": True},
        {"modelo": "Moto D", "cilindradaCc": 200, "kilometraje": 5000, "tecnicoMecanicaAlDia": False},
        {"modelo": "Moto E", "cilindradaCc": -50, "kilometraje": 2000, "tecnicoMecanicaAlDia": True}
    ]

    resultado = filtrarInventarioMotos(inventario)
    assert len(resultado) == 1
    assert resultado[0]["modelo"] == "Moto A"
    assert filtrarInventarioMotos([]) == []

ejecutarPruebasMotos()