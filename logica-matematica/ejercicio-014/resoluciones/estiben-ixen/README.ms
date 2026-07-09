## Analisis

- Entrada: `figura` (tipo de geometría) y `dimensiones` (radio para círculos, base/altura para rectángulos).
- Proceso: Aplicar fórmulas geométricas estándar para determinar la extensión superficial y el borde del diseño.
- Salida: Un objeto con el área, perímetro y el costo calculado según la tarifa del estudio.

## Reglas identificadas

1. Área del Círculo: $A = \pi \cdot r^2$
2. Área del Rectángulo: $A = base \cdot altura$
3. Costo: Se cobra una tarifa fija por centímetro cuadrado calculado ($5.000$ COP).



## Pruebas

### Caso normal

Entrada:
figura: "rectangulo", dimensiones: { base: 10, altura: 5 }

Resultado esperado:
{ area: "50.00", perimetro: "30.00", costoEstimado: "250.000 COP" }

### Caso borde

Entrada:
figura: "circulo", dimensiones: { radio: 0 }

Resultado esperado:
{ area: "0.00", perimetro: "0.00", costoEstimado: "0 COP" }

## Explicacion final

La solución utiliza una estructura `switch` para manejar las diferentes geometrías posibles. Esto permite que el sistema sea escalable: si el estudio decide empezar a tatuar triángulos o hexágonos, solo es necesario añadir un nuevo caso en la lógica sin alterar el flujo principal de cálculo de costos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.