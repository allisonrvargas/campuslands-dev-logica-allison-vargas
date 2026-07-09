
def evaluar_inventario_motos(stock_actual, stock_minimo, stock_maximo):
    # Regla 1: Validar coherencia lógica de los límites establecidos
    if stock_minimo >= stock_maximo:
        return "Error: El stock mínimo no puede ser mayor o igual al máximo.", False, 0
        
    # Calcular la capacidad disponible en el almacén
    capacidad_disponible = stock_maximo - stock_actual
    
    # Regla 2 y 3: Evaluar los rangos lógicos del inventario
    if stock_actual < stock_minimo:
        estado = "CRÍTICO: Alerta de desabastecimiento. Se requiere reordenar de inmediato."
        necesita_pedido = True
    elif stock_actual > stock_maximo:
        estado = "ALERTA: Sobre-stock detectado. Excede la capacidad máxima permitida."
        necesita_pedido = False
    else:
        estado = "ÓPTIMO: El nivel de inventario se encuentra en el rango seguro."
        necesita_pedido = False
        
    return estado, necesita_pedido, capacidad_disponible


if __name__ == "__main__":
    print("=== SISTEMA DE GESTIÓN DE INVENTARIO DE MOTOS - CAMPUSLANDS ===")
    print("Por favor, introduce las unidades de la referencia seleccionada:\n")
    
    try:
        # Captura de datos interactiva
        actual = int(input("Ingresa el Stock Actual en bodega: "))
        minimo = int(input("Ingresa el Límite Mínimo permitido: "))
        maximo = int(input("Ingresa el Límite Máximo permitido: "))
        
        # Procesamiento de las reglas de rango y máximos
        estado_resultado, requiere_pedido, espacio_libre = evaluar_inventario_motos(actual, minimo, maximo)
        
        # Despliegue de resultados verificables
        print("\n=============================================")
        print("📊 REPORTE DE CONTROL DE INVENTARIO:")
        print(f"-> Estado del Stock: {estado_resultado}")
        
        # Si hay un error de configuración en los rangos, no muestra el espacio libre
        if "Error" not in estado_resultado:
            print(f"-> Espacio libre en almacén: {espacio_libre} unidades")
            print("---------------------------------------------")
            if requiere_pedido:
                unidades_a_pedir = maximo - actual
                print(f"RECOMENDACIÓN: Generar orden de compra por {unidades_a_pedir} motos para volver al máximo.")
            else:
                print("Operación estable. No se requieren pedidos de reabastecimiento.")
        print("=============================================")
        
    except ValueError:
        print("\n Error: Por favor, introduce únicamente números enteros válidos.")