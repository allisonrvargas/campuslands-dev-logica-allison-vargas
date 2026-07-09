def simular_ventas(clientes_potenciales, tasa_conversion, clima_lluvioso):
    ventas_base = clientes_potenciales * tasa_conversion
    
    if clima_lluvioso:
        ventas_finales = ventas_base * 0.7
    else:
        ventas_finales = ventas_base
        
    return round(ventas_finales)

personas_que_pasan = 200
probabilidad_compra = 0.15
esta_lloviendo = True

total_combos_vendidos = simular_ventas(personas_que_pasan, probabilidad_compra, esta_lloviendo)

if total_combos_vendidos >= 25:
    rendimiento_negocio = "Día Exitoso / Alta Demanda"
else:
    rendimiento_negocio = "Día Flojo / Ajustar Inventario"

print("Ventas proyectadas de combos:", total_combos_vendidos)
print("Estado del puesto de comida:", rendimiento_negocio)