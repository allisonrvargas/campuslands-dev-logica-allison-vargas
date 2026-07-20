soldadores = [
    {
        "nombre": "Carlos",
        "puntaje": 75
    },
    {
        "nombre": "Laura",
        "puntaje": 90
    },
    {
        "nombre": "Miguel",
        "puntaje": 60
    },
    {
        "nombre": "Sofía",
        "puntaje": 85
    },
    {
        "nombre": "Andrés",
        "puntaje": 95
    }
]


def normalizar_puntajes(soldadores):

    print("=== NORMALIZACIÓN DE PUNTAJES ===")

    puntajes = [soldador["puntaje"] for soldador in soldadores]

    minimo = min(puntajes)
    maximo = max(puntajes)

    for soldador in soldadores:

        puntaje_normalizado = (
            (soldador["puntaje"] - minimo)
            / (maximo - minimo)
        ) * 100

        print(f'Soldador: {soldador["nombre"]}')
        print(f'Puntaje original: {soldador["puntaje"]}')
        print(f'Puntaje normalizado: {puntaje_normalizado:.2f}')
        print("---------------------------------")


normalizar_puntajes(soldadores)