def calcular_puntaje_ranking(participantes, bono, penalizacion):
    # 1. Validaciones de casos borde
    if not participantes or len(participantes) == 0:
        return {"error": "La lista de participantes no puede estar vacía."}
        
    # 2. Proceso y Razonamiento Cuantitativo
    # Encontrar el valor máximo de la lista de participantes para la base
    max_participantes = max(participantes)
    
    # Calcular el puntaje final aplicando las reglas
    puntaje_final = max_participantes + bono - penalizacion
    
    # 3. Definir Clasificación según el resultado
    clasificacion = "inicial"
    if puntaje_final >= 25:
        clasificacion = "competitivo"
    elif puntaje_final >= 15:
        clasificacion = "intermedio"
        
    # 4. Salida Esperada
    return {
        "puntaje_final": puntaje_final,
        "clasificacion": clasificacion,
        "explicacion": "Se determinó el máximo de participantes, se sumó el bono y se restó la penalización según las reglas proporcionales."
    }

# === PRUEBAS DEL RETO ===

# Prueba 1: Caso Ejemplo del Enunciado
print("--- Caso de Prueba Ejemplo ---")
print(calcular_puntaje_ranking([12, 18, 25, 30], 8, 3))

# Prueba 2: Caso de Prueba Propio (Normal)
print("\n--- Caso de Prueba Propio ---")
print(calcular_puntaje_ranking([10, 15, 20], 5, 2))

# Prueba 3: Caso Borde (Valores mínimos)
print("\n--- Caso de Prueba Borde ---")
print(calcular_puntaje_ranking([5], 0, 4))