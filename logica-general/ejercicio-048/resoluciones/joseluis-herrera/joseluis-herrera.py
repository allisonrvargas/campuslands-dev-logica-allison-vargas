peliculas = [
    {"titulo": "Matrix", "anio": 1999, "critica": 9.2},
    {"titulo": "Blade Runner", "anio": 1982, "critica": 8.9},
    {"titulo": "Inception", "anio": 2010, "critica": 8.8},
    {"titulo": "Dune", "anio": None, "critica": 8.5},
    {"titulo": "The Terminator", "anio": 1984, "critica": 8.1}
]

def procesar_maraton(lista):
    lista_limpia = [p for p in lista if p['anio'] is not None]
    
    lista_ordenada = sorted(lista_limpia, key=lambda x: x['anio'], reverse=True)
    
    seleccionadas = []
    for p in lista_ordenada:
        if p['anio'] >= 1990:
            impacto = (p['anio'] - 1980) * (p['critica'] / 10)
            categoria = "Película de Culto" if impacto > 50 else "Entretenimiento Estándar"
            seleccionadas.append({"titulo": p['titulo'], "impacto": impacto, "categoria": categoria})
            
    return seleccionadas

resultado = procesar_maraton(peliculas)

for p in resultado:
    print(f"Título: {p['titulo']} | Impacto: {p['impacto']:.2f} | Categoría: {p['categoria']}")