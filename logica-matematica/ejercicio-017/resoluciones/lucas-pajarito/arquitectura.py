proyectos = [
    {
        "nombre": "Edificio Inteligente",
        "puntaje": 95
    },
    {
        "nombre": "Centro Comercial",
        "puntaje": 88
    },
    {
        "nombre": "Museo Moderno",
        "puntaje": 92
    },
    {
        "nombre": "Hospital Regional",
        "puntaje": 85
    },
    {
        "nombre": "Biblioteca Virtual",
        "puntaje": 90
    }
]


def calcular_estadisticas(proyectos):

    print("=== RANKING DE PROYECTOS 3D ===")

    suma = 0
    mayor = proyectos[0]["puntaje"]
    menor = proyectos[0]["puntaje"]

    for proyecto in proyectos:

        suma += proyecto["puntaje"]

        if proyecto["puntaje"] > mayor:
            mayor = proyecto["puntaje"]

        if proyecto["puntaje"] < menor:
            menor = proyecto["puntaje"]

        print(f'Proyecto: {proyecto["nombre"]}')
        print(f'Puntaje: {proyecto["puntaje"]}')
        print("-------------------------------")

    promedio = suma / len(proyectos)

    print(f'Puntaje promedio: {promedio:.2f}')
    print(f'Puntaje más alto: {mayor}')
    print(f'Puntaje más bajo: {menor}')


calcular_estadisticas(proyectos)