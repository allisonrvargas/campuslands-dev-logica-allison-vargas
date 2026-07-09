def auditar_playlist(playlist):
    if not playlist:
        return "Error: La playlist está vacía"
        
    canciones_con_error = []
    
    for cancion in playlist:
        nombre = cancion["titulo"]
        duracion = cancion["duracion_segundos"]
        reproducciones = cancion["reproducciones"]
        es_explicit = cancion["es_explicita"]
        
        if duracion <= 0:
            canciones_con_error.append(f"{nombre} (Error: Duración inválida)")
            continue
            
        if reproducciones < 0:
            canciones_con_error.append(f"{nombre} (Error: Contador de streaming negativo)")
            continue
            
        if reproducciones > 1000000 and es_explicit and duracion < 60:
            canciones_con_error.append(f"{nombre} (Inconsistencia: Posible anomalía / Bot de streaming)")
            
    if len(canciones_con_error) > 0:
        return canciones_con_error
    else:
        return "Playlist Optimizada / Sin Inconsistencias"

mi_playlist = [
    {"titulo": "Lo-Fi Beats", "duracion_segundos": 180, "reproducciones": 15000, "es_explicita": False},
    {"titulo": "Glitch Track", "duracion_segundos": -45, "reproducciones": 200, "es_explicita": False},
    {"titulo": "Viral Skit", "duracion_segundos": 45, "reproducciones": 1500000, "es_explicita": True},
    {"titulo": "Retro Anthem", "duracion_segundos": 210, "reproducciones": -10, "es_explicita": False}
]

resultado_auditoria = auditar_playlist(mi_playlist)

print("Reporte de Control de Calidad de la Playlist:")
print(resultado_auditoria)