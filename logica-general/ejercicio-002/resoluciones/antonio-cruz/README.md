# Entrega Ejercicio 002 - Antonio Cruz

## Analisis

- Entrada: Un objeto con nombre, cantidadActual y minimoPermitido.
- Proceso: Comprobar que los numeros sean validos y calcular si falta stock.
- Salida: Objeto indicando si se debe pedir, la cantidad y el estado.

## Reglas identificadas

1. Si las cantidades son negativas, se marca como error de datos.
2. Si el stock actual es menor o igual al minimo, se calcula un reabastecimiento del doble del minimo menos lo actual.
3. Si hay suficiente stock, no se realiza ninguna accion.

## Pruebas

### Caso normal
Entrada: cantidadActual: 2, minimoPermitido: 5
Resultado esperado: pedirStock: true, cantidadNuevas: 8, estado: "comprar_urgente"

### Caso borde
Entrada: cantidadActual: -2, minimoPermitido: 4
Resultado esperado: pedirStock: false, cantidadNuevas: 0, estado: "error_datos_invalidos"

## Explicacion final
La solucion filtra primero los valores imposibles (negativos) para evitar errores en las operaciones lógicas antes de calcular las compras necesarias.