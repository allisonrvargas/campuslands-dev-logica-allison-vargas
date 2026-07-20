def validar_metraje(proyecto):
    return proyecto["duracion"] > 0

def evaluar_fase_argumental(proyecto):
    if proyecto["es_paradoja"] and proyecto["duracion"] < 90:
        return False
    return True

def calcular_presupuesto_vfx(proyecto):
    costo = proyecto["duracion"] * 2000
    if proyecto["requiere_vfx"]:
        multiplicador = 1.50 if proyecto["es_paradoja"] else 1.30
        costo *= multiplicador
    return costo

def evaluar_flujo_completo(proyecto):
    if not validar_metraje(proyecto):
        return "Error: Metraje inválido"
        
    if not evaluar_fase_argumental(proyecto):
        return "Rechazado: Trama compleja requiere mayor metraje"
        
    presupuesto_total = calcular_presupuesto_vfx(proyecto)
    
    if presupuesto_total > 300000:
        return f"Rechazado: Presupuesto de {presupuesto_total} USD excede el límite corporativo"
        
    return f"Aprobado para filmación | Presupuesto: {presupuesto_total} USD"

pelicula_scifi = {
    "titulo": "Chronos 2026",
    "es_paradoja": True,
    "duracion": 95,
    "requiere_vfx": True
}

diagnostico_estudio = evaluar_flujo_completo(pelicula_scifi)

print("Evaluación de la Productora:")
print(diagnostico_estudio)