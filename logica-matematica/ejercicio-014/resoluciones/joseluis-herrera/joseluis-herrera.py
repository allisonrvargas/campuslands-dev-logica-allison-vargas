def calcular_area_tatuaje(ancho, alto):
    area = ancho * alto
    return round(area, 1)

ancho_cm = 8
alto_cm = 10

area_total = calcular_area_tatuaje(ancho_cm, alto_cm)

if area_total <= 50.0:
    costo_categoria = "Tatuaje Pequeño / Tarifa Base"
elif area_total <= 100.0:
    costo_categoria = "Tatuaje Mediano / Tarifa Intermedia"
else:
    costo_categoria = "Tatuaje Grande / Tarifa Premium"

print("Área estimada del diseño:", area_total, "cm²")
print("Categoría de cotización:", costo_categoria)