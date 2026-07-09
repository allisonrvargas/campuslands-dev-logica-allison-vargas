def evaluar_exclusividad_y_motor(auto, hibrido, limite_produccion):
    return auto["es_hibrido"] == hibrido and auto["unidades_producidas"] <= limite_produccion

def buscar_hiperdeportivo_avanzado(garaje, velocidad_minima, requiere_hibrido):
    if not isinstance(garaje, list) or len(garaje) == 0:
        return "Error: Estructura de datos inválida"

    limite_piezas = 500

    auto_coincidencia = next(
        (a for a in garaje if a["velocidad_max"] >= velocidad_minima and evaluar_exclusividad_y_motor(a, requiere_hibrido, limite_piezas)),
        None
    )

    if auto_coincidencia:
        return f"Auto localizado: {auto_coincidencia['nombre']} | Velocidad: {auto_coincidencia['velocidad_max']} km/h"
    return "No se encontró ningún hiperdeportivo con esas especificaciones"

catalogo_autos = [
    {"nombre": "Chiron Sport", "velocidad_max": 420, "es_hibrido": False, "unidades_producidas": 500},
    {"nombre": "LaFerrari", "velocidad_max": 350, "es_hibrido": True, "unidades_producidas": 499},
    {"nombre": "Jesko Absolut", "velocidad_max": 530, "es_hibrido": False, "unidades_producidas": 125}
]

resultado_avanzado = buscar_hiperdeportivo_avanzado(catalogo_autos, 500, False)

print("Resultado Filtrado Avanzado:", resultado_avanzado)