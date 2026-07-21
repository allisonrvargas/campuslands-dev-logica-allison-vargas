def calcularProbabilidadVictoria(puntosGanados, puntosJugados):
    if puntosJugados <= 0 or puntosGanados < 0:
        return 0.0
        
    if puntosGanados > puntosJugados:
        return 0.0
        
    probabilidadBase = puntosGanados / puntosJugados
    return round(probabilidadBase, 4)

pruebas = [
    {"ganados": 15, "jugados": 20, "esperado": 0.75},
    {"ganados": 0, "jugados": 10, "esperado": 0.0},
    {"ganados": 0, "jugados": 0, "esperado": 0.0},
    {"ganados": 25, "jugados": 20, "esperado": 0.0},
    {"ganados": -5, "jugados": 10, "esperado": 0.0}
]

for prueba in pruebas:
    resultado = calcularProbabilidadVictoria(prueba["ganados"], prueba["jugados"])
    if resultado != prueba["esperado"]:
        raise ValueError(f"Error en la prueba: Ganados {prueba['ganados']}, Jugados {prueba['jugados']}. Esperado: {prueba['esperado']}, Obtenido: {resultado}")

print("Todas las pruebas se ejecutaron con éxito.")