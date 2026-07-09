def generar_combinaciones(punos, patadas):
    lista_combos = []
    for x in punos:
        for y in patadas:
            lista_combos.append(f"{x} + {y}")
    return lista_combos

punos = ["Jab", "Cross", "Hook"]
patadas = ["Low Kick", "Middle Kick"]

combos = generar_combinaciones(punos, patadas)
total = len(combos)

if total >= 6:
    resultado = "Plan de Ataque Avanzado"
else:
    resultado = "Plan de Ataque Básico"

for c in combos:
    print(c)

print("Total:", total)
print("Resultado:", resultado)