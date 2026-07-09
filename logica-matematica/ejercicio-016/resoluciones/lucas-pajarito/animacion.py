proyectos = [
    {
        "nombre": "Personaje Principal",
        "presupuesto": 2500,
        "descuento": 10
    },
    {
        "nombre": "Escenario Medieval",
        "presupuesto": 4000,
        "descuento": 15
    },
    {
        "nombre": "Animación de Vehículo",
        "presupuesto": 3200,
        "descuento": 8
    },
    {
        "nombre": "Modelado de Casa",
        "presupuesto": 1800,
        "descuento": 5
    },
    {
        "nombre": "Efectos Especiales",
        "presupuesto": 5000,
        "descuento": 20
    }
]


def calcular_presupuesto(proyectos):

    print("=== PRESUPUESTOS DE ANIMACIÓN 3D ===")

    for proyecto in proyectos:

        descuento = proyecto["presupuesto"] * (proyecto["descuento"] / 100)
        total = proyecto["presupuesto"] - descuento

        print(f'Proyecto: {proyecto["nombre"]}')
        print(f'Presupuesto inicial: Q{proyecto["presupuesto"]:.2f}')
        print(f'Descuento: {proyecto["descuento"]}%')
        print(f'Monto del descuento: Q{descuento:.2f}')
        print(f'Costo final: Q{total:.2f}')
        print("--------------------------------------")


calcular_presupuesto(proyectos)