def clasificar_limite_pieza(nivel, minimo, critico):
    if nivel < critico:
        return "Fallo Crítico"
    if nivel < minimo:
        return "Cambio Preventivo"
    return "OK"

def auditar_vehiculo_avanzado(inventario_estado, limite_critico):
    if not isinstance(inventario_estado, list) or len(inventario_estado) == 0:
        return "Error: Formato de inspección incorrecto"

    analisis = [
        {"pieza": p["pieza"], "estado": clasificar_limite_pieza(p["nivel"], p["minimo_requerido"], limite_critico)}
        for p in inventario_estado
    ]
    
    alertas = [f"{a['pieza']} ({a['estado']})" for a in analisis if a["estado"] != "OK"]
    
    return alertas if alertas else "Vehículo Seguro para Transitar"

reporte_taller = [
    {"pieza": "Líquido de Frenos", "nivel": 45, "minimo_requerido": 60},
    {"pieza": "Aceite de Motor", "nivel": 15, "minimo_requerido": 50},
    {"pieza": "Líquido Refrigerante", "nivel": 80, "minimo_requerido": 70}
]

resultado_auditoria = auditar_vehiculo_avanzado(reporte_taller, 20)

print("Reporte del Scanner Automotriz:", resultado_auditoria)