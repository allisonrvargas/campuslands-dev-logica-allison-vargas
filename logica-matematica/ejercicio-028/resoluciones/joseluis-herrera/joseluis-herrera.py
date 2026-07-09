def procesar_guion_scifi(es_paradoja, duracion, requiere_vfx):
    if duracion <= 0:
        return "Fase Cancelada: Duración de metraje no válida"
        
    fase_1_aprobada = False
    if es_paradoja and duracion < 90:
        fase_1_aprobada = False
    else:
        fase_1_aprobada = True
        
    if not fase_1_aprobada:
        return "Guión Rechazado en Fase 1: Paradoja temporal sin desarrollo suficiente"
        
    costo_base = duracion * 2000
    
    if requiere_vfx:
        if es_paradoja:
            costo_final = costo_base * 1.50
        else:
            costo_final = costo_base * 1.30
    else:
        costo_final = costo_base
        
    if costo_final > 300000:
        return f"Presupuesto Excedido: {costo_final} USD (Requiere co-producción)"
        
    return f"Guión Aprobado: Producción viable con presupuesto de {costo_final} USD"

paradoja = True
minutos = 110
vfx = True

resultado_flujo = procesar_guion_scifi(paradoja, minutos, vfx)

print("Estado del Proyecto Cinematográfico:")
print(resultado_flujo)