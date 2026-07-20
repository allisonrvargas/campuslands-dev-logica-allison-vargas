def filtrar_motos_disponibles(inventario, presupuesto_max, marca_deseada):
    if not inventario:
        return "Error: El inventario está vacío"
        
    motos_sugeridas = []
    
    for moto in inventario:
        if moto["precio"] <= presupuesto_max:
            if moto["marca"].lower() == marca_deseada.lower():
                if moto["stock"] > 0:
                    motos_sugeridas.append(moto["modelo"])
                elif moto["permite_reserva"]:
                    motos_sugeridas.append(f"{moto['modelo']} (Bajo Reserva)")
                    
    if len(motos_sugeridas) > 0:
        return motos_sugeridas
    else:
        return "No hay motos disponibles que cumplan los criterios"

lista_motos = [
    {"modelo": "Street 250", "marca": "Suzuki", "precio": 3500, "stock": 4, "permite_reserva": False},
    {"modelo": "Cruiser 400", "marca": "Suzuki", "precio": 4800, "stock": 0, "permite_reserva": True},
    {"modelo": "Enduro 150", "marca": "Honda", "precio": 2800, "stock": 2, "permite_reserva": False},
    {"modelo": "Sport 600", "marca": "Suzuki", "precio": 7000, "stock": 1, "permite_reserva": False}
]

presupuesto = 5000
marca_buscada = "Suzuki"

resultado_filtro = filtrar_motos_disponibles(lista_motos, presupuesto, marca_buscada)

print("Presupuesto Máximo:", presupuesto)
print("Marca Buscada:", marca_buscada)
print("Motos encontradas:", resultado_filtro)