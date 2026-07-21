def analizar_dimensiones_tatuaje(ancho_cm, alto_cm):
    # Límite estricto de perímetro para cambio de agujas de delineado (lining)
    LIMITE_PERIMETRO_ESPECIAL = 30.0
    
    # 1. Aplicar fórmulas geométricas de área y perímetro para un rectángulo
    # Área = base * altura
    # Perímetro = 2 * (base + altura)
    area_cm2 = ancho_cm * alto_cm
    perimetro_cm = 2 * (ancho_cm + alto_cm)
    
    # 2. Evaluar reglas de negocio condicionales
    if perimetro_cm > LIMITE_PERIMETRO_ESPECIAL:
        necesita_aguja_especial = True
        diagnostico_insumos = "Requiere kit de agujas Round Liner (RL) de alta resistencia."
    else:
        necesita_aguja_especial = False
        diagnostico_insumos = "Insumos estándar. Kit de agujas básico suficiente."
        
    return round(area_cm2, 2), round(perimetro_cm, 2), necesita_aguja_especial, diagnostico_insumos


if __name__ == "__main__":
    print("=== SISTEMA DE CONFIGURACIÓN Y GEOMETRÍA: ESTUDIO DE TATUAJES ===")
    print("Por favor, ingresa las dimensiones aproximadas del diseño rectangular:\n")
    
    try:
        # Captura de datos interactiva dentro del bloque de control de excepciones
        ancho = float(input("Ingresa el ancho del tatuaje (en cm): "))
        alto = float(input("Ingresa el alto del tatuaje (en cm): "))
        
        # Validación física de las magnitudes de entrada
        if ancho <= 0 or alto <= 0:
            print("\n⚠️ Error: Las dimensiones geométricas de un tatuaje deben ser mayores a 0 cm.")
        else:
            # Procesamiento de la lógica de áreas y perímetros
            area, perimetro, especial, reporte_insumos = analizar_dimensiones_tatuaje(ancho, alto)
            
            print("\n=============================================")
            print("🎨 REPORTE TÉCNICO DE ESTUDIO (TATTOO LOG):")
            print(f"-> Área de cobertura de piel: {area} cm²")
            print(f"-> Perímetro total de delineado: {perimetro} cm")
            print("---------------------------------------------")
            print(f"-> Asignación de Insumos: {reporte_insumos}")
            
            # Estimación base basada en el área calculada
            costo_estimado_tinta = area * 5.50
            print(f"-> Costo proyectado de pigmentos: ${costo_estimado_tinta:.2f}")
            print("=============================================")
            
    except ValueError:
        # Control de excepciones para evitar caídas del script en la terminal de tu Mac
        print("\n⚠️ Error: Por favor, introduce únicamente dimensiones numéricas válidas.")