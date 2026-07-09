def convertir_metricas_hiperdeportivo(velocidad_kmh, potencia_cv):
    FACTOR_KMH_A_MPH = 0.621371
    FACTOR_CV_A_HP = 0.98632
    VELOCIDAD_RECORD_MPH = 250.0
    
    velocidad_mph = velocidad_kmh * FACTOR_KMH_A_MPH
    potencia_hp = potencia_cv * FACTOR_CV_A_HP
    
    if velocidad_mph > VELOCIDAD_RECORD_MPH:
        rompe_record = True
    else:
        rompe_record = False
        
    return round(velocidad_mph, 2), round(potencia_hp, 1), rompe_record


if __name__ == "__main__":
    print("=== SISTEMA DE CONVERSIÓN DE MÉTRICAS: HIPERDEPORTIVOS ===")
    print("Por favor, ingresa las especificaciones del vehículo de fábrica:\n")
    
    try:
        # Aquí inicia el bloque TRY
        kmh = float(input("Velocidad máxima registrada (en km/h): "))
        cv = float(input("Potencia del motor (en CV / Caballos de Vapor): "))
        
        if kmh < 0 or cv < 0:
            print("\nError: No existen velocidades ni potencias negativas.")
        else:
            mph_resultado, hp_resultado, record = convertir_metricas_hiperdeportivo(kmh, cv)
            
            print("\n=============================================")
            print("INFORME TÉCNICO DE CONVERSIÓN:")
            print(f"-> Velocidad máxima: {mph_resultado} MPH")
            print(f"-> Potencia del motor: {hp_resultado} HP")
            print("---------------------------------------------")
            
            if record:
                print("¡ALERTA DE RÉCORD! Supera las 250 MPH.")
            else:
                print("Operación estándar bajo el récord de la pista.")
            print("=============================================")
            
    except ValueError:
        # ¡ESTE ES EL BLOQUE QUE TE FALTABA O ESTABA MAL ALINEADO EN LA LÍNEA 50!
        print("\nError: Por favor, introduce únicamente valores numéricos válidos.")