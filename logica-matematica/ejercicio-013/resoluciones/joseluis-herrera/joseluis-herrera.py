
def calcular_distancia(x1, y1, x2, y2):
    distancia_x = x2 - x1
    distancia_y = y2 - y1
    suma_cuadrados = (distancia_x ** 2) + (distancia_y ** 2)
    distancia_total = suma_cuadrados ** 0.5
    return round(distancia_total, 1)

posicion_salto_x, posicion_salto_y = 0, 0
zona_aterrizaje_x, zona_aterrizaje_y = 3, 4

distancia_objetivo = calcular_distancia(posicion_salto_x, posicion_salto_y, zona_aterrizaje_x, zona_aterrizaje_y)

if distancia_objetivo <= 5.0:
    evaluacion = "Aterrizaje Seguro"
else:
    evaluacion = "Fuera de la Zona Segura"

print("Distancia al centro de la zona:", distancia_objetivo, "metros")
print("Evaluación del salto:", evaluacion)