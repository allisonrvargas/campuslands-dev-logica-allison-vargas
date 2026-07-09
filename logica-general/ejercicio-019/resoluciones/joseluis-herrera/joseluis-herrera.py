def verificar_reactivos(atomos_disponibles, atomos_requeridos):
    if atomos_requeridos <= 0:
        return True
    return atomos_disponibles >= atomos_requeridos

disponibles_oxigeno = 12
requeridos_formula = 4

recursos_suficientes = verificar_reactivos(disponibles_oxigeno, requeridos_formula)

if recursos_suficientes:
    estado_inventario = "Inventario Suficiente para Síntesis"
else:
    estado_inventario = "Inventario Insuficiente / Faltan Reactivos"

print("Átomos disponibles en almacén:", disponibles_oxigeno)
print("Átomos requeridos por la fórmula:", requeridos_formula)
print("Estado del laboratorio:", estado_inventario)