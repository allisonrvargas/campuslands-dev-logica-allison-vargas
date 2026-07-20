import math

def analizar_aterrizaje_paracaidismo(posicion_x, posicion_y):
    # Definición de la diana central (coordenadas origen del plano)
    CENTRO_X, CENTRO_Y = 0.0, 0.0
    # Umbral de precisión en metros exigido por el reglamento
    RADIO_PRECISION_MAX = 15.0
    
    # 1. Calcular la distancia euclidiana usando el Teorema de Pitágoras
    # Distancia = sqrt((x2 - x1)^2 + (y2 - y1)^2)
    distancia_centro = math.sqrt((posicion_x - CENTRO_X)**2 + (posicion_y - CENTRO_Y)**2)
    
    # 2. Evaluar reglas de negocio condicionales
    if distancia_centro <= RADIO_PRECISION_MAX:
        diagnostico = "Aterrizaje de Alta Precisión (Puntuación Máxima)"
        salto_perfecto = True
    else:
        diagnostico = "Aterrizaje Fuera del Radio de Precisión Estándar"
        salto_perfecto = False
        
    return round(distancia_centro, 2), diagnostico, salto_perfecto


if __name__ == "__main__":
    print("=== SISTEMA DE TELEMETRÍA Y COORDENADAS: PARACAIDISMO ===")
    print("Ingresa la posición cartesiana (X, Y) de aterrizaje respecto al centro (0,0):\n")
    
    try:
        # Captura de datos interactiva dentro del bloque de control de excepciones
        x = float(input("Coordenada X de aterrizaje (en metros): "))
        y = float(input("Coordenada Y de aterrizaje (en metros): "))
        
        # Procesamiento de la geometría de coordenadas y distancias
        distancia, reporte_tecnico, es_perfecto = analizar_aterrizaje_paracaidismo(x, y)
        
        print("\n=============================================")
        print("🪂 REPORTE TÉCNICO DEL SALTO:")
        print(f"-> Punto de impacto registrado: ({x}, {y})")
        print(f"-> Distancia lineal hacia la diana: {distancia} metros")
        print("---------------------------------------------")
        print(f"-> Veredicto del salto: {reporte_tecnico}")
        
        if es_perfecto:
            print("🏆 ¡CERTIFICACIÓN OTORGADA! El paracaidista dominó las corrientes de aire.")
        else:
            print("🔄 NOTA: Se sugiere corregir el ángulo de planeo antes de la apertura del paracaídas.")
        print("=============================================")
        
    except ValueError:
        # Captura errores de sintaxis en el input de la terminal de tu Mac
        print("\n⚠️ Error: Por favor, introduce únicamente coordenadas numéricas válidas.")