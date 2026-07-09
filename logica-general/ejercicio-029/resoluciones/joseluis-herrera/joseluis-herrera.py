def analizar_maraton_terror(id_pelicula, duracion_minutos):
    if id_pelicula <= 0 or duracion_minutos <= 0:
        return "Código o Duración Inválida"
        
    es_par_id = (id_pelicula % 2 == 0)
    es_divisible_tres_tiempo = (duracion_minutos % 3 == 0)
    es_bloque_exacto = (duracion_minutos % 20 == 0)
    
    if es_par_id and es_divisible_tres_tiempo:
        if es_bloque_exacto:
            return "Programación Especial: Clásico de Culto en Bloque Perfecto"
        else:
            return "Programación Especial: Maratón de Sagas Nocturnas"
            
    if not es_par_id and not es_divisible_tres_tiempo:
        return "Programación Estándar: Cine de Terror Independiente"
        
    return "Programación Estándar: Cortometraje o Antología de Miedo"

codigo_filme = 24
tiempo_total = 120

resultado_maraton = analizar_maraton_terror(codigo_filme, tiempo_total)

print("Análisis de la Parrilla de Terror:")
print(resultado_maraton)