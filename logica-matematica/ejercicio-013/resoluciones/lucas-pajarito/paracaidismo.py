from math import sqrt

saltos = [
    {
        "participante": "Carlos",
        "x1": 2,
        "y1": 3,
        "x2": 8,
        "y2": 10
    },
    {
        "participante": "Laura",
        "x1": 5,
        "y1": 1,
        "x2": 12,
        "y2": 9
    },
    {
        "participante": "Miguel",
        "x1": 0,
        "y1": 0,
        "x2": 6,
        "y2": 8
    },
    {
        "participante": "Sofía",
        "x1": 3,
        "y1": 7,
        "x2": 9,
        "y2": 15
    },
    {
        "participante": "Andrés",
        "x1": 4,
        "y1": 2,
        "x2": 10,
        "y2": 11
    }
]


def calcular_distancia(saltos):

    print("=== DISTANCIA DEL SALTO ===")

    for salto in saltos:

        distancia = sqrt(
            (salto["x2"] - salto["x1"])**2 +
            (salto["y2"] - salto["y1"])**2
        )

        print(f'Participante: {salto["participante"]}')
        print(f'Punto inicial: ({salto["x1"]}, {salto["y1"]})')
        print(f'Punto final: ({salto["x2"]}, {salto["y2"]})')
        print(f'Distancia recorrida: {distancia:.2f} metros')
        print("---------------------------------")


calcular_distancia(saltos)