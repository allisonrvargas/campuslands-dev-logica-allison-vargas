costo_vuelo_usd = 455.75
impuesto_porcentaje = 0.12

total_calculado = costo_vuelo_usd * (1 + impuesto_porcentaje)
total_redondeado = round(total_calculado, 1)

if (total_redondeado * 10) % 10 == 0:
    clasificacion = "Tarifa Exacta"
else:
    clasificacion = "Tarifa con Centavos"

print("=== REPORTE DE FACTURACIÓN DE VIAJE ===")
print(f"Costo original: ${costo_vuelo_usd} USD")
print(f"Total con impuestos (redondeado): ${total_redondeado} USD")
print(f"Tipo de tarifa: {clasificacion}")