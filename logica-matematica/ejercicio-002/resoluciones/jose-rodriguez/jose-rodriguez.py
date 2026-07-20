def evaluar_ranking_futsal(ganados, empatados, perdidos, goles_favor, goles_contra):
    # Calcular partidos totales
    partidos_jugados = ganados + empatados + perdidos
    
    # Calcular puntos totales acumulados
    puntos_totales = (ganados * 3) + (empatados * 1)
    
    # Regla de control: Evitar división por cero si el torneo no ha empezado
    if partidos_jugados == 0:
        rendimiento = 0.0
    else:
        puntos_maximos = partidos_jugados * 3
        rendimiento = (puntos_totales / puntos_maximos) * 100
        
    # Calcular diferencia de goles
    diferencia_goles = goles_favor - goles_contra
    
    # Condición lógica combinada para clasificar al Top 4
    if rendimiento >= 65.0 and diferencia_goles > 0:
        clasifica_top4 = True
    else:
        clasifica_top4 = False
        
    return puntos_totales, round(rendimiento, 1), diferencia_goles, clasifica_top4


if __name__ == "__main__":
    print("=== SISTEMA DE RANKING DE FÚTBOL SALA - CAMPUSLANDS ===")
    print("Por favor, ingresa las estadísticas del equipo:\n")
    
    try:
        # Captura de datos interactiva
        pj_ganados = int(input("Partidos Ganados: "))
        pj_empatados = int(input("Partidos Empatados: "))
        pj_perdidos = int(input("Partidos Perdidos: "))
        gf = int(input("Goles a Favor: "))
        gc = int(input("Goles en Contra: "))
        
        # Ejecución del análisis lógico
        puntos, rend, dif_goles, clasifica = evaluar_ranking_futsal(
            pj_ganados, pj_empatados, pj_perdidos, gf, gc
        )
        
        # Despliegue de resultados verificables
        print("\n=============================================")
        print("📊 RESULTADOS DEL RANKING:")
        print(f"-> Puntos Acumulados: {puntos}")
        print(f"-> Rendimiento del Equipo: {rend}%")
        print(f"-> Diferencia de Goles: {dif_goles}")
        print("---------------------------------------------")
        
        if clasifica:
            print(" ¡RANKING CONFIRMADO! El equipo clasifica al Top 4.")
        else:
            print(" El equipo NO cumple los requisitos mínimos para el Top 4.")
        print("=============================================")
        
    except ValueError:
        print("\n Error: Por favor, introduce únicamente números enteros válidos.")