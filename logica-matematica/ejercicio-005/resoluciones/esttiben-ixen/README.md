## Analisis

- Entrada: Un arreglo de objetos con `nombre` y `cantidad` actual de cada repuesto.
- Proceso: Comparar la cantidad actual contra un umbral mínimo (para alertas) y un límite máximo (para calcular reposición).
- Salida: Un arreglo con el estado de alerta del repuesto y la cantidad necesaria para alcanzar el tope de almacenamiento.

## Reglas identificadas

1. Estado Crítico: Si la cantidad es menor o igual a 5 unidades, el estado es "CRÍTICO".
2. Reposición: Si la cantidad es menor al límite máximo (50), se calcula la diferencia necesaria para completar el inventario.
3. Límite superior: Si el stock actual es 50 o más, no se requiere compra (0).

## Pruebas

### Caso normal

Entrada:
{ nombre: "Filtro de Aceite", cantidad: 3 }

Resultado esperado:
{ nombre: "Filtro de Aceite", estado: "CRÍTICO", cantidadAComprar: 47 }

### Caso borde

Entrada:
{ nombre: "Bujías", cantidad: 50 }

Resultado esperado:
{ nombre: "Bujías", estado: "NORMAL", cantidadAComprar: 0 }

## Explicacion final

La solución utiliza `map` para procesar cada elemento del inventario de forma independiente. La lógica evalúa primero la criticidad para la gestión operativa (alerta) y posteriormente calcula la brecha aritmética contra el límite máximo definido, permitiendo automatizar las órdenes de compra.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.