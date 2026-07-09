# solucion_taller.py

def evaluar_estado_frenos(nivel_liquido_porcentaje, desgaste_pastillas_mm):
    # Definición de las constantes de seguridad (Límites y Mínimos)
    MINIMO_LIQUIDO = 40.0       # El líquido de frenos no debe bajar del 40%
    LIMITE_DESGASTE_MAX = 8.0   # El desgaste máximo permitido de la pastilla es 8.0 mm
    
    # Inicialización de banderas lógicas
    alerta_liquido = nivel_liquido_porcentaje < MINIMO_LIQUIDO
    alerta_pastillas = desgaste_pastillas_mm > LIMITE_DESGASTE_MAX
    
    # Evaluación de las reglas de control mediante operadores lógicos
    if alerta_liquido and alerta_pastillas:
        diagnostico = "CRÍTICO: El vehículo no es seguro para circular. Líquido bajo Y pastillas al límite."
        apto_para_circular = False
    elif alerta_liquido or alerta_pastillas:
        diagnostico = "PRECAUCIÓN: Se requiere mantenimiento preventivo inmediato de la pieza afectada."
        apto_para_circular = False
    else:
        diagnostico = "ÓPTIMO: El sistema de frenos se encuentra dentro de los límites de seguridad."
        apto_para_circular = True
        
    return diagnostico, apto_para_circular


if __name__ == "__main__":
    print("=== SISTEMA DE DIAGNÓSTICO DE TALLER MECÁNICO - CAMPUSLANDS ===")
    print("Por favor, ingresa los datos de la inspección de frenos:\n")
    
    try:
        # Captura de datos interactiva
        liquido = float(input("Ingresa el nivel de líquido de frenos (0 a 100%): "))
        desgaste = float(input("Ingresa el desgaste medido en las pastillas (en mm): "))
        
        # Validación física elemental de datos antes del procesamiento lógico
        if not (0 <= liquido <= 100) or desgaste < 0:
            print("\n⚠️ Error: Has ingresado valores que desafían las leyes de la física del taller.")
        else:
            # Procesamiento de la lógica de mínimos y límites
            resultado_diagnostico, es_apto = evaluar_estado_frenos(liquido, desgaste)
            
            # Despliegue de resultados verificables
            print("\n=============================================")
            print("HOJA DE DIAGNÓSTICO TÉCNICO:")
            print(f"-> {resultado_diagnostico}")
            print("---------------------------------------------")
            
            if es_apto:
                print("VEHÍCULO APTO: El cliente puede retirar la unidad de forma segura.")
            else:
                print("VEHÍCULO RETENIDO: Pasar la unidad a la rampa de reparación.")
            print("=============================================")
            
    except ValueError:
        print("\nError: Por favor, introduce únicamente valores numéricos válidos.")