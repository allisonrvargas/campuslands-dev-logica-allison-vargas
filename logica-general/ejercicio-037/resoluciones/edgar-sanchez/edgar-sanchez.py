def determinar_motor_renderizado(zona, metros_cuadrados, presupuesto_usd):
    # Regla de validación básica (Caso borde)
    if metros_cuadrados <= 0 or presupuesto_usd < 0:
        return "Error: Datos de dimensiones o presupuesto inválidos"
        
    # Tabla de decisión implementada mediante condicionales lógicos
    if zona == "Residencial":
        if metros_cuadrados < 100 and presupuesto_usd >= 1500:
            return "Renderizado Fotorrealista Premium (Path Tracing)"
        elif metros_cuadrados >= 100 and presupuesto_usd >= 3000:
            return "Renderizado Fotorrealista Premium (Path Tracing)"
        else:
            return "Renderizado Estándar (Ray Tracing optimizado)"
            
    elif zona == "Comercial":
        if presupuesto_usd >= 5000:
            return "Recorrido Virtual Interactivo 3D (Unreal Engine)"
        else:
            return "Renderizado Comercial Estándar"
            
    elif zona == "Industrial":
        # En industrial importa más la precisión técnica que el fotorrealismo
        if metros_cuadrados > 500:
            return "Maqueta Técnica de Alto Rendimiento (BIM-LOD 400)"
        else:
            return "Maqueta Técnica Estándar (BIM-LOD 300)"
            
    else:
        return "Zona no reconocida: Se aplicará Renderizado Genérico"

# --- PRUEBAS DE VERIFICACIÓN ---
print(f"Caso Normal: {determinar_motor_renderizado('Residencial', 80, 2000)}") 
# Esperado: Renderizado Fotorrealista Premium (Path Tracing)

print(f"Caso Borde: {determinar_motor_renderizado('Comercial', -10, 5000)}")   
# Esperado: Error: Datos de dimensiones o presupuesto inválidos