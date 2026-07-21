## Análisis
- **Entrada**: Cantidad de un compuesto y su límite máximo permitido.
- **Proceso**: Comprobar mediante condicionales si el número es negativo o si sobrepasa el límite.
- **Salida**: Mensaje de error o confirmación de validez.

## Reglas aplicadas
- $Cantidad \geq 0$.
- $Cantidad \leq Limite$.

## Pruebas
- **Caso Normal**: Cantidad 50, Límite 100 -> "Fórmula válida".
- **Caso Borde**: Cantidad -5, Límite 100 -> "Error: Cantidad negativa".

## Explicación
La validación numérica sirve para evitar que el programa procese datos imposibles. Si el sistema recibe un número negativo, corta el proceso inmediatamente para prevenir errores químicos en el laboratorio.