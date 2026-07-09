def evaluar_estado_mecanico(inspeccion_componentes, limite_critico):
    if not inspeccion_componentes:
        return "Error: No hay datos de inspección"
        
    componentes_a_reparar = []
    
    for item in inspeccion_componentes:
        nombre = item["pieza"]
        nivel_actual = item["nivel"]
        nivel_minimo = item["minimo_requerido"]
        
        if nivel_actual < limite_critico:
            componentes_a_reparar.append(f"{nombre} (Fallo Crítico - Detener Vehículo)")
        elif nivel_actual < nivel_minimo:
            componentes_a_reparar.append(f"{nombre} (Cambio Preventivo)")
            
    if len(componentes_a_reparar) > 0:
        return componentes_a_reparar
    else:
        return "Vehículo en Óptimas Condiciones"

reporte_taller = [
    {"pieza": "Líquido de Frenos", "nivel": 45, "minimo_requerido": 60},
    {"pieza": "Aceite de Motor", "nivel": 15, "minimo_requerido": 50},
    {"pieza": "Líquido Refrigerante", "nivel": 80, "minimo_requerido": 70},
    {"pieza": "Pastillas de Freno", "nivel": 55, "minimo_requerido": 40}
]

limite_peligro = 20

diagnostico = evaluar_estado_mecanico(reporte_taller, limite_peligro)

print("Límite Crítico del Taller:", limite_peligro)
print("Diagnóstico de Reparaciones:", diagnostico)