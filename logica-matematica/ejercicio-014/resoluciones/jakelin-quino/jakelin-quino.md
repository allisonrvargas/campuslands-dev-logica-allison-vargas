## Analisis

- Entrada: El largo y ancho del diseño del tatuaje.
- Proceso: Calcular el área ($largo \times ancho$) y el perímetro ($2 \times (largo + ancho)$). Evaluar el área para estimar el tiempo de sesión.
- Salida: Área, perímetro y tiempo estimado en minutos.

## Reglas identificadas

1. Área = largo por ancho.
2. Perímetro = suma de todos los lados.
3. Si el área es mayor a 40 unidades cuadradas, el tiempo es 120 min; de lo contrario, 60 min.

## Pruebas

### Caso normal

Entrada:
largo: 10
ancho: 5

Resultado esperado:
area: 50
perimetro: 30
tiempo_estimado_minutos: 120

### Caso borde

Entrada:
largo: 4
ancho: 10

Resultado esperado:
area: 40
perimetro: 28
tiempo_estimado_minutos: 60

## Explicacion final

Para resolver este ejercicio, implementé las fórmulas geométricas básicas de un rectángulo. Utilicé variables simples para almacenar las dimensiones y realizar los cálculos. Posteriormente, apliqué una condicional 'if-else' para clasificar el tiempo necesario en función del tamaño calculado, lo cual es fundamental para organizar la agenda del tatuador.
