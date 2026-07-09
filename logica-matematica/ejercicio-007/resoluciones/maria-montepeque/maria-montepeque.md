# Ejercicio 030: Motor de Auditoría de Secuencia y Reconstrucción de Líneas de Tiempo de Audio

## Análisis del Problema

El objetivo es desarrollar un componente de software para reproductores o plataformas de streaming que procese un listado de canciones de un álbum, valide la integridad y consecutividad de los índices de las pistas, registre desajustes secuenciales en una bitácora y genere una línea de tiempo acumulativa formateada en estándar cronométrico.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `album`: Array de Objetos (Cada objeto representa una canción con las propiedades: `pista` [Number], `titulo` [String], y `duracionSegundos` [Number]).
* **Proceso:** 1. Validar la existencia de elementos en la estructura mediante cláusulas de guarda preventivas para mitigar desbordamientos en tiempo de ejecución.
    2. Inicializar acumuladores independientes para rastrear el segundo de inicio progresivo de cada canción.
    3. Ejecutar un bucle iterativo lineal ($O(n)$) donde se evalúe que el índice `pista` de cada canción coincida exactamente con el orden físico esperado ($pista = i + 1$).
    4. Si existe una diferencia algebraica, marcar la secuencia como corrupta y almacenar el desajuste en una bitácora de errores.
    5. Aplicar operaciones de división entera (`Math.floor`) y residuo (`%`) para formatear los tiempos al estándar métrico de minutos y segundos (`MM:SS`).
* **Salida:** Un objeto con la estructura estricta: `{ auditoria: { secuenciaValida: boolean, totalPistas: number, duracionTotal: string }, errores: string[], lineaTiempo: { titulo: string, tiempoInicio: string }[] }`.

---

## Reglas de Negocio

1. **Sucesión Consecutiva Estricta:** Las secuencias de reproducción de álbumes y listas estables siguen una progresión aritmética unitaria exacta ($A_{n} = A_{n-1} + 1$), partiendo estrictamente desde el elemento base $1$.
2. **Cálculo Acumulativo de Línea de Tiempo:** El segundo de inicio de la pista actual ($S_{n}$) es idéntico a la sumatoria del tiempo de duración de todas las pistas precedentes:
    $$S_{n} = \sum_{i=1}^{n-1} \text{duracionSegundos}_{i}$$
3. **Estandarización Temporal:** Para el formateo estético de la salida se requiere que los residuos o valores menores a $10$ antepongan un cero a la izquierda mediante el método de cadena `.padStart(2, '0')`.
4. **Control de Colecciones Vacías (Caso Borde):** Si el listado de canciones ingresado se encuentra vacío o nulo, el sistema realiza una parada segura devolviendo la estructura base con contadores en cero y valores nulos para mitigar excepciones de lectura de propiedades.

---

## Casos de Prueba

### 1. Auditoría Completa de Álbum (Caso Normal - Exitoso)
* **Entrada:**
    ```json
    {
      "album": [
        { "pista": 1, "titulo": "Blinding Lights", "duracionSegundos": 200 },
        { "pista": 2, "titulo": "Starboy", "duracionSegundos": 230 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "auditoria": {
        "secuenciaValida": true,
        "totalPistas": 2,
        "duracionTotal": "07:10"
      },
      "errores": [],
      "lineaTiempo": [
        { "titulo": "Blinding Lights", "tiempoInicio": "00:00" },
        { "titulo": "Starboy", "tiempoInicio": "03:20" }
      ]
    }
    ```

### 2. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "album": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "auditoria": {
        "secuenciaValida": false,
        "totalPistas": 0,
        "duracionTotal": "00:00"
      },
      "errores": ["Error: No se suministraron pistas evaluables en el lote actual."],
      "lineaTiempo": []
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) para sanear el flujo de control de la aplicación, evitando el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). El cálculo de la línea de tiempo acumulativa, la validación secuencial y la transformación cronométrica se ejecutan en un único bucle iterativo de complejidad de tiempo lineal $O(n)$ en el peor de los casos y una complejidad espacial de $O(n)$ para la estructura de salida, garantizando un alto rendimiento y un diseño altamente mantenible.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```