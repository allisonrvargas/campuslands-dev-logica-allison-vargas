# Ejercicio 035: Cálculo de Tiempo en Dibujo Digital

## Análisis
- **Entrada:** `distancia_pixel` (total a recorrer), `velocidad_pixel_segundo` (velocidad de trazo), `es_digital_tableta` (booleano).
- **Proceso:** 1. Validar que las entradas sean positivas.
    2. Calcular el tiempo base: $tiempo = distancia / velocidad$.
    3. Aplicar bonificación de eficiencia (reducción del 20%) si se usa tableta.
    4. Redondear a dos decimales.
- **Salida:** `tiempo_final` (segundos) y `detalle` del proceso.

## Reglas identificadas

1. **Validación:** Cualquier medida $\leq 0$ resulta en un tiempo de 0.
2. **Cálculo Base:** División directa entre distancia y velocidad.
3. **Optimización:** Si `es_digital_tableta` es verdadero, el tiempo se multiplica por $0.80$.

## Pruebas

### Caso normal
- **Entrada:** `distancia: 100`, `velocidad: 10`, `es_digital_tableta: false`
- **Resultado esperado:** `10.00`

### Caso borde
- **Entrada:** `distancia: 50`, `velocidad: 5`, `es_digital_tableta: true`
- **Resultado esperado:** `8.00`

## Explicación final
La lógica implementa la fórmula física de tiempo ($t = d/v$). Se añadió un factor de eficiencia para representar el flujo de trabajo en tableta digital, el cual reduce el tiempo total de ejecución en un 20%. La validación inicial asegura la integridad de los datos evitando errores matemáticos.

## Sugerencia
Verifica cada operación con cálculos manuales antes de confiar en el código. Asegúrate de manejar correctamente el tipo de dato booleano en la lógica de decisión.

## Autor
* **Nombre:** [Tu Nombre]
* **Curso:** Campuslands - Lógica Matemática 035