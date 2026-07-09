def calcular_puntuacion_render(tiempo_minutos, calidad_texturas):
    if tiempo_minutos <= 0:
        return 0
    puntos_base = 100 - tiempo_minutos
    puntuacion_final = puntos_base + calidad_texturas
    return puntuacion_final

tiempo_render = 15
calidad = 10

puntuacion = calcular_puntuacion_render(tiempo_render, calidad)

if puntuacion >= 90:
    ranking = "Diseño Fotorrealista Premium"
elif puntuacion >= 75:
    ranking = "Diseño Estándar Comercial"
else:
    ranking = "Borrador de Trabajo"

print("Puntuación de Renderizado:", puntuacion)
print("Clasificación en el Ranking:", ranking)