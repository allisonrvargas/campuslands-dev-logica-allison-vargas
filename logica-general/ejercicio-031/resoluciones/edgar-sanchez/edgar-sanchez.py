def organizarTorneoKickboxing(atletas):
    # Regla 3: Control de lista inicial vacía
    if not atletas:
        return []

    atletas_aptos = []
    PESO_MINIMO = 50.0

    # Regla 1: Filtrar competidores por peso mínimo reglamentario
    for atleta in atletas:
        if atleta.get("pesoKg", 0.0) >= PESO_MINIMO:
            atletas_aptos.append(atleta)

    # Regla 2: Ordenamiento avanzado multi-llave
    # - "peleasGanadas" de forma descendente (usamos el signo menos para invertir el orden numérico)
    # - "pesoKg" de forma ascendente en caso de empate
    atletas_organizados = sorted(
        atletas_aptos, 
        key=lambda x: (-x.get("peleasGanadas", 0), x.get("pesoKg", 0.0))
    )

    return atletas_organizados

def ejecutarPruebasKickboxing():
    # Caso 1: Filtrado y ordenamiento común (Uno queda fuera por peso)
    competidores = [
        {"nombre": "Carlos", "pesoKg": 72.5, "peleasGanadas": 12},
        {"nombre": "Luis", "pesoKg": 65.0, "peleasGanadas": 15},
        {"nombre": "Andrés", "pesoKg": 48.0, "peleasGanadas": 5}
    ]
    resultado1 = organizarTorneoKickboxing(competidores)
    assert len(resultado1) == 2
    assert resultado1[0]["nombre"] == "Luis"
    assert resultado1[1]["nombre"] == "Carlos"

    # Caso 2: Desempate por peso (Misma cantidad de victorias)
    empate_victorias = [
        {"nombre": "Juan", "pesoKg": 80.0, "peleasGanadas": 10},
        {"nombre": "Pedro", "pesoKg": 70.0, "peleasGanadas": 10}
    ]
    resultado2 = organizarTorneoKickboxing(empate_victorias)
    assert resultado2[0]["nombre"] == "Pedro"  # Pedro va primero por pesar menos
    assert resultado2[1]["nombre"] == "Juan"

    # Caso 3: Ninguno cumple el peso
    pesos_bajos = [{"nombre": "Santi", "pesoKg": 45.0, "peleasGanadas": 20}]
    assert organizarTorneoKickboxing(pesos_bajos) == []

ejecutarPruebasKickboxing()