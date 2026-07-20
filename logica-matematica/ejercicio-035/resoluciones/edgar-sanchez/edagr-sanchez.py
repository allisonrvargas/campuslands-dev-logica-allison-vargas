def calcularVelocidadTrazo(distanciaPixeles, tiempoSegundos):
    if tiempoSegundos <= 0 or distanciaPixeles < 0:
        return 0.0
        
    velocidadTrazo = distanciaPixeles / tiempoSegundos
    return round(velocidadTrazo, 2)

pruebas = [
    {"distancia": 450.75, "tiempo": 1.5, "esperado": 300.5},
    {"distancia": 0.0, "tiempo": 2.0, "esperado": 0.0},
    {"distancia": 800.0, "tiempo": 0.0, "esperado": 0.0},
    {"distancia": -120.0, "tiempo": 1.0, "esperado": 0.0},
    {"distancia": 350.0, "tiempo": -0.5, "esperado": 0.0}
]

for prueba in pruebas:
    resultado = calcularVelocidadTrazo(prueba["distancia"], prueba["tiempo"])
    if resultado != prueba["esperado"]:
        raise ValueError(f"Error en la prueba. Esperado: {prueba['esperado']}, Obtenido: {resultado}")

print("Todas las pruebas se ejecutaron con éxito.")