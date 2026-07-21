catalogo = [
    {"nombre": "Agera RS", "potencia_bhp": 1160, "vel_mph": 277},
    {"nombre": "Hennessey Venom F5", "potencia_bhp": 1817, "vel_mph": 301},
    {"nombre": "McLaren F1", "potencia_bhp": 618, "vel_mph": 240}
]

def estandarizar_datos(datos):
    procesados = []
    for auto in datos:
        cv = auto['potencia_bhp'] * 1.01387
        kmh = auto['vel_mph'] * 1.60934
        procesados.append({
            "nombre": auto['nombre'],
            "potencia_cv": cv,
            "vel_kmh": kmh
        })
    return sorted(procesados, key=lambda x: x['potencia_cv'], reverse=True)

datos_estandarizados = estandarizar_datos(catalogo)

for auto in datos_estandarizados:
    status = "Supera 400 KM/H" if auto['vel_kmh'] > 400 else "No alcanza 400 KM/H"
    print(f"{auto['nombre']}: {auto['potencia_cv']:.2f} CV | {auto['vel_kmh']:.2f} KM/H | {status}")