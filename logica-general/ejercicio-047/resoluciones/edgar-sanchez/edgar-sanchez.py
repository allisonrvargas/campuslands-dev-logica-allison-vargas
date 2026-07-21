def auditarPlaylistMusical(canciones):
    reporte = {
        "estado": "Playlist Certificada",
        "erroresDetectados": 0,
        "duracionTotalSegundos": 0,
        "cancionesLimpias": []
    }

    if not canciones:
        return reporte

    conteo_errores = 0
    segundos_acumulados = 0
    titulos_validos = []

    for cancion in canciones:
        titulo = cancion.get("titulo", "Sin Título")
        duracion = cancion.get("duracionSegundos", 0)
        reproducciones = cancion.get("reproducciones", 0)

        if duracion <= 0 or reproducciones < 0:
            conteo_errores += 1
        else:
            segundos_acumulados += duracion
            titulos_validos.append(titulo)

    if conteo_errores > 0:
        reporte["estado"] = "Requiere Depuración"

    reporte["erroresDetectados"] = conteo_errores
    reporte["duracionTotalSegundos"] = segundos_acumulados
    reporte["cancionesLimpias"] = titulos_validos

    return reporte

def ejecutarPruebasPlaylist():
    lista_remix = [
        {"titulo": "Song 1", "duracionSegundos": 180, "reproducciones": 1500},
        {"titulo": "Song 2", "duracionSegundos": 0, "reproducciones": 300},
        {"titulo": "Song 3", "duracionSegundos": 240, "reproducciones": -5},
        {"titulo": "Song 4", "duracionSegundos": 210, "reproducciones": 94000}
    ]

    prueba_1 = auditarPlaylistMusical(lista_remix)
    assert prueba_1["estado"] == "Requiere Depuración"
    assert prueba_1["erroresDetectados"] == 2
    assert prueba_1["duracionTotalSegundos"] == 390
    assert "Song 1" in prueba_1["cancionesLimpias"]
    assert "Song 4" in prueba_1["cancionesLimpias"]

    lista_sana = [
        {"titulo": "Track A", "duracionSegundos": 200, "reproducciones": 50000},
        {"titulo": "Track B", "duracionSegundos": 150, "reproducciones": 10}
    ]
    
    prueba_2 = auditarPlaylistMusical(lista_sana)
    assert prueba_2["estado"] == "Playlist Certificada"
    assert prueba_2["erroresDetectados"] == 0
    assert prueba_2["duracionTotalSegundos"] == 350

    assert auditarPlaylistMusical([])["duracionTotalSegundos"] == 0

ejecutarPruebasPlaylist()