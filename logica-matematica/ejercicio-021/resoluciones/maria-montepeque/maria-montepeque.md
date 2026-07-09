# Ejercicio 021: Motor de Auditoría de Rendimiento Competitivo y Ránking Táctico de eSports

## Análisis del Problema

El objetivo es desarrollar un componente de software para ligas de eSports y plataformas de videojuegos competitivos que procese las métricas de juego de una escuadra. El sistema calculará el puntaje ofensivo combinando bajas y asistencias, aplicará un techo restrictivo a los puntos por objetivos, descontará penalizaciones tácticas, asegurará un suelo antinegativos mediante *clamping* matemático y determinará el rango competitivo final aplicando programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `estadisticasEscuadra`: Un objeto con las variables de juego: `bajas` [Number], `asistencias` [Number], `muertes` [Number], `objetivosCapturados` [Number], y `advertenciasArbitro` [Number].
    * `multiplicadorDificultad`: Number (Factor flotante positivo que ajusta los puntos según la relevancia del torneo).
* **Proceso:** 1. Validar la existencia y llenado de los datos a través de una cláusula de guarda estructural para mitigar punteros nulos.
    2. Comprobar exhaustivamente que no existan valores negativos dentro de las métricas de rendimiento enviadas.
    3. Calcular el puntaje ofensivo multiplicando las bajas y asistencias por sus coeficientes de peso específicos.
    4. Determinar los puntos de macroestrategia aplicando un **tope restrictivo máximo** de 120 puntos mediante la función `Math.min()`.
    5. Consolidar las penalizaciones del réferi y de muertes para restarlas de la ecuación de juego.
    6. Aplicar un **suelo controlado mínimo** de 0 puntos empleando `Math.max()` para impedir registros negativos en la tabla de posiciones.
    7. Multiplicar el saldo depurado por el factor de dificultad y redondear el entero resultante de forma simétrica (`Math.round()`).
* **Salida:** Un objeto con la estructura estricta: `{ resultadoCalculo: { puntajeOfensivo: number, puntajeObjetivos: number, penalizacionesTotales: number, puntajeFinal: number }, evaluacion: string }`.

---

## Reglas de Negocio

1. **Ecuación del Puntaje de Juego:** El balance del desempeño de la escuadra se rige por las siguientes constantes y relaciones:
    * $\text{Puntaje Ofensivo} = (\text{bajas} \times 15) + (\text{asistencias} \times 10)$
    * $\text{Penalizaciones} = (\text{muertes} \times 8) + (\text{advertenciasArbitro} \times 25)$
2. **Techo de Objetivos de Mapa:** Los puntos provenientes de capturas de zonas u objetivos estratégicos tienen un límite absoluto de 120 puntos:
    $$P_{\text{objetivos}} = \min(\text{objetivosCapturados} \times 30, 120)$$
3. **Suelo Antinegativos (Clamping):** Un equipo con un pésimo desempeño acumulado jamás reflejará un subtotal por debajo de 0 en la tabla de posiciones:
    $$\text{Puntaje Final} = \max(0, \text{Puntaje Ofensivo} + P_{\text{objetivos}} - \text{Penalizaciones}) \times \text{multiplicadorDificultad}$$
4. **Escala de Rangos del Torneo:** El dictamen cualitativo formal se asigna según los siguientes umbrales del puntaje final redondeado:
    * Puntaje Final $\ge 250$: `"Rango Leyenda (Escuadra Élite)"`
    * Puntaje Final $\ge 120$ y $< 250$: `"Rango Maestro (Escuadra Competitiva)"`
    * Puntaje Final $< 120$: `"Rango Aspirante (Falta Coordinación)"`

---

## Casos de Prueba

### 1. Evaluación de Partida Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "estadisticasEscuadra": {
        "bajas": 12,
        "asistencias": 8,
        "muertes": 4,
        "objetivosCapturados": 3,
        "advertenciasArbitro": 0
      },
      "multiplicadorDificultad": 1.2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resultadoCalculo": {
        "puntajeOfensivo": 260,
        "puntajeObjetivos": 90,
        "penalizacionesTotales": 32,
        "puntajeFinal": 382
      },
      "evaluacion": "Rango Leyenda (Escuadra Élite)"
    }
    ```

### 2. Activación del Techo de Objetivos y Suelo de Puntos (Caso Borde)
* **Entrada:**
    ```json
    {
      "estadisticasEscuadra": {
        "bajas": 0,
        "asistencias": 0,
        "muertes": 20,
        "objetivosCapturados": 10,
        "advertenciasArbitro": 2
      },
      "multiplicadorDificultad": 1.5
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resultadoCalculo": {
        "puntajeOfensivo": 0,
        "puntajeObjetivos": 120,
        "penalizacionesTotales": 210,
        "puntajeFinal": 0
      },
      "evaluacion": "Rango Aspirante (Falta Coordinación)"
    }
    ```

### 3. Activación de Guarda por Estructura Vacía u Óbice Negativo (Caso Borde)
* **Entrada:**
    ```json
    {
      "estadisticasEscuadra": {
        "bajas": -5,
        "asistencias": 10,
        "muertes": 2,
        "objetivosCapturados": 1,
        "advertenciasArbitro": 0
      },
      "multiplicadorDificultad": 1.0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. Se detectaron parámetros nulos o valores negativos incoherentes en las estadísticas de la escuadra."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio del módulo para interceptar objetos vacíos o métricas de juego que violen las leyes físicas y del negocio (como valores menores a cero). Al operar sobre un único conjunto consolidado de datos primitivos en memoria, la solución se ejecuta en un tiempo constante y predecible de complejidad espacial y temporal $O(1)$, lo que garantiza una escalabilidad óptima para sistemas distribuidos de matchmaking o APIs de videojuegos de alta concurrencia.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```