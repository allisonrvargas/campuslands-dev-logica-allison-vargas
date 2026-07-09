def analizar_rendimiento_esports(puntajes):
    # Validar que la lista no esté vacía para evitar errores de división por cero
    if not puntajes:
        return 0.0, 0.0, False
        
    # 1. Calcular el Promedio (Media Aritmética)
    promedio = sum(puntajes) / len(puntajes)
    
    # 2. Calcular la Mediana (Punto central de los datos ordenados)
    puntajes_ordenados = sorted(puntajes)
    n = len(puntajes_ordenados)
    
    if n % 2 != 0:
        # Si la cantidad de elementos es impar, se toma el del centro directamente
        mediana = puntajes_ordenados[n // 2]
    else:
        # Si es par, se promedian los dos elementos centrales
        centro1 = puntajes_ordenados[(n // 2) - 1]
        centro2 = puntajes_ordenados[n // 2]
        mediana = (centro1 + centro2) / 2
        
    # 3. Regla de negocio: Clasificación a la "Fase de Leyendas"
    # El equipo clasifica si tanto su promedio como su mediana superan los 75 puntos
    if promedio >= 75.0 and mediana >= 75.0:
        clasifica_leyendas = True
    else:
        clasifica_leyendas = False
        
    return round(promedio, 1), round(mediana, 1), clasifica_leyendas


if __name__ == "__main__":
    print("=== SISTEMA DE ESTADÍSTICAS - TORNEO DE ESPORTS ===")
    print("Ingresa los puntajes obtenidos por el equipo en sus partidas.")
    print("Escribe un número y presiona Enter. Para terminar e iniciar el cálculo, escribe 'fin'.\n")
    
    lista_puntajes = []
    
    while True:
        entrada = input("Ingresa puntaje de la partida (o 'fin'): ").strip().lower()
        if entrada == 'fin':
            break
        try:
            puntaje = float(entrada)
            if 0 <= puntaje <= 100:  # Suponiendo una escala estándar de 0 a 100
                lista_puntajes.append(puntaje)
            else:
                print("El puntaje debe estar entre 0 y 100.")
        except ValueError:
            print(" Entrada no válida. Ingresa un número o 'fin'.")
            
    # Procesar si se ingresaron datos
    if lista_puntajes:
        prom, med, clasifica = analizar_rendimiento_esports(lista_puntajes)
        
        print("\n=============================================")
        print(" REPORTE ESTADÍSTICO DE RENDIMIENTO:")
        print(f"-> Partidas analizadas: {len(lista_puntajes)}")
        print(f"-> Puntajes registrados: {sorted(lista_puntajes)}")
        print(f"-> Promedio (Media): {prom} pts")
        print(f"-> Mediana del equipo: {med} pts")
        print("---------------------------------------------")
        
        if clasifica:
            print(" ¡CLASIFICADOS! El equipo avanza a la Fase de Leyendas.")
        else:
            print(" ELIMINADOS. El rendimiento estadístico es insuficiente.")
        print("=============================================")
    else:
        print("\n No se registraron puntajes para analizar.")