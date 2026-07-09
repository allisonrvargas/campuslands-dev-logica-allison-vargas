



def calcular_probabilidad(puntos_ganados, saques_totales):
    if saques_totales == 0:
        return 0.0
    porcentaje = (puntos_ganados / saques_totales) * 100
    return round(porcentaje, 1)

puntos = 15
saques = 20

probabilidad_exito = calcular_probabilidad(puntos, saques)

if probabilidad_exito >= 70.0:
    rendimiento = "Servicio Altamente Efectivo"
else:
    rendimiento = "Servicio Regular"

print("Porcentaje de éxito:", probabilidad_exito, "%")
print("Rendimiento:", rendimiento)