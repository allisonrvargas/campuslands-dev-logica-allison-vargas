## Analisis
- **Entrada**: Cantidad total de películas y cantidad de personas.
- **Proceso**: Uso el operador de módulo (`%`) para ver qué queda después de dividir. Si el resultado es `0`, significa que la división es exacta.
- **Salida**: Un mensaje indicando si el reparto es exacto o cuántas sobran.

## Reglas aplicadas
1. **Divisibilidad**: Si `peliculas % amigos === 0`, todos tienen la misma cantidad.
2. **Residuo**: Si no es cero, el número resultante es la cantidad de películas que no pudieron ser repartidas.

## Pruebas
- **Caso Normal**: `15 películas / 4 amigos` -> Resultado: "No se pueden repartir. Sobran 3 películas."
- **Caso Borde**: `12 películas / 4 amigos` -> Resultado: "¡Perfecto! Se pueden repartir equitativamente."

## Explicacion
Utilicé el operador de módulo (`%`) porque es la forma más directa de saber si un número es divisible por otro. Es un concepto fundamental: si el residuo es cero, el número es divisible; si no, me dice exactamente cuánto sobra.