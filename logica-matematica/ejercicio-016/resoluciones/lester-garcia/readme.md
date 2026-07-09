# Plantilla de solucion

## Analisis

- **Entrada:**
  - Presupuesto inicial.
  - Porcentaje de descuento.

- **Proceso:**
  - Calcular el valor del descuento aplicando el porcentaje al presupuesto.
  - Restar el descuento al presupuesto inicial.
  - Comparar el total a pagar con el valor establecido.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Descuento.
  - Total a pagar.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El descuento se calcula multiplicando el presupuesto por el porcentaje de descuento y dividiendo entre 100.
2. El total a pagar se obtiene restando el descuento al presupuesto inicial.
3. Si el total a pagar es menor o igual a 2200, la categoria es **presupuesto optimizado**; de lo contrario, es **presupuesto regular**.

## Pruebas

### Caso normal

**Entrada:**

presupuesto: 2500

descuentoPorcentaje: 15

**Resultado esperado:**

descuento: 375

total_pagar: 2125

categoria: presupuesto optimizado

explicacion: se calculo el descuento sobre el presupuesto y se obtuvo el total a pagar.

### Caso borde

**Entrada:**

presupuesto: 2000

descuentoPorcentaje: 5

**Resultado esperado:**

descuento: 100

total_pagar: 1900

categoria: presupuesto optimizado

explicacion: se calculo el descuento sobre el presupuesto y se obtuvo el total a pagar.

## Explicacion final

La solucion recibe el presupuesto inicial y el porcentaje de descuento. Primero calcula el valor del descuento aplicando el porcentaje indicado, luego obtiene el total a pagar restando ese descuento al presupuesto. Finalmente compara el resultado con el limite establecido para clasificar el presupuesto y muestra todos los datos solicitados.