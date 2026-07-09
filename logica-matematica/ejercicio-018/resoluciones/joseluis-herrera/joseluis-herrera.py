def normalizar_puntaje(puntos_obtenidos, maximo_posible):
    if maximo_posible <= 0:
        return 0.0
    resultado = (puntos_obtenidos / maximo_posible) * 10
    return round(resultado, 1)

puntos_inspeccion = 42
maximo_puntos = 50

puntaje_escala_10 = normalizar_puntaje(puntos_inspeccion, maximo_puntos)

if puntaje_escala_10 >= 8.0:
    estado_soldadura = "Aprobado con Excelencia"
elif puntaje_escala_10 >= 6.0:
    estado_soldadura = "Aprobado Estándar"
else:
    estado_soldadura = "Rechazado / Requiere Re-trabajo"

print("Puntaje en escala de 1 a 10:", puntaje_escala_10)
print("Estado de la unión:", estado_soldadura)