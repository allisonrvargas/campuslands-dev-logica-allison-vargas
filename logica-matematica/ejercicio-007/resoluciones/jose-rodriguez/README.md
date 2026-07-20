# Plantilla de solucion 

## Analisis 

- Entrada:
    - `duraciones_canciones_min` (float): Una secuencia ordenada de numeros que representan la duracion exacta en minutos de cada pista musical reproducida de forma sucesiva.

- Proceso:
    1. Contar la cantidad de elementos presentes en la lista para obtener el tamano de la secuencia lineal.
    2. Sumar secuencialmente todos los valores flotantes de la lista para determinar el tiempo total acumalado en el bloque de reproduccion.
    3. Aplicar una estructura condicional compuesta con conjuncion logica (`and`) para evaluar dos umbrales fijos de la secuencia: el conteo de elementos debe ser mayor o igual a 3 **Y** el tiempo total sumado no debe rebasar el limite estricto de 15.00 minutos.

- Salida:
    - `total_canciones` (int).
    - `tiempo_total_acumulado` (float redondeado a 2 decimales).
    - `bloque_eficiente` (booleano: `True` o `False`).

## Reglas indentificadas

1. **Orden de adicion progrreesiva:** Las secuencias numericas depende directamente del comportamiento acumulativo de sus elementos individuales. El incremento en el numero de postas altera de forma proporcional el tiempo total del sistema.
2. **Limite de saturacion de la secuencia:** La regla de negocio impone un techo restrictivo de duracion maxima ($Tiempo \le 15.0\text{ min}$). Si la sumatoria de la secuencia cruza esta frontera, el bloque se invalida por fatiga de reproduccion.
3. **Restriccion de flujo minimo:** Para evitar secuencias triviales (como una unica cancion muy larga)d, se exige una densidad minima en el flujo de datos de al menos tres registros consecutivos ($Canciones \ge 3$), forzando una verdadera continuidad.

## Pruebas

### Caso normal 

Entrada:
- `duraciones_canciones_min`: [3.5, 4.2, 3.8]

Resultado esperado:
- `Canciones en secuencia`: 3 *(Cumple con el mínimo requerido de $\ge$ 3)*
- `Tiempo total`: 11.5 minutos *(Cálculo manual: 3.5 + 4.2 + 3.8 = 11.5)*
- `¿Secuencia Óptima?`: `True` *(Cálculo: 3 $\ge$ 3 es Verdadero Y 11.5 $\le$ 15.0 es Verdadero)*

### Caso borde

Entrada:
- `duraciones_canciones_min`: [5.0, 6.0, 4.5]

Resultado esperado:
- `Canciones en secuencia`: 3
- `Tiempo total`: 15.5 minutos *(Cálculo manual: 5.0 + 6.0 + 4.5 = 15.5)*
- `¿Secuencia Óptima?`: `False` *(Cálculo: La cantidad de canciones pasa la validación, pero la sumatoria acumulada de la secuencia excede el límite crítico por medio minuto de reproducción continua. Verdadero Y Falso resulta en Falso)*

## Explicacion final 

Esta solucion funciona debido a que se somete la progresion de una secuecia de datos variables a dos filtros logicos complemeentarios. Al limitar la sumaroria superior sy exigir una cantidad base inferior, el codigo smodela con precision matematica un rango seguro de comportamiento en serie. El control estructurado de errores (`try-except`) asegura que el script resista entradas de texto accidentales sin interrumpir el flujo secuencial.