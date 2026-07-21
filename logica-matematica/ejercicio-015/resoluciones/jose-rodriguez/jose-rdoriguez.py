def analizar_trazo_digital(velocidad_px_seg, tiempo_seg):
    # Umbral de distancia en pixeles para activar el gesto de trazo rápido (flick/swipe)
    LIMITE_DISTANCIA_GESTO = 150.0
    
    # 1. Aplicar la fórmula de movimiento rectilíneo uniforme (MRU)
    # Distancia = Velocidad * Tiempo
    distancia_trazo_px = velocidad_px_seg * tiempo_seg
    
    # 2. Evaluar reglas de negocio condicionales
    if distancia_trazo_px >= LIMITE_DISTANCIA_GESTO:
        activa_atajo = True
        diagnostico_software = "Gesto Dinámico Detectado: Activando herramienta de trazo rápido."
    else:
        activa_atajo = False
        diagnostico_software = "Trazo de Precisión Estándar: Renderizando línea continua de detalle."
        
    return round(distancia_trazo_px, 1), activa_atajo, diagnostico_software


if __name__ == "__main__":
    print("=== SISTEMA DE TELEMETRÍA DE ENTRADA: DIBUJO DIGITAL ===")
    print("Por favor, ingresa los datos capturados por el sensor del lápiz óptico:\n")
    
    try:
        # Captura de datos interactiva dentro del bloque de control de excepciones
        velocidad = float(input("Velocidad de movimiento del lápiz (en pixeles/segundo): "))
        tiempo = float(input("Tiempo de duración del trazo continuo (en segundos): "))
        
        # Validación física de las magnitudes de entrada
        if velocidad < 0 or tiempo < 0:
            print("\nError: La velocidad del puntero y el tiempo de ejecución no pueden ser negativos.")
        elif tiempo == 0:
            print("\nAlerta: Un trazo de 0 segundos no acumula distancia ni genera pixeles en el lienzo.")
        else:
            # Procesamiento de la lógica de velocidad, tiempo y distancia
            distancia_px, atajo, reporte_software = analizar_trazo_digital(velocidad, tiempo)
            
            print("\n=============================================")
            print("✏️ REPORTE VECTORIAL DEL LIENZO (BRUSH LOG):")
            print(f"-> Velocidad de entrada: {velocidad} px/s")
            print(f"-> Tiempo de contacto: {tiempo} s")
            print(f"-> Distancia lineal del trazo: {distancia_px} px")
            print("---------------------------------------------")
            print(f"-> Estado del Motor Gráfico: {reporte_software}")
            print("=============================================")
            
    except ValueError:
        # Control de excepciones para evitar fallos de sintaxis en la terminal de tu Mac
        print("\nError: Por favor, introduce únicamente valores numéricos válidos.")