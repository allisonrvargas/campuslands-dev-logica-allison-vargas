# Ejercicio 029: Motor de Conversión Métrica y Clasificación de Telemetría Automotriz

## Análisis del Problema

El objetivo es desarrollar un componente de software para un sistema de telemetría automotriz que reciba las especificaciones imperiales de un vehículo, procese la homologación internacional a unidades del Sistema Internacional (km/h y kW) mediante factores de conversión exactos y determine su categoría de rendimiento aplicando programación defensiva ante lecturas físicas incoherentes.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `auto`: Un objeto con las propiedades: `modelo` [String], `velocidadMph` [Number], y `potenciaHp` [Number].
* **Proceso:** 1. Validar mediante una compuerta lógica inicial (cláusulas de guarda) que las entradas numéricas existan y no sean negativas para anular anomalías físicas en la telemetría.
    2. Aplicar el factor multiplicador exacto $1.60934$ a la variable `velocidadMph` para obtener el equivalente métrico en km/h.
    3. Aplicar el factor de conversión industrial $0.7457$ a la variable `potenciaHp` para transformarla a kilovatios (kW).
    4. Redondear y acotar los flotantes resultantes a dos posiciones decimales (`.toFixed(2)`) para mantener la legibilidad técnica.
    5. Clasificar el rendimiento evaluando de forma descendente los rangos establecidos de velocidad final en km/h.
* **Salida:** Un objeto con la estructura estricta: `{ modelo: string, especificacionesMetricas: { velocidadKmh: number, potenciaKw: number }, clasificacionRendimiento: string }`.

---

## Reglas de Negocio

1. **Exactitud Conversacional:** Para la homologación internacional, los factores de conversión física son constantes inmutables del sistema:
    * $1\text{ mph} = 1.60934\text{ km/h}$
    * $1\text{ hp} = 0.7457\text{ kW}$
2. **Criterio Jerárquico de Rendimiento:** La segmentación depende estrictamente de los umbrales de velocidad final calculados en el sistema métrico:
    * Velocidad $\ge 400\text{ km/h}$: `"Hypercar - Leyenda (Megacar)"`
    * Velocidad $\ge 300\text{ km/h}$ y $< 400\text{ km/h}$: `"Hiperdeportivo de Élite"`
    * Velocidad $< 300\text{ km/h}$: `"Deportivo de Alto Rendimiento"`
3. **Resistencia ante Negativos (Caso Borde):** Velocidades o potencias por debajo de cero ($v < 0$ o $p < 0$) se consideran datos corruptos. El software interrumpe el procesamiento de manera segura mediante un retorno anticipado asignando la clasificación `"error de telemetría"`.

---

## Casos de Prueba

### 1. Homologación de Vehículo de Élite (Caso Normal)
* **Entrada:**
    ```json
    {
      "auto": {
        "modelo": "Bugatti Chiron",
        "velocidadMph": 261,
        "potenciaHp": 1500
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "modelo": "Bugatti Chiron",
      "especificacionesMetricas": {
        "velocidadKmh": 420.04,
        "potenciaKw": 1118.55
      },
      "clasificacionRendimiento": "Hypercar - Leyenda (Megacar)"
    }
    ```

### 2. Homologación de Deportivo Estándar (Caso Alterno)
* **Entrada:**
    ```json
    {
      "auto": {
        "modelo": "Subaru BRZ",
        "velocidadMph": 140,
        "potenciaHp": 228
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "modelo": "Subaru BRZ",
      "especificacionesMetricas": {
        "velocidadKmh": 225.31,
        "potenciaKw": 170.02
      },
      "clasificacionRendimiento": "Deportivo de Alto Rendimiento"
    }
    ```

### 3. Activación de Guarda por Anomalía Física (Caso Borde)
* **Entrada:**
    ```json
    {
      "auto": {
        "modelo": "Prototipo Invalido",
        "velocidadMph": -10,
        "potenciaHp": 500
      }
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "modelo": "Prototipo Invalido",
      "especificacionesMetricas": {
        "velocidadKmh": 0,
        "potenciaKw": 0
      },
      "clasificacionRendimiento": "error de telemetría"
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** con retornos anticipados (*Early Returns*) para sanear el flujo operativo antes de ejecutar operaciones aritméticas pesadas. Al validar y abortar los escenarios de datos negativos o nulos al inicio de la función, se elimina el acoplamiento y el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). Las operaciones de conversión y redondeo se realizan bajo una complejidad constante $O(1)$, garantizando una velocidad de respuesta en tiempo real óptima para sistemas embebidos de telemetría.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```