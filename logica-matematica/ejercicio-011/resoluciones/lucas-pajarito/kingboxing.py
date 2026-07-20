from math import factorial

competidores = [
    {
        "categoria": "Peso Ligero",
        "peleadores": 8
    },
    {
        "categoria": "Peso Medio",
        "peleadores": 10
    },
    {
        "categoria": "Peso Pesado",
        "peleadores": 6
    }
]


def calcular_combinaciones(competidores):

    print("=== TORNEO DE KICKBOXING ===")

    for categoria in competidores:

        n = categoria["peleadores"]
        r = 2

        combinaciones = factorial(n) // (factorial(r) * factorial(n - r))

        print(f'Categoría: {categoria["categoria"]}')
        print(f'Número de peleadores: {n}')
        print(f'Posibles enfrentamientos: {combinaciones}')
        print("---------------------------------")


calcular_combinaciones(competidores)