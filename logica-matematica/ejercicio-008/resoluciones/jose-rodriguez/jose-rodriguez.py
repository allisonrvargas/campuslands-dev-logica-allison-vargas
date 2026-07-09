

def analizar_patron_puntuacion(nota_critica, nota_publico):
    # Umbrales lógicos del patrón de calificación (escala de 0 a 100)
    DISPARIDAD_CRITICA = 25.0  # Diferencia mínima para considerarse un patrón polarizado
    MIN_NOTA_CULTO = 80.0      # Nota mínima del público para ser considerado de culto
    
    # 1. Calcular el patrón matemático (Desviación absoluta)
    diferencia_absoluta = abs(nota_critica - nota_publico)
    
    # 2. Evaluar reglas de negocio del patrón cinematográfico
    if diferencia_absoluta >= DISPARIDAD_CRITICA and nota_publico >= MIN_NOTA_CULTO:
        categoria = "Clásico de Culto Lógico (Público la ama, Crítica la incomprendió)"
        es_patron_consistente = False
    elif diferencia_absoluta <= 10.0:
        categoria = "Consenso General (Patrón unificado de aceptación o rechazo)"
        es_patron_consistente = True
    else:
        categoria = "Patrón Estándar (Opiniones divididas moderadas)"
        es_patron_consistente = False
        
    return round(diferencia_absoluta, 1), categoria, es_patron_consistente


if __name__ == "__main__":
    print("=== SISTEMA DE ANÁLISIS DE PATRONES: CIENCIA FICCIÓN ===")
    print("Por favor, ingresa las calificaciones de la película (Escala 0 - 100):\n")
    
    try:
        # Captura de datos interactiva dentro del bloque de control
        critica = float(input("Puntuación de la Crítica Especializada: "))
        publico = float(input("Puntuación del Público General: "))
        
        # Validación de límites físicos de las notas
        if not (0 <= critica <= 100) or not (0 <= publico <= 100):
            print("\nError: Las puntuaciones deben establecerse estrictamente entre 0 y 100.")
        else:
            # Procesamiento de la lógica de patrones de puntuación
            dif, cat, consistente = analizar_patron_puntuacion(critica, publico)
            
            print("\n=============================================")
            print("🎬 REPORTE DE PATRÓN DE AUDIENCIA:")
            print(f"-> Desviación / Disparidad: {dif} puntos de diferencia")
            print(f"-> Clasificación del Patrón: {cat}")
            print("---------------------------------------------")
            
            if consistente:
                print("PATRÓN ESTABLE: Hay un claro consenso entre ambos sectores.")
            else:
                print("PATRÓN DISRUPTIVO: La película genera división en la comunidad.")
            print("=============================================")
            
    except ValueError:
        # Control de excepciones para evitar fallos de sintaxis en tiempo de ejecución
        print("\nError: Por favor, introduce únicamente valores numéricos válidos.")