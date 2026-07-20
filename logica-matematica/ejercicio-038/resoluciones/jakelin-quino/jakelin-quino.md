## Análisis
- **Entrada**: Arreglo con los puntajes obtenidos y el máximo puntaje posible.
- **Proceso**: Divido cada puntaje entre el máximo posible y lo multiplico por 100 para estandarizar.
- **Salida**: Nueva lista de puntajes en escala 0-100.

## Reglas aplicadas
- $Normalizado = (\frac{Puntaje}{Maximo}) \times 100$.

## Pruebas
- **Caso Normal**: [60, 80, 90] -> [60, 80, 90].
- **Caso Borde**: [0, 100] -> [0, 100].

## Explicación
Normalizar sirve para comparar personas que fueron evaluadas bajo diferentes criterios. Dividir el puntaje obtenido entre el total posible permite que todos los resultados "hablen el mismo idioma" de 0 a 100, haciendo más fácil ver quién tuvo mejor desempeño.