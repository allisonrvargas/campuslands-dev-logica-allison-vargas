tatuajes = [
    {
        "cliente": "Carlos",
        "largo": 12,
        "ancho": 8
    },
    {
        "cliente": "Laura",
        "largo": 15,
        "ancho": 10
    },
    {
        "cliente": "Miguel",
        "largo": 20,
        "ancho": 12
    },
    {
        "cliente": "Sofía",
        "largo": 18,
        "ancho": 9
    },
    {
        "cliente": "Andrés",
        "largo": 10,
        "ancho": 6
    }
]


def calcular_area_perimetro(tatuajes):

    print("=== ÁREA Y PERÍMETRO DE TATUAJES ===")

    for tatuaje in tatuajes:

        area = tatuaje["largo"] * tatuaje["ancho"]
        perimetro = 2 * (tatuaje["largo"] + tatuaje["ancho"])

        print(f'Cliente: {tatuaje["cliente"]}')
        print(f'Largo: {tatuaje["largo"]} cm')
        print(f'Ancho: {tatuaje["ancho"]} cm')
        print(f'Área: {area} cm²')
        print(f'Perímetro: {perimetro} cm')
        print("---------------------------------")


calcular_area_perimetro(tatuajes)