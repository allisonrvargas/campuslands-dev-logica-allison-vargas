def seleccionar_pedido(pedidos):
    if not pedidos:
        return "Acción: No hay pedidos en cola."
    
    def obtener_prioridad(p):
        valor = 0
        valor += 0 if p['tipo'] == 'urgente' else 10
        valor += 0 if p['estado'] == 'pendiente' else (1 if p['estado'] == 'en-preparacion' else 2)
        return valor

    ordenados = sorted(pedidos, key=obtener_prioridad)
    return f"Acción: Procesar pedido ID {ordenados[0]['id']}"