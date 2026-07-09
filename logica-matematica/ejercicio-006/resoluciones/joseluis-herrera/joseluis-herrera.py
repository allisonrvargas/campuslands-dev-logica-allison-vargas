velocidad_kmh = 360
FACTOR_CONVERSION = 0.62
UMBRAL_LEYENDA = 200

velocidad_mph = velocidad_kmh * FACTOR_CONVERSION

if velocidad_mph >= UMBRAL_LEYENDA:
    clasificacion = "Hiperdeportivo Leyenda"
else:
    clasificacion = "Superdeportivo Estándar"

print("=== RENDIMIENTO DEL HIPERDEPORTIVO ===")
print(f"Velocidad original: {velocidad_kmh} km/h")
print(f"Velocidad convertida: {velocidad_mph:.2f} mph")
print(f"Clasificación en pista: {clasificacion}")