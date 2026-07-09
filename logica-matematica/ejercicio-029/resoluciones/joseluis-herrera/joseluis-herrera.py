def verificar_divisores(id_pelicula, duracion):
    mascara = {
        "id_par": id_pelicula % 2 == 0,
        "tiempo_tres": duracion % 3 == 0,
        "bloque_veinte": duracion % 20 == 0
    }
    return mascara

def clasificar_pelicula_terror(id_pelicula, duracion_minutos):
    if id_pelicula <= 0 or duracion_minutos <= 0:
        return "Error: Datos de entrada fuera de rango"

    flags = verificar_divisores(id_pelicula, duracion_minutos)

    if flags["id_par"] and flags["tiempo_tres"]:
        if flags["bloque_veinte"]:
            return "Categoría A: Clásico de Culto (Bloque Perfecto)"
        return "Categoría B: Maratón de Sagas Nocturnas"

    if not flags["id_par"] and not flags["tiempo_tres"]:
        return "Categoría C: Terror Independiente"

    return "Categoría D: Cortometraje o Antología"

codigo_filme = 15
tiempo_total = 75

resultado_avanzado = clasificar_pelicula_terror(codigo_filme, tiempo_total)

print("Resultado de la Clasificación Automática:")
print(resultado_avanzado)