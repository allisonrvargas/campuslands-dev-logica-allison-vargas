# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de atomos de hidrogeno.
  - Cantidad de atomos de oxigeno.

- **Proceso:**
  - Calcular el total de atomos.
  - Verificar que la cantidad de atomos de cada elemento sea mayor que cero.
  - Determinar si la formula es valida.
  - Generar el mensaje correspondiente.

- **Salida:**
  - Total de atomos.
  - Estado de la formula.
  - Mensaje.
  - Explicacion del resultado.

## Reglas identificadas

1. El total de atomos se obtiene sumando las cantidades de hidrogeno y oxigeno.
2. La formula es valida si ambos valores son mayores que cero.
3. Si la formula es valida, el mensaje es **formula valida**; de lo contrario, el mensaje es **formula invalida**.

## Pruebas

### Caso normal

**Entrada:**

atomosHidrogeno: 2

atomosOxigeno: 1

**Resultado esperado:**

total_atomos: 3

formula_valida: true

mensaje: formula valida

explicacion: se verifico que la cantidad de atomos de cada elemento fuera mayor que cero.

### Caso borde

**Entrada:**

atomosHidrogeno: 0

atomosOxigeno: 1

**Resultado esperado:**

total_atomos: 1

formula_valida: false

mensaje: formula invalida

explicacion: se verifico que la cantidad de atomos de cada elemento fuera mayor que cero.

## Explicacion final

La solucion recibe la cantidad de atomos de cada elemento y calcula el total de atomos presentes. Luego valida que cada cantidad sea mayor que cero para determinar si la formula cumple con las condiciones establecidas. Finalmente muestra el total de atomos, el resultado de la validacion y el mensaje correspondiente.