def simularEstadosTerror(peliculas):
    simulacion = {
        "totalProcesadas": 0,
        "pesadillaAsegurada": [],
        "sustoModerado": [],
        "tensionLeve": []
    }

    if not peliculas:
        return simulacion

    conteo_validas = 0

    for pelicula in peliculas:
        titulo = pelicula.get("titulo", "Sin Título")
        sustos = pelicula.get("sustosPorMinuto", 0)
        gore = pelicula.get("intensidadGore", 0)
        duracion = pelicula.get("duracionMinutos", 0)

        if duracion <= 0 or sustos <= 0 or gore < 1 or gore > 5:
            continue

        conteo_validas += 1
        iit = sustos * gore

        if iit >= 15:
            simulacion["pesadillaAsegurada"].append(titulo)
        elif iit >= 6:
            simulacion["sustoModerado"].append(titulo)
        else:
            simulacion["tensionLeve"].append(titulo)

    simulacion["totalProcesadas"] = conteo_validas
    return simulacion

def ejecutarPruebasTerror():
    catalogo = [
        {"titulo": "Hereditary", "sustosPorMinuto": 4, "intensidadGore": 4, "duracionMinutos": 127},
        {"titulo": "Conjuring", "sustosPorMinuto": 3, "intensidadGore": 2, "duracionMinutos": 112},
        {"titulo": "Scary Movie", "sustosPorMinuto": 1, "intensidadGore": 1, "duracionMinutos": 88},
        {"titulo": "Invalida Gore", "sustosPorMinuto": 5, "intensidadGore": 6, "duracionMinutos": 90},
        {"titulo": "Invalida Duracion", "sustosPorMinuto": 2, "intensidadGore": 3, "duracionMinutos": -10}
    ]

    resultado = simularEstadosTerror(catalogo)
    
    assert resultado["totalProcesadas"] == 3
    assert resultado["pesadillaAsegurada"] == ["Hereditary"]
    assert resultado["sustoModerado"] == ["Conjuring"]
    assert resultado["tensionLeve"] == ["Scary Movie"]
    
    resultado_vacio = simularEstadosTerror([])
    assert resultado_vacio["totalProcesadas"] == 0
    assert resultado_vacio["pesadillaAsegurada"] == []

ejecutarPruebasTerror()