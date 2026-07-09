duracion_base = 180
introduccion = 15
penalizacion_silencio = 5

duracion_final = duracion_base + introduccion - penalizacion_silencio

if duracion_final >= 190:
    clasificacion = "Playlist Extendida"
else:
    clasificacion = "Playlist Corta"

print("=== REPORTE DE PLAYLIST ===")
print(f"Duración final de la pista: {duracion_final} segundos")
print(f"Clasificación asignada: {clasificacion}")