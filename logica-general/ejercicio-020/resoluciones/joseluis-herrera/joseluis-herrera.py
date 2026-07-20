menu_callejero = [
    {"platillo": "Perro Caliente Especial", "precio": 12, "vegetariano": False},
    {"platillo": "Hamburguesa Urbana", "precio": 18, "vegetariano": False},
    {"platillo": "Papas Supremas", "precio": 10, "vegetariano": True},
    {"platillo": "Tacos de Setas", "precio": 15, "vegetariano": True}
]

presupuesto_cliente = 15
prefiere_vegetariano = True

opciones_viables = []

for item in menu_callejero:
    if item["precio"] <= presupuesto_cliente:
        if not prefiere_vegetariano or item["vegetariano"]:
            opciones_viables.append(item["platillo"])

if len(opciones_viables) > 0:
    resultado_seleccion = f"Opciones sugeridas: {opciones_viables}"
else:
    resultado_seleccion = "Ningún platillo se ajusta a los criterios"

print("Presupuesto:", presupuesto_cliente)
print("Filtro Vegetariano:", prefiere_vegetariano)
print("Resultado:", resultado_seleccion)