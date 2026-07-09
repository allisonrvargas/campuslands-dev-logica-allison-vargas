def analizar_tiempo_terror(duracion_minutos):
    # 1. Aplicar operadores de divisibilidad y módulo (%)
    # El operador % devuelve el residuo de una división. Si es 0, es divisible exactamente.
    es_divisible_13 = (duracion_minutos % 13 == 0)
    es_par = (duracion_minutos % 2 == 0)
    
    # 2. Evaluar reglas de negocio condicionales
    if es_divisible_13 and es_par:
        clasificacion_maraton = "Súper Especial (Ritmo maldito y balance de salas perfecto)"
        apta_para_maraton = True
    elif es_divisible_13:
        clasificacion_maraton = "Ritmo Maldito (Ideal para funciones nocturnas exclusivas)"
        apta_para_maraton = True
    elif es_par:
        clasificacion_maraton = "Estructura Estándar (Divisible en salas gemelas)"
        apta_para_maraton = False
    else:
        clasificacion_maraton = "Ritmo Asimétrico (No apta para la apertura del festival)"
        apta_para_maraton = False
        
    return es_divisible_13, es_par, clasificacion_maraton


if __name__ == "__main__":
    print("=== SISTEMA DE ASIGNACIÓN: MARATÓN DE TERROR ===")
    print("Por favor, ingresa la duración de la película de miedo:\n")
    
    try:
        # Captura de datos interactiva dentro del bloque de control de excepciones
        duracion = int(input("Ingresa la duración total de la película (en minutos): "))
        
        # Validación lógica de entrada para magnitudes de tiempo reales
        if duracion <= 0:
            print("\nError: Una película de miedo debe durar al menos más de 0 minutos para asustar.")
        else:
            # Procesamiento de la lógica de módulos y divisibilidad
            div_13, divisible_2, reporte_maraton = analizar_tiempo_terror(duracion)
            
            print("\n=============================================")
            print("REPORTE TÉCNICO DE LA PELÍCULA:")
            print(f"-> Duración evaluada: {duracion} minutos")
            print(f"-> ¿Es divisible exactamente entre 13?: {'Sí' if div_13 else 'No'}")
            print(f"-> ¿Es una duración par (divisible entre 2)?: {'Sí' if divisible_2 else 'No'}")
            print("---------------------------------------------")
            print(f"-> veredicto: {reporte_maraton}")
            print("=============================================")
            
    except ValueError:
        # Control para interceptar entradas de texto inválidas en la terminal de la Mac
        print("\nError: Por favor, introduce únicamente un número entero de minutos.")