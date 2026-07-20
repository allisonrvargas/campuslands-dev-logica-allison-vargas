playlist = [
    {"titulo": "Song A", "segundos": 180, "peso_mb": 6.0},
    {"titulo": "Song B", "segundos": 30, "peso_mb": 1.0},
    {"titulo": "Song C", "segundos": 200, "peso_mb": 0.2},
    {"titulo": "Song D", "segundos": 120, "peso_mb": 4.0}
]

def auditar_playlist(lista):
    lista_ordenada = sorted(lista, key=lambda x: x['titulo'])
    resultados = []
    
    for cancion in lista_ordenada:
        estado = "OK"
        if cancion['segundos'] < 60 or cancion['segundos'] > 600:
            estado = "Fuera de Rango"
        elif cancion['segundos'] > 120 and cancion['peso_mb'] < 0.5:
            estado = "Archivo Corrupto"
        
        resultados.append({"titulo": cancion['titulo'], "estado": estado})
    
    return resultados

reporte = auditar_playlist(playlist)

for item in reporte:
    print(f"Canción: {item['titulo']} | Estado: {item['estado']}")