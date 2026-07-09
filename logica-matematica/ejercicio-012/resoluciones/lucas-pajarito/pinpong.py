partidos = [
    {
        "jugador": "Carlos",
        "victorias": 8,
        "partidos": 10
    },
    {
        "jugador": "Laura",
        "victorias": 6,
        "partidos": 10
    },
    {
        "jugador": "Miguel",
        "victorias": 9,
        "partidos": 12
    },
    {
        "jugador": "Sofía",
        "victorias": 7,
        "partidos": 8
    },
    {
        "jugador": "Andrés",
        "victorias": 5,
        "partidos": 9
    }
]


def calcular_probabilidad(partidos):

    print("=== PROBABILIDAD DE VICTORIA ===")

    for jugador in partidos:

        probabilidad = jugador["victorias"] / jugador["partidos"]
        porcentaje = probabilidad * 100

        print(f'Jugador: {jugador["jugador"]}')
        print(f'Victorias: {jugador["victorias"]}')
        print(f'Partidos jugados: {jugador["partidos"]}')
        print(f'Probabilidad de victoria: {probabilidad:.2f}')
        print(f'Porcentaje de victoria: {porcentaje:.2f}%')
        print("---------------------------------")


calcular_probabilidad(partidos)