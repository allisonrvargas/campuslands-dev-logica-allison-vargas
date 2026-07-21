catalogo = [
    {"nombre": "Bugatti Chiron", "potencia": 1500, "peso": 1995, "vel_max": 490, "precio": 3000000},
    {"nombre": "Koenigsegg Jesko", "potencia": 1600, "peso": 1420, "vel_max": 480, "precio": 2800000},
    {"nombre": "Rimac Nevera", "potencia": 1914, "peso": 2300, "vel_max": 412, "precio": 2500000},
    {"nombre": "Pagani Huayra R", "potencia": 850, "peso": 1050, "vel_max": 380, "precio": 3200000}
]

def buscar_hiperdeportivo(datos, potencia_min, presupuesto_max):
    datos_ordenados = sorted(datos, key=lambda x: x['vel_max'], reverse=True)
    
    for auto in datos_ordenados:
        if auto['peso'] > 2000:
            continue
            
        if auto['potencia'] >= potencia_min and auto['precio'] <= presupuesto_max:
            return auto
            
    return None

potencia_requerida = 1000
presupuesto = 3500000

resultado = buscar_hiperdeportivo(catalogo, potencia_requerida, presupuesto)

if resultado:
    print(f"Auto encontrado: {resultado['nombre']} | Potencia: {resultado['potencia']}HP")
else:
    print("No se encontró ningún auto que cumpla los requisitos.")