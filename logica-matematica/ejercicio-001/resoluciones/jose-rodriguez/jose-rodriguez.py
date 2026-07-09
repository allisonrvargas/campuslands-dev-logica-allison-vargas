# solucion_interactiva.py

def calcular_mvp(kills, deaths, assists, participacion_objetivos):
    # Regla 1: Control de división por cero
    if deaths == 0:
        kda = (kills + assists) * 1.0
    else:
        kda = (kills + assists) / deaths
    
    # Regla 2 y 3: Validar condiciones para MVP
    if kda >= 4.5 and participacion_objetivos >= 60.0:
        califica_mvp = True
    else:
        califica_mvp = False
        
    return round(kda, 2), califica_mvp


# --- BLOQUE DE INTERACCIÓN CON EL USUARIO ---
if __name__ == "__main__":
    print("=== BIENVENIDO AL SISTEMA DE EVALUACIÓN DE JUGADORES ===")
    print("Por favor, ingresa los datos de la última partida:\n")
    
    try:
        # Captura de datos y conversión de tipos (Casting)
        kills = int(input("Ingresa el número de Asesinatos (Kills): "))
        deaths = int(input("Ingresa el número de Muertes (Deaths): "))
        assists = int(input("Ingresa el número de Asistencias (Assists): "))
        objetivos = float(input("Ingresa el % de participación en objetivos (ej. 65.5): "))
        
        # Procesamiento de la lógica
        kda_resultado, es_mvp = calcular_mvp(kills, deaths, assists, objetivos)
        
        # Salida de resultados
        print("\n=============================================")
        print(f"RESULTADO DEL ANÁLISIS LOGICO:")
        print(f"-> Tu KDA final es: {kda_resultado}")
        
        if es_mvp:
            print(" ¡Felicidades! Calificas como MVP de la partida.")
        else:
            print(" No calificas para MVP. Sigue mejorando el juego en equipo.")
        print("=============================================")
        
    except ValueError:
        # Control de errores si el usuario ingresa letras en vez de números
        print("\nError: Por favor, ingresa únicamente valores numéricos válidos.")