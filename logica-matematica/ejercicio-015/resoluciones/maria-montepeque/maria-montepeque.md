# Ejercicio 015: Motor de Telemetría Cinemática y Análisis de Trazo Vectorial para Lienzos Digitales

## Análisis del Problema

El objetivo es desarrollar un componente de software para aplicaciones de ilustración o motores gráficos que procese los fragmentos de un trazo vectorial registrados por el puntero. El sistema calculará la longitud relativa en píxeles de cada segmento empleando cinemática básica, acumulará el tiempo de dibujo activo y evaluará la dinámica global del pincel aplicando programación defensiva ante telemetrías corruptas o inconsistentes.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `registrosMuestreo`: Array de Objetos (Cada objeto representa un fragmento del trazo con las propiedades: `tramo` [String], `velocidad` [Number, en px/s], y `tiempo` [Number, en segundos]).
* **Proceso:** 1. Validar la existencia y llenado del arreglo de muestras físicas mediante cláusulas de guarda para mitigar punteros nulos o vacíos.
    2. Inicializar acumuladores independientes para la distancia total en píxeles, el tiempo total de interpolación y el conteo de tramos válidos.
    3. Recorrer secuencialmente los elementos mediante un ciclo iterativo lineal ($O(n)$).
    4. Validar mediante condicionales de control que la velocidad y el tiempo de cada objeto sean reales y mayores o iguales a cero.
    5. Multiplicar la velocidad por el tiempo en cada iteración para obtener la longitud relativa del segmento.
    6. Calcular la velocidad media del recorrido completo y evaluar la dinámica del pincel a través de una estructura condicional selectiva.
* **Salida:** Un objeto con la estructura estricta: `{ telemetria: { pixelesTotales: number, tiempoActivoSegundos: number, velocidadMediaPxs: number }, diagnostico: string }`.

---

## Reglas de Negocio

1. **Ley Cinemática del Espacio en Pantalla:** La cantidad de píxeles que recorre el puntero en un segmento viene determinada de manera estricta por el producto de la velocidad de muestreo por su tiempo de duración:
    $$d = v \cdot t$$
2. **Exclusión Absoluta de Magnitudes Negativas (Caso Borde):** El flujo temporal y cinemático dentro de un entorno de software gráfico debe ser progresivo ($t \ge 0$ y $v \ge 0$). Los registros menores a cero se consideran anomalías físicas del hardware y abortan el proceso inmediatamente con un retorno anticipado asignando un estado de error.
3. **Consolidación mediante Acumuladores:** El programa no debe estimar valores estáticos o promedios aislados, sino sumar progresivamente los tramos para representar fielmente la longitud total del vector continuo.
4. **Criterio de Dinámica de Trazo:** El diagnóstico del trazo se evalúa de manera dicotómica basándose en la velocidad media final:
    * Velocidad Media $\ge 120\text{ px/s}$: `"Trazo Dinámico (Rápido)"`
    * Velocidad Media $< 120\text{ px/s}$: `"Trazo Preciso (Lento)"`

---

## Casos de Prueba

### 1. Procesamiento de Trazo Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "registrosMuestreo": [
        { "tramo": "Inicio-Curva", "velocidad": 150, "tiempo": 0.5 },
        { "tramo": "Curva-Ascenso", "velocidad": 180, "tiempo": 0.4 },
        { "tramo": "Remate-Final",  "velocidad": 100, "tiempo": 0.3 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "telemetria": {
        "pixelesTotales": 177,
        "tiempoActivoSegundos": 1.2,
        "velocidadMediaPxs": 147.50
      },
      "diagnostico": "Trazo Dinámico (Rápido)"
    }
    ```

### 2. Activación de Guarda por Anomalía Temporal (Caso Borde)
* **Entrada:**
    ```json
    {
      "registrosMuestreo": [
        { "tramo": "Inicio-Curva", "velocidad": 150, "tiempo": -0.5 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. Se detectaron magnitudes negativas en la telemetría del trazo."
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "registrosMuestreo": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "telemetria": {
        "pixelesTotales": 0,
        "tiempoActivoSegundos": 0,
        "velocidadMediaPxs": 0
      },
      "diagnostico": "sin registros"
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio de la función para interceptar colecciones vacías o parámetros nulos, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). La recolección de las magnitudes físicas y la suma acumulativa se ejecutan en un único recorrido lineal de complejidad de tiempo $O(n)$ en el peor de los casos y una complejidad espacial de $O(1)$ al operar directamente sobre tipos de datos primitivos en memoria, garantizando un rendimiento óptimo en tiempo real para el renderizado del lienzo.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```