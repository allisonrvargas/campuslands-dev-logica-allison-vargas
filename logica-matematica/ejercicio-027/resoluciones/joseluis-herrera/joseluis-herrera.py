def verificar_metadatos(cancion):
    if cancion["duracion_segundos"] <= 0:
        return "CRÍTICO: Duración corrupta"
    if cancion["reproducciones"] < 0:
        return "CRÍTICO: Reproducciones negativas"
        
    es_fraude_sospechoso = (
        cancion["reproducciones"] > 1000000 and 
        cancion["es_explicita"] and 
        cancion["duracion_segundos"] < 60
    )
    
    if es_fraude_sospechoso:
        return "ADVERTENCIA: Patrón de Bot de Streaming"
        
    return "OK"

def auditar_playlist_avanzada(playlist):
    if not isinstance(playlist, list) or len(playlist) == 0:
        return "Error: Estructura inválida"

    reporte_final = {}
    
    for c in playlist:
        estado = verificar_metadatos(c)
        if estado != "OK":
            reporte_final[c["titulo"]] = estado
            
    return reporte_final if reporte_final else "Playlist en Estado Óptimo"

mi_playlist = [
    {"titulo": "Lo-Fi Beats", "duracion_segundos": 180, "reproducciones": 15000, "es_explicita": False},
    {"titulo": "Glitch Track", "duracion_segundos": -45, "reproducciones": 200, "es_explicita": False},
    {"titulo": "Viral Skit", "duracion_segundos": 45, "reproducciones": 1500000, "es_explicita": True}
]

diagnostico_avanzado = auditar_playlist_avanzada(mi_playlist)

print("Análisis Avanzado de Plataforma:")
print(diagnostico_avanzado)