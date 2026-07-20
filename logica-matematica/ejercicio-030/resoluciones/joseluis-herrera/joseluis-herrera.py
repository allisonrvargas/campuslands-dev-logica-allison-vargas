def obtener_tarifa_zona(destino):
    tarifas = {
        "EUROPA": 150,
        "CARIBE": 120
    }
    return tarifas.get(destino, 90)

def verificar_politicas_seguridad(destino, edad):
    if destino == "EUROPA" and edad < 18:
        return False
    return True

def procesar_viaje_avanzado(solicitud):
    destino_limpio = solicitud["destino"].strip().upper()
    dias = solicitud["dias"]
    edad = solicitud["edad"]
    
    if dias <= 0 or edad <= 0:
        return "Error: Datos de solicitud incoherentes"
        
    if not verificar_politicas_seguridad(destino_limpio, edad):
        return "Solicitud Rechazada: No cumple políticas de seguridad para menores"
        
    tarifa_diaria = obtener_tarifa_zona(destino_limpio)
    costo_acumulado = dias * tarifa_diaria
    
    if solicitud["es_temporada_alta"]:
        costo_acumulado *= 1.20
        
    if dias > 10:
        costo_acumulado *= 0.90
        
    return f"Reserva Confirmada -> {destino_limpio} por {dias} días. Total: {round(costo_acumulado)} USD"

solicitud_cliente = {
    "destino": "Europa",
    "dias": 5,
    "edad": 30,
    "es_temporada_alta": True
}

diagnostico_viaje = procesar_viaje_avanzado(solicitud_cliente)

print("Resumen del Motor de Reservas:")
print(diagnostico_viaje)