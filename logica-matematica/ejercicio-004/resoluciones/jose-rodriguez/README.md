# Plantilla de solucion

## Analisis 

- Entrada: 
    - `stock_actual` (int): Cantidad de motocicletas fisicas que se encuentran actualmente en la bodega.
    - `stock_minimo` (int): Limite inferior seguro de existencias antes de caer en desabastecimiento.
    - `stock_maximo` (int): Capacidad maxima fisica o financiera permitida para almacenar esa referencia de moto.

- Proceso:
    1. Verificar que los limites del rango sean coherentes (el `stock_minimo` debe ser estrictamente menor que el `stock_maximo`).
    2. Restar el `stock_actual` al `stock_maximo` para calcular la capacidad dispobible en almacenamiento.
    3. Evaluar mediante estructuras de control condicionales anidadas (`if-elif-else`) la posicion del `stock_actual` respecto a las fronteras numericas:
    - Si es menor que el minimo, activar bandera de reorden.
    - Si es mayor que el maximo, activcar alerta de sobre-stock.
    - Si esta entre ambos valores (inclusive), declarar estado optimo.

- Salida:
    - `estado`(cadena de texto con el diagnostico del inventario).
    - `necesita_pedido` (booleano: `True` o `False`).
    - `capacidad_disponible` (int)

## Reglas identificadas 

1. **Consistencia de fronteras:** No se puede evaluar un rango numerico si el limite inferior es superior o igual al superior ($Minimo < Maximo$). Romper esta regla matematica invalida el proceso de control.
2. **Control de minimos (Zona Critica):** Si el `stock_actual` cae por debajo del `stock_minimo` ($Actual < Minimo$), la regla de negocio obliga a disparar una senal de alerta y calcular las unidades necesarias para reabastecer el inventario hasta su tope maximo.
3. **Control de maximos (Zona de Saturacion):** Si el `stock_actual` supera el `stock_maximo` ($Actual > Maximo$), el sistema debe bloquear cualquier intento de compra o ingreso de mercancia, ya que viola las restricciones de capacidad fisica o presupuestaria del almacen.

## Pruebas 

### Caso normal 

Entrada:
- `stock_actual`: 12
- `stock_minimo`: 15
- `stock_maximo`: 50

Resultado esperado:
- `Estado del Stock`: "CRÍTICO: Alerta de desabastecimiento. Se requiere reordenar de inmediato."
- `Espacio libre en almacén`: 38 *(Cálculo: 50 - 12 = 38)*
- `¿Necesita pedido?`: `True` *(Cálculo: 12 < 15 es Verdadero. Recomendación de compra: 50 - 12 = 38 unidades)*

### Caso borde

Entrada:
- `stock_actual`: 50
- `stock_minimo`: 10
- `stock_maximo`: 50

Resultado esperado:
- `Estado del Stock`: "ÓPTIMO: El nivel de inventario se encuentra en el rango seguro."
- `Espacio libre en almacén`: 0 *(Cálculo: 50 - 50 = 0)*
- `¿Necesita pedido?`: `False` *(Cálculo: 50 no es menor que 10, y 50 no es estrictamente mayor que 50. Cae en el bloque óptimo al tocar exactamente el límite máximo permitido)*

## Explicacion final 

Esta solucion funciona porque implementa un sistema divisor de tres zonas logicas (Bajo el rango, En rango y Sobre el rango) mediante condiciones mutuamente excluyentes. Al validar primero la integridad de las variables de control (minimos y maximos), el algoritmo garantiza que los calcvulos de capacidad disponible y las suferencias de ordenes de compra automatizadas sean matematicamente viables y exactas.

