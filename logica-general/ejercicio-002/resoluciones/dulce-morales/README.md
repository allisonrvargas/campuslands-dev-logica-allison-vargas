# Plantilla de solucion

## Analisis

- Entrada: Un objeto `producto` con las propiedades `nombre` (texto), `stockActual` (número) y `stockMinimoSeguridad` (número).
- Proceso: Validar que los datos de stock no sean negativos y comparar el inventario en tiempo real contra el límite de seguridad para calcular la orden de compra si es necesario.
- Salida: Un objeto con el estado del almacén, si se activa o no la alerta de compra y la cantidad exacta de unidades a pedir.

## Reglas identificadas

1. Regla de Quiebre de Stock: Si el stock actual es menor o igual al stock mínimo de seguridad, se debe activar la alerta de compra en verdadero (`true`).
2. Regla de Consistencia Numérica: Si cualquiera de los valores de stock ingresados es menor que cero, se detiene el proceso y se retorna un estado de error de stock negativo.

## Pruebas

### Caso normal

Entrada:
producto: {
  nombre: "Cautín para Soldar ESP32",
  stockActual: 3,
  stockMinimoSeguridad: 10
}

Resultado esperado:
alertaCompra: true
unidadesPedir: 22
estadoAlmacen: "solicitar_reabastecimiento"

### Caso borde

Entrada:
producto: {
  nombre: "Destornillador de Precisión",
  stockActual: -5,
  stockMinimoSeguridad: 5
}

Resultado esperado:
alertaCompra: false
unidadesPedir: 0
estadoAlmacen: "error_stock_negativo"

## Explicacion final

La solución funciona porque intercepta los valores erróneos mediante una condición de control inicial para evitar cálculos con números negativos. Si los datos son válidos, utiliza una comparación lógica directa que determina si el inventario cayó a niveles críticos y calcula automáticamente el lote óptimo para restablecer el almacén sin perder la continuidad operativa.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.