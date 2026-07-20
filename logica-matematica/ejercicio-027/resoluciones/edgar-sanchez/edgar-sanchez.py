def validarSecuenciaPlaylist(playlist):
    reportePlaylist = {
        "duracionTotal": "00:00",
        "estadoSecuencia": "Fluido"
    }

    # Regla 2: Control de lista vacía
    if not playlist:
        reportePlaylist["estadoSecuencia"] = "Vacía"
        return reportePlaylist

    totalSegundos = 0
    tieneFatiga = False
    totalCanciones = len(playlist)

    for i in range(totalCanciones):
        totalSegundos += playlist[i]["duracionSegundos"]

        # Regla 1: Validar si hay 3 canciones seguidas del mismo género (Ventana móvil)
        if i <= totalCanciones - 3:
            genero1 = playlist[i]["genero"].lower()
            genero2 = playlist[i+1]["genero"].lower()
            genero3 = playlist[i+2]["genero"].lower()
            
            if genero1 == genero2 == genero3:
                tieneFatiga = True

    if tieneFatiga:
        reportePlaylist["estadoSecuencia"] = "Reordenar"

    # Regla 3: Conversión a formato MM:SS
    minutos = totalSegundos // 60
    segundos = totalSegundos % 60
    reportePlaylist["duracionTotal"] = f"{minutos:02d}:{segundos:02d}"

    return reportePlaylist

def ejecutarPruebasPlaylist():
    # Caso 1: Secuencia Fluida
    listaFluida = [
        {"id": 1, "genero": "Rap", "duracionSegundos": 180},
        {"id": 2, "genero": "Trap", "duracionSegundos": 150},
        {"id": 3, "genero": "Rap", "duracionSegundos": 200}
    ]
    resultadoFluido = validarSecuenciaPlaylist(listaFluida)
    assert resultadoFluido["duracionTotal"] == "08:50"
    assert resultadoFluido["estadoSecuencia"] == "Fluido"

    # Caso 2: Fatiga Auditiva (Tres Pop seguidos)
    listaFatiga = [
        {"id": 1, "genero": "Pop", "duracionSegundos": 120},
        {"id": 2, "genero": "Pop", "duracionSegundos": 180},
        {"id": 3, "genero": "Pop", "duracionSegundos": 150}
    ]
    resultadoFatiga = validarSecuenciaPlaylist(listaFatiga)
    assert resultadoFatiga["duracionTotal"] == "07:30"
    assert resultadoFatiga["estadoSecuencia"] == "Reordenar"

    # Caso 3: Lista Vacía
    resultadoVacio = validarSecuenciaPlaylist([])
    assert resultadoVacio["duracionTotal"] == "00:00"
    assert resultadoVacio["estadoSecuencia"] == "Vacía"

ejecutarPruebasPlaylist()   