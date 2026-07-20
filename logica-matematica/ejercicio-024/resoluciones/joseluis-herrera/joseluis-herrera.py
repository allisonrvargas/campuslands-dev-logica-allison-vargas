def evaluar_disponibilidad(moto):
    if moto["stock"] > 0:
        return moto["modelo"]
    elif moto["permite_reserva"]:
        return f"{moto['modelo']} (Bajo Reserva)"
    return None

def filtrar_inventario_avanzado(inventario, presupuesto_max, marca_deseada):
    if not isinstance(inventario, list) or len(inventario) == 0:
        return "Error: Estructura de inventario inválida"

    marca_limpia = marca_deseada.strip().lower()

    filtradas = [
        evaluar_disponibilidad(m) for m in inventario
        if m["precio"] <= presupuesto_max and m["marca"].lower() == marca_limpia
    ]
    
    motos_validas = [modelo for modelo in filtradas if modelo is not None]

    return motos_validas if motos_validas else "No hay motos disponibles que cumplan los criterios"

lista_motos = [
    {"modelo": "Street 250", "marca": "Suzuki", "precio": 3500, "stock": 4, "permite_reserva": False},
    {"modelo": "Cruiser 400", "marca": "Suzuki", "precio": 4800, "stock": 0, "permite_reserva": True},
    {"modelo": "Enduro 150", "marca": "Honda", "precio": 2800, "stock": 2, "permite_reserva": False}
]

resultado_avanzado = filtrar_inventario_avanzado(lista_motos, 4000, "Suzuki")

print("Resultado Filtrado Avanzado:", resultado_avanzado)