peliculas = [
    {"titulo": "Sci-Fi Indep", "presupuesto": 10, "critica": 8.5},
    {"titulo": "Space Epic", "presupuesto": 200, "critica": 8.2},
    {"titulo": "Cheap Thrill", "presupuesto": 5, "critica": 4.0},
    {"titulo": "Failed Giant", "presupuesto": 250, "critica": 5.0},
    {"titulo": "Mid Budget", "presupuesto": 80, "critica": 7.5}
]

def analizar_patrones(lista):
    lista_ordenada = sorted([p for p in lista if p['presupuesto']], key=lambda x: x['presupuesto'])
    reporte = []
    
    for p in lista_ordenada:
        ratio = p['critica'] / p['presupuesto']
        patron = "Estándar"
        
        if ratio > 0.5:
            patron = "Inversión Eficiente"
        elif p['presupuesto'] > 150 and p['critica'] > 7:
            patron = "Blockbuster Seguro"
        elif p['presupuesto'] > 150 and p['critica'] < 6:
            patron = "Decepción de Taquilla"
            
        reporte.append({"titulo": p['titulo'], "patron": patron})
    
    return reporte

resultados = analizar_patrones(peliculas)

for r in resultados:
    print(f"Película: {r['titulo']} | Patrón detectado: {r['patron']}")