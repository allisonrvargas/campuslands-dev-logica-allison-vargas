def es_matriz_animacion_simetrica(matriz):
    # Caso borde: Matriz vacía o no cuadrada
    if not matriz or not matriz[0] or len(matriz) != len(matriz[0]):
        return False
    
    n = len(matriz)
    # Recorremos solo la mitad superior para evitar doble trabajo
    for i in range(n):
        for j in range(i + 1, n):
            if matriz[i][j] != matriz[j][i]:
                return False  # Si un punto de animación no coincide, no es simétrica
                
    return True

# --- PRUEBAS DE VERIFICACIÓN ---
caso_normal = [
    [1, 2, 3],
    [2, 5, 4],
    [3, 4, 9]
]

caso_borde = [
    [1, 2],
    [3, 4],
    [5, 6]
]

print(f"Resultado Caso Normal: {es_matriz_animacion_simetrica(caso_normal)}")  # Esperado: True
print(f"Resultado Caso Borde: {es_matriz_animacion_simetrica(caso_borde)}")   # Esperado: False