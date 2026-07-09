def analizar_secuencia_playlist(duraciones_canciones_min):
    # Límite estricto de la secuencia de reproducción continua
    MAX_TIEMPO_BLOQUE_MIN = 15.0
    MIN_CANCIONES_SECUENCIA = 3
    
    # 1. Procesar la secuencia matemática
    total_canciones = len(duraciones_canciones_min)
    tiempo_total_acumulado = sum(duraciones_canciones_min)
    
    # 2. Evaluar reglas de negocio basadas en la secuencia de escucha
    if total_canciones >= MIN_CANCIONES_SECUENCIA and tiempo_total_acumulado <= MAX_TIEMPO_BLOQUE_MIN:
        bloque_eficiente = True
    else:
        bloque_eficiente = False
        
    return total_canciones, round(tiempo_total_acumulado, 2), bloque_eficiente


if __name__ == "__main__":
    print("=== SISTEMA DE ANÁLISIS DE SECUENCIAS: PLAYLIST MUSICAL ===")
    print("Ingresa la duración en minutos de las canciones reproducidas consecutivamente.")
    print("Introduce cada duración y presiona Enter. Escribe 'fin' para procesar la secuencia:\n")
    
    secuencia_duraciones = []
    
    while True:
        entrada = input("Duración de la canción en minutos (o 'fin'): ").strip().lower()
        if entrada == 'fin':
            break
        try:
            duracion = float(entrada)
            if duracion > 0:
                secuencia_duraciones.append(duracion)
            else:
                print("La duración de una canción debe ser mayor a 0 minutos.")
        except ValueError:
            print("Entrada no válida. Por favor, ingresa un número decimal o 'fin'.")
            
    # Procesamiento y despliegue de resultados controlados
    if secuencia_duraciones:
        canciones, tiempo_acumulado, es_eficiente = analizar_secuencia_playlist(secuencia_duraciones)
        
        print("\n=============================================")
        print("REPORTE DE SECUENCIA REPRODUCIDA:")
        print(f"-> Canciones consecutivas en la secuencia: {canciones}")
        print(f"-> Tiempo total de reproducción: {tiempo_acumulado} minutos")
        print("---------------------------------------------")
        
        if es_eficiente:
            print("¡SECUENCIA ÓPTIMA! Bloque de escucha fluido y balanceado cumplido.")
        else:
            print("SECUENCIA INEFICIENTE: No cumple la proporción de pistas o excede los 15 minutos continuos.")
        print("=============================================")
    else:
        print("\nNo se registraron datos numéricos para procesar la secuencia.")