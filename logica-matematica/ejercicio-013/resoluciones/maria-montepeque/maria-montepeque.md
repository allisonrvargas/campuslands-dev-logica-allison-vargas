# Ejercicio 013: Motor de Telemetría Geométrica y Trayectorias Tridimensionales de Caída Libre

## Análisis del Problema

El objetivo es desarrollar un componente de software para sistemas de telemetría aeronáutica o simulación deportiva que procese las coordenadas espaciales $[X, Y, Z]$ registradas consecutivamente durante el vuelo de un paracaidista. El sistema calculará los módulos de los vectores de desplazamiento por cada tramo y deducirá la distancia total acumulada aplicando la fórmula de distancia euclidiana 3D bajo principios de programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `puntosControl`: Array de Arrays de Numbers (`Array<Array<number>>` que representa las coordenadas espaciales $[X, Y, Z]$ consecutivas del salto).
* **Proceso:** 1. Validar defensivamente mediante cláusulas de guarda que la trayectoria disponga al menos de un origen y un final para ser procesada.
    2. Inicializar un acumulador flotante `distanciaTotalAcumulada` en `0` y una lista para la bitácora de tramos.
    3. Iterar de forma indexada mediante un ciclo `for` hasta la penúltima posición (`length - 1`) para comparar siempre el punto actual con su sucesor inmediato.
    4. Validar que cada nodo intermedio posea exactamente 3 dimensiones físicas (X: Latitud/Eje X, Y: Longitud/Eje Y, Z: Altitud).
    5. Calcular el módulo del vector desplazamiento empleando la fórmula tridimensional de distancia euclidiana.
    6. Formatear y almacenar el desglose de cada tramo en la bitácora de salida con precisión decimal.
* **Salida:** Un objeto con la estructura estricta: `{ bitacoraTramos: string[], estadisticas: { totalPuntosProcesados: number, distanciaTotalMetros: number } }`.

---

## Reglas de Negocio

1. **Geometría del Espacio Real (3D):** En disciplinas de caída libre, omitir la altitud ($Z$) rompe la veracidad del cálculo físico. El sistema debe evaluar obligatoriamente los tres componentes cartesianos mediante la fórmula euclidiana espacial:
    $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$
2. **Estructura Acumulativa Dinámica:** El algoritmo no calcula un único vector estático desde el origen al fin, sino que itera a lo largo del recorrido punto por punto para simular la acumulación real del desplazamiento cinemático en el aire.
3. **Consistencia de Datos Dimensionales (Caso Borde):** Si un punto de control carece de alguno de los ejes espaciales (longitud interna del subarray diferente de 3), la operación geométrica se interrumpe inmediatamente mediante un retorno anticipado para prevenir cálculos erróneos o la propagación de valores indeterminados (`NaN`).

---

## Casos de Prueba

### 1. Procesamiento de Trayectoria Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "puntosControl": [
        [0, 0, 2000],
        [150, 200, 1000],
        [300, 400, 0]
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "bitacoraTramos": [
        "Tramo 1: Desplazamiento de 1044.03 metros medidos entre el punto 1 y el punto 2.",
        "Tramo 2: Desplazamiento de 1044.03 metros medidos entre el punto 2 y el punto 3."
      ],
      "estadisticas": {
        "totalPuntosProcesados": 3,
        "distanciaTotalMetros": 2088.06
      }
    }
    ```

### 2. Activación de Guarda por Inconsistencia Dimensional (Caso Borde)
* **Entrada:**
    ```json
    {
      "puntosControl": [
        [0, 0, 2000],
        [150, 200],
        [300, 400, 0]
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "bitacoraTramos": ["Error: Estructura de telemetría corrupta. Se detectaron nodos que no poseen las 3 dimensiones espaciales required."],
      "estadisticas": {
        "totalPuntosProcesados": 0,
        "distanciaTotalMetros": 0
      }
    }
    ```

---

## Arquitectura de la Solución

La solución implementa el patrón de diseño de **Cláusulas de Guarda** al inicio y durante la iteración del módulo para interceptar de inmediato arreglos de trayectoria vacíos o con dimensiones corruptas, resolviendo con retornos anticipados (*Early Returns*) para evitar la deformación del flujo del software en bloques anidados `if/else`. El procesamiento de las matrices se efectúa en un único ciclo iterativo de complejidad de tiempo lineal $O(n)$ respecto al número de posiciones registradas en la telemetría, operando de manera predecible y óptima en memoria.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```