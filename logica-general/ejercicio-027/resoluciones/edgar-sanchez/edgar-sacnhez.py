def analizarInconsistenciasPlaylist(playlist):
    reporte = {
        "estado": "Inconsistente",
        "mensaje": "No analizado"
    }

    # Regla 4: Control de estado para listas vacías
    if not playlist:
        reporte["estado"] = "Vacía"
        reporte["mensaje"] = "La playlist no contiene canciones"
        return reporte

    ids_registrados = set()

    for cancion in playlist:
        # Extraer variables con valores por defecto para evitar caídas del sistema
        id_cancion = cancion.get("id")
        titulo = cancion.get("titulo")
        duracion = cancion.get("duracionSegundos")

        # Regla 2: Validar presencia obligatoria de texto
        if titulo is None or str(titulo).strip() == "":
            reporte["mensaje"] = "Título vacío detectado"
            return reporte

        # Regla 1: Validar integridad física de la duración
        if duracion is None or duracion <= 0:
            reporte["mensaje"] = "Duración inválida detectada"
            return reporte

        # Regla 3: Validar unicidad del identificador (ID)
        if id_cancion in ids_registrados:
            reporte["mensaje"] = "Identificadores duplicados detectados"
            return reporte
        
        ids_registrados.add(id_cancion)

    # Si la iteración finaliza sin retornar errores, la playlist es íntegra
    reporte["estado"] = "Limpia"
    reporte["mensaje"] = "Análisis completado sin errores"
    return reporte

def ejecutarPruebasPlaylist():
    # Caso 1: Playlist limpia y válida
    datos_limpios = [
        {"id": 1, "titulo": "Song A", "duracionSegundos": 180},
        {"id": 2, "titulo": "Song B", "duracionSegundos": 210}
    ]
    prueba_1 = analizarInconsistenciasPlaylist(datos_limpios)
    assert prueba_1["estado"] == "Limpia"
    assert prueba_1["mensaje"] == "Análisis completado sin errores"

    # Caso 2: Error por duración negativa
    datos_duracion_erronea = [
        {"id": 1, "titulo": "Song A", "duracionSegundos": -15}
    ]
    prueba_2 = analizarInconsistenciasPlaylist(datos_duracion_erronea)
    assert prueba_2["estado"] == "Inconsistente"
    assert prueba_2["mensaje"] == "Duración inválida detectada"

    # Caso 3: Error por IDs repetidos
    datos_duplicados = [
        {"id": 1, "titulo": "Song A", "duracionSegundos": 120},
        {"id": 1, "titulo": "Song C", "duracionSegundos": 150}
    ]
    prueba_3 = analizarInconsistenciasPlaylist(datos_duplicados)
    assert prueba_3["estado"] == "Inconsistente"
    assert prueba_3["mensaje"] == "Identificadores duplicados detectados"

    # Caso 4: Control de lista vacía
    prueba_4 = analizarInconsistenciasPlaylist([])
    assert prueba_4["estado"] == "Vacía"

ejecutarPruebasPlaylist()