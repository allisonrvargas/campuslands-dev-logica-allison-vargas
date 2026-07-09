def calcular_trazos(velocidad_trazos, tiempo_minutos):
    total_trazos = velocidad_trazos * tiempo_minutos
    return total_trazos

velocidad_por_minuto = 45
tiempo_dibujo = 30

trazos_realizados = calcular_trazos(velocidad_por_minuto, tiempo_dibujo)

if trazos_realizados >= 1500:
    rendimiento = "Estilo Detallado o Complejo"
elif trazos_realizados >= 1000:
    rendimiento = "Estilo Semi-detallado"
else:
    rendimiento = "Estilo Boceto o Speedpaint"

print("Total de trazos estimados:", trazos_realizados)
print("Clasificación del dibujo:", rendimiento)