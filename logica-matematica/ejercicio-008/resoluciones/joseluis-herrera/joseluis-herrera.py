puntuacion_critica = 85
bono_efectos = 10
penalizacion_trama = 5

puntuacion_final = puntuacion_critica + bono_efectos - penalizacion_trama

if puntuacion_final >= 90:
    clasificacion = "Obra Maestra de Ciencia Ficción"
else:
    clasificacion = "Película Comercial Común"

print("=== EVALUACIÓN DE CIENCIA FICCIÓN ===")
print(f"Puntuación final: {puntuacion_final} puntos")
print(f"Clasificación asignada: {clasificacion}")