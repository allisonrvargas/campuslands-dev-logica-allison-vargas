playlist = [
    {"titulo": "Intro", "intensidad": 20},
    {"titulo": "Crescendo", "intensidad": 85},
    {"titulo": "Main Theme", "intensidad": 50},
    {"titulo": "Outro", "intensidad": 10}
]

def procesar_playlist(lista):
    secuencia = sorted(lista, key=lambda x: x['intensidad'])
    
    es_fluida = True
    for i in range(len(secuencia) - 1):
        if (secuencia[i+1]['intensidad'] - secuencia[i]['intensidad']) > 30:
            es_fluida = False
            break
            
    return secuencia, es_fluida

secuencia_ordenada, fluidez = procesar_playlist(playlist)

print(f"Estado: {'Playlist Fluida' if fluidez else 'Playlist Discontinua'}")
for cancion in secuencia_ordenada:
    print(f"{cancion['titulo']}: {cancion['intensidad']}")