def calcular_probabilidad_servicio(puntos_ganados, saques_totales):
    # Regla de control: Si no hay saques, la probabilidad es indeterminable
    if saques_totales == 0:
        return 0.0, "Partido no iniciado (Sin registros)", False
        
    UMBRAL_EFECTIVIDAD = 60.0
    
    # 1. Aplicar fórmula clásica de probabilidad empírica (Casos favorables / Casos totales)
    probabilidad = (puntos_ganados / saques_totales) * 100
    
    # 2. Evaluar reglas de negocio condicionales
    if probabilidad >= UMBRAL_EFECTIVIDAD:
        estatus = "Dominio Total (Zona de ventaja competitiva alta)"
        zona_segura = True
    else:
        estatus = "Servicio Vulnerable (Requiere variación de efectos)"
        zona_segura = False
        
    return round(probabilidad, 1), estatus, zona_segura


if __name__ == "__main__":
    print("=== MONITOR DE RENDIMIENTO: TENIS DE MESA ===")
    print("Por favor, introduce las métricas de juego del set actual:\n")
    
    try:
        # Captura de datos interactiva dentro de bloques de control de excepciones
        favorables = int(input("Puntos anotados usando el propio saque: "))
        totales = int(input("Cantidad total de saques realizados: "))
        
        # Validaciones de consistencia de magnitudes lógicas
        if favorables < 0 or totales < 0:
            print("\n⚠️ Error: No se admiten registros estadísticos negativos.")
        elif favorables > totales:
            print("\n⚠️ Error lógico: Los casos favorables no pueden exceder el universo de saques.")
        else:
            # Procesamiento de la solución estructurada
            porcentaje, diagnostico, aprobado = calcular_probabilidad_servicio(favorables, totales)
            
            print("\n=============================================")
            print("🏓 BALANCE PROBABILÍSTICO DE SERVICIO:")
            print(f"-> Probabilidad empírica de éxito: {porcentaje}%")
            print(f"-> Diagnóstico técnico: {diagnostico}")
            print("=============================================")
            
    except ValueError:
        print("\n⚠️ Error: Por favor, introduce únicamente números enteros en la terminal.")