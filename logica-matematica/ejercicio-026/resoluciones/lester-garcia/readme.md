# Plantilla de solucion

## Analisis

- **Entrada:**
  - Velocidad en kilometros por hora.
  - Tiempo de recorrido en horas.

- **Proceso:**
  - Convertir la velocidad de kilometros por hora a metros por segundo.
  - Calcular la distancia recorrida.
  - Evaluar varias condiciones utilizando la velocidad convertida y la distancia.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Velocidad en metros por segundo.
  - Distancia recorrida.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La velocidad en metros por segundo se calcula dividiendo la velocidad en kilometros por hora entre 3.6 y la distancia se obtiene multiplicando la velocidad por el tiempo.
2. Si la velocidad en metros por segundo es mayor o igual a 90 y la distancia es mayor o igual a 600, la categoria es **hiperdeportivo extremo**.
3. Si no cumple ambas condiciones pero la velocidad en metros por segundo es mayor o igual a 80, la categoria es **hiperdeportivo**; en otro caso, la categoria es **deportivo**.

## Pruebas

### Caso normal

**Entrada:**

velocidadKmh: 340

tiempoHoras: 2

**Resultado esperado:**

velocidad_ms: 94.44444444444444

distancia: 680

categoria: hiperdeportivo extremo

explicacion: se convirtio la velocidad a metros por segundo y se calculo la distancia recorrida para clasificar el vehiculo.

### Caso borde

**Entrada:**

velocidadKmh: 300

tiempoHoras: 1

**Resultado esperado:**

velocidad_ms: 83.33333333333333

distancia: 300

categoria: hiperdeportivo

explicacion: se convirtio la velocidad a metros por segundo y se calculo la distancia recorrida para clasificar el vehiculo.

## Explicacion final

La solucion recibe la velocidad del vehiculo en kilometros por hora y el tiempo de recorrido. Primero convierte la velocidad a metros por segundo y luego calcula la distancia recorrida. Finalmente evalua varias condiciones: para ser **hiperdeportivo extremo** debe cumplir simultaneamente con la velocidad minima y la distancia requerida; si solo cumple el criterio de velocidad, se clasifica como **hiperdeportivo**; en caso contrario, se considera **deportivo**. Todos los resultados se muestran al finalizar.