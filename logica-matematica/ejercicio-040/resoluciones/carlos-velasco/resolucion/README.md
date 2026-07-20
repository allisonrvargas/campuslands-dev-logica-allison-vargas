# Plantilla de solución

## Analisis

* **Entrada**: `inicial` (ventas día 1), `tasa` (crecimiento diario), `dias` (duración) y `costoFijo` (deducción diaria).
* **Proceso**: Cálculo iterativo acumulativo de las ventas netas diarias aplicando un incremento exponencial y restando los costos operativos fijos cada día.
* **Salida**: Objeto con la `ganancia_neta_total` (formateada a dos decimales), la `clasificacion` (Rentable o En pérdida) y un resumen de la simulación.

## Reglas identificadas

1. La ganancia diaria se calcula restando el `costoFijo` a las ventas del día actual.
2. El crecimiento de las ventas sigue una tasa compuesta diaria: `ventas *= (1 + tasa)`.
3. El proyecto se clasifica como "Rentable" solo si el acumulado neto final es mayor a 0.

## Pruebas

### Caso normal

* **Entrada**: `inicial: 100, tasa: 0.1, dias: 5, costoFijo: 80`
* **Resultado esperado**: `{ ganancia_neta_total: "210.51", clasificacion: "Rentable", ... }`

### Caso borde

* **Entrada**: `inicial: 50, tasa: 0.05, dias: 3, costoFijo: 70`
* **Resultado esperado**: `{ ganancia_neta_total: "-52.38", clasificacion: "En pérdida", ... }`

## Explicacion final

La solución funciona al utilizar un ciclo de control que actualiza dinámicamente el valor de las ventas en función del tiempo transcurrido, permitiendo observar el efecto compuesto del crecimiento frente a un costo constante. El acumulado neto ofrece una métrica real de sostenibilidad operativa del negocio simulado.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Día 1)**: `100 - 80 = 20`.
* **Ejemplo manual (Día 2)**: `(100 * 1.1) - 80 = 30`.