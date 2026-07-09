def buscar_hiperdeportivo(garaje, velocidad_minima, requiere_hibrido):
    if not garaje:
        return "Error: El garaje de búsqueda está vacío"
        
    auto_encontrado = None
    
    for auto in garaje:
        if auto["velocidad_max"] >= velocidad_minima:
            if auto["es_hibrido"] == requiere_hibrido:
                if auto["unidades_producidas"] <= 500:
                    auto_encontrado = auto
                    break 
                    
    if auto_encontrado is not None:
        return f"Auto localizado: {auto_encontrado['nombre']} | Unidades: {auto_encontrado['unidades_producidas']}"
    else:
        return "No se encontró ningún hiperdeportivo con esas especificaciones"

catalogo_autos = [
    {"nombre": "Chiron Sport", "velocidad_max": 420, "es_hibrido": False, "unidades_producidas": 500},
    {"nombre": "LaFerrari", "velocidad_max": 350, "es_hibrido": True, "unidades_producidas": 499},
    {"nombre": "Jesko Absolut", "velocidad_max": 530, "es_hibrido": False, "unidades_producidas": 125},
    {"nombre": "Revuelto", "velocidad_max": 350, "es_hibrido": True, "unidades_producidas": 1000}
]

v_min = 400
hibrido_solicitado = False

resultado_busqueda = buscar_hiperdeportivo(catalogo_autos, v_min, hibrido_solicitado)

print("Criterio - Velocidad Mínima:", v_min, "km/h")
print("Criterio - Motorización Híbrida:", hibrido_solicitado)
print("Resultado:", resultado_busqueda)