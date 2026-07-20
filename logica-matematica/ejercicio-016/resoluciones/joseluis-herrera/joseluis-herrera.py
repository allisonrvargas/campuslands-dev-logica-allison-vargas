
def calcular_presupuesto(costo_por_segundo, segundos_totales):
    costo_bruto = costo_por_segundo * segundos_totales
    return costo_bruto

costo_segundo = 120
duracion_segundos = 15

total_bruto = calcular_presupuesto(costo_segundo, duracion_segundos)

if duracion_segundos >= 20:
    descuento = total_bruto * 0.15
elif duracion_segundos >= 10:
    descuento = total_bruto * 0.10
else:
    descuento = 0.0

total_final = total_bruto - descuento

print("Costo inicial:", total_bruto)
print("Descuento aplicado:", descuento)
print("Total a pagar:", total_final)