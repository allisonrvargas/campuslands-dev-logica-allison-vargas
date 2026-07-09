def procesar_instrucciones_viaje(destino, dias, edad_viajero, es_temporada_alta):
    if dias <= 0 or edad_viajero <= 0:
        return "Error: Parámetros de viaje no válidos"
        
    destino_limpio = destino.strip().upper()
    
    if edad_viajero < 18 and destino_limpio == "EUROPA":
        return "Restricción: Los menores de edad requieren un tutor para el destino Europa"
        
    if destino_limpio == "EUROPA":
        costo_diario = 150
    elif destino_limpio == "CARIBE":
        costo_diario = 120
    else:
        costo_diario = 90
        
    costo_base = dias * costo_diario
    
    if es_temporada_alta:
        costo_base *= 1.20
        
    if dias > 10:
        costo_final = costo_base * 0.90
    else:
        costo_final = costo_base
        
    return f"Itinerario Procesado para {destino_limpio} | Costo Total: {round(costo_final)} USD"

lugar = "Caribe "
tiempo_estadia = 12
edad = 25
alta_demanda = False

resultado_reserva = procesar_instrucciones_viaje(lugar, tiempo_estadia, edad, alta_demanda)

print("Estado de la Solicitud de Viaje:")
print(resultado_reserva)