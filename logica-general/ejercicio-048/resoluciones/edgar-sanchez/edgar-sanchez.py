def procesarCatalogoSciFi(peliculas):
    reporte = {
        "clasicas": [],
        "modernas": [],
        "duracionPromedioAptas": 0.0
    }

    if not peliculas:
        return reporte

    suma_duracion = 0
    conteo_aptas = 0

    for pelicula in peliculas:
        titulo = pelicula.get("titulo", "Sin Título")
        anio = pelicula.get("anioLanzamiento", 0)
        calificacion = pelicula.get("calificacion", 0.0)
        duracion = pelicula.get("duracionMinutos", 0)

        if duracion <= 0 or anio < 1888 or anio > 2026 or calificacion < 0.0 or calificacion > 10.0:
            continue

        if calificacion >= 7.0:
            suma_duracion += duracion
            conteo_aptas += 1

            if anio < 2000:
                reporte["clasicas"].append(titulo)
            else:
                reporte["modernas"].append(titulo)

    if conteo_aptas > 0:
        reporte["duracionPromedioAptas"] = suma_duracion / conteo_aptas

    return reporte

def ejecutarPruebasSciFi():
    catalogo = [
        {"titulo": "Matrix", "anioLanzamiento": 1999, "calificacion": 8.7, "duracionMinutos": 136},
        {"titulo": "Interstellar", "anioLanzamiento": 2014, "calificacion": 8.6, "duracionMinutos": 169},
        {"titulo": "Mala Sci-Fi", "anioLanzamiento": 2020, "calificacion": 4.2, "duracionMinutos": 90},
        {"titulo": "Futuro Corrupto", "anioLanzamiento": 2035, "calificacion": 9.0, "duracionMinutos": 120},
        {"titulo": "Blade Runner", "anioLanzamiento": 1982, "calificacion": 8.1, "duracionMinutos": 117}
    ]

    resultado_1 = procesarCatalogoSciFi(catalogo)
    assert len(resultado_1["clasicas"]) == 2
    assert "Matrix" in resultado_1["clasicas"]
    assert "Blade Runner" in resultado_1["clasicas"]
    assert resultado_1["modernas"] == ["Interstellar"]
    assert resultado_1["duracionPromedioAptas"] == (136 + 169 + 117) / 3

    resultado_2 = procesarCatalogoSciFi([{"titulo": "Baja Nota", "anioLanzamiento": 2010, "calificacion": 5.5, "duracionMinutos": 100}])
    assert resultado_2["clasicas"] == []
    assert resultado_2["modernas"] == []
    assert resultado_2["duracionPromedioAptas"] == 0.0

    assert procesarCatalogoSciFi([])["duracionPromedioAptas"] == 0.0

ejecutarPruebasSciFi()