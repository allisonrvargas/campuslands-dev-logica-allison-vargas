inventario_laboratorio = {
    "Oxígeno": 12,
    "Hidrógeno": 5,
    "Carbono": 2
}

formula_quimica = {
    "Oxígeno": 4,
    "Hidrógeno": 2,
    "Carbono": 1
}

alcanza_material = True

for elemento, cantidad_necesaria in formula_quimica.items():
    cantidad_en_stock = inventario_laboratorio.get(elemento, 0)
    if cantidad_en_stock < cantidad_necesaria:
        alcanza_material = False
        break

if alcanza_material:
    estado_laboratorio = "Inventario Completo - Producción Autorizada"
else:
    estado_laboratorio = "Faltan Reactivos - Producción Detenida"

print("Estado del análisis:", estado_laboratorio)