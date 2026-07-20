total_sustos = 45
intervalo_escena = 5

resto_division = total_sustos % intervalo_escena

if resto_division == 0:
    clasificacion = "Ritmo de Terror Perfecto"
else:
    clasificacion = "Ritmo de Terror Desequilibrado"

print("=== EVALUACIÓN DE RITMO DE TERROR ===")
print(f"Total de sustos: {total_sustos}")
print(f"Residuo de distribución: {resto_division}")
print(f"Clasificación asignada: {clasificacion}")