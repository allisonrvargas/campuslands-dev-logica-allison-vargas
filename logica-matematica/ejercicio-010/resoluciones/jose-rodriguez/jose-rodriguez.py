import math

def calcular_presupuesto_turismo(costo_total_paquete, cantidad_viajeros):
    # Regla de control: Evitar división entre cero si no hay viajeros registrados
    if cantidad_viajeros == 0:
        return 0.0, 0.0, "Error: La cantidad de viajeros debe ser mayor a cero."
        
    # Límite lógico para la categoría de turismo accesible (en la moneda local)
    LIMITE_ACCESIBLE = 150.0
    
    # 1. Aplicar aritmética de precisión: División exacta de la factura
    costo_exacto_individual = costo_total_paquete / cantidad_viajeros
    
    # 2. Aplicar regla de redondeo controlado (math.ceil redondea siempre hacia arriba)
    # Esto asegura que al recolectar el dinero de los turistas no falte ni un solo centavo por decimales perdidos
    costo_redondeado_individual = math.ceil(costo_exacto_individual * 100) / 100
    
    # 3. Evaluar reglas de negocio condicionales
    if costo_redondeado_individual <= LIMITE_ACCESIBLE:
        categoria = "Paquete Turístico Accesible (Económico / Backpacking)"
        apto_para_promocion = True
    else:
        categoria = "Paquete Turístico Premium (Gama Alta / Confort)"
        apto_para_promocion = False
        
    return costo_exacto_individual, costo_redondeado_individual, categoria


if __name__ == "__main__":
    print("=== SISTEMA DE GESTIÓN FINANCIERA: VIAJES Y TURISMO ===")
    print("Por favor, ingresa los datos de facturación del grupo:\n")
    
    try:
        # Captura de datos interactiva dentro del bloque de control de excepciones
        total_paquete = float(input("Ingresa el costo total del paquete turístico: "))
        viajeros = int(input("Ingresa la cantidad total de viajeros en el grupo: "))
        
        if total_paquete < 0 or viajeros < 0:
            print("\nError: No se permiten costos ni cantidades de personas negativas.")
        elif viajeros == 0:
            print("\nError: Debe haber al menos 1 viajero para realizar el cálculo.")
        else:
            # Procesamiento de la lógica de redondeo y precisión
            exacto, redondeado, reporte_categoria = calcular_presupuesto_turismo(total_paquete, viajeros)
            
            print("\n=============================================")
            print("REPORTE ECONÓMICO DEL VIAJE:")
            print(f"-> Costo exacto por persona (sin redondear): ${exacto:.4f}")
            print(f"-> Cuota asignada por persona (redondeo hacia arriba): ${redondeado:.2f}")
            print("---------------------------------------------")
            print(f"-> Clasificación del viaje: {reporte_categoria}")
            print("=============================================")
            
    except ValueError:
        # Intercepta entradas de texto inválidas en la terminal
        print("\nError: Por favor, introduce valores numéricos válidos en la terminal.")