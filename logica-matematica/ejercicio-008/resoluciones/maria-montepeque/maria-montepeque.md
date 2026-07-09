# Ejercicio 008: Analizador Metrométrico de Tendencias Críticas y Consistencia en Sagas

## Análisis del Problema

El objetivo es desarrollar un componente de software para plataformas de análisis cinematográfico que procese las calificaciones de una saga de películas de ciencia ficción, calcule el promedio matemático exacto de la franquicia y determine la tasa de cambio secuencial entre entregas consecutivas para identificar patrones de mejora o declive aplicando programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `saga`: Array de Objetos (Cada objeto representa una película con las propiedades: `titulo` [String], y `puntuacion` [Number]).
* **Proceso:** 1. Comprobar la integridad de la entrada mediante una validación defensiva estructural para descartar arreglos vacíos o nulos.
    2. Verificar algebraicamente que los valores de las puntuaciones cumplan la condición de escala estándar.
    3. Ejecutar una reducción acumulativa de datos empleando `.reduce()` para sumar linealmente todas las puntuaciones y deducir el promedio exacto, aplicando `.toFixed(2)` para evitar distorsiones por desbordamiento de coma flotante.
    4. Recorrer la secuencia de calificaciones comparando cada índice contemporáneo contra su antecesor ($puntuacion_{i} \text{ vs } puntuacion_{i-1}$) para calcular la tasa de cambios positivos o negativos.
    5. Categorizar el comportamiento del patrón secuencial y la jerarquía de la saga mediante condicionales estructurados mutuamente excluyentes.
* **Salida:** Un objeto con la estructura estricta: `{ promedio: number, tendencia: string, auditoria: { totalPeliculas: number, patronSecuencial: string } }`.

---

## Reglas de Negocio

1. **Escala de Rango Cerrado:** Las valoraciones críticas individuales de cada película deben pertenecer estrictamente al intervalo cerrado matemático $[0, 10]$. Cualquier elemento que viole este margen interrumpe el proceso de manera temprana (*early return*) devolviendo un estado de error controlado.
2. **Patrón de Mejora Consecutiva:** Se define como una secuencia `"estrictamente creciente"` si y solo si el contador de incrementos entre películas consecutivas es exactamente igual al tamaño de la muestra menos uno ($n - 1$).
3. **Patrón de Declive Progresivo:** Se define como una secuencia `"estrictamente decreciente"` si y solo si el contador de decrementos equivale a $n - 1$. De no cumplirse ninguna de las dos condiciones anteriores, el patrón se clasifica como `"fluctuante"`.
4. **Control de Datos Vacíos (Caso Borde):** Ante un lote sin películas registradas (arreglo vacío), el sistema realiza una parada segura devolviendo el promedio en cero y el indicador de tendencia como `"sin registros"`.

---

## Casos de Prueba

### 1. Evaluación de Saga In Crescendo (Caso Normal - Mejora Consecutiva)
* **Entrada:**
    ```json
    {
      "saga": [
        { "titulo": "Ciberespacio Origin", "puntuacion": 7.2 },
        { "titulo": "Ciberespacio: El Despertar", "puntuacion": 8.5 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "promedio": 7.85,
      "tendencia": "creciente",
      "auditoria": {
        "totalPeliculas": 2,
        "patronSecuencial": "Mejora Consecutiva"
      }
    }
    ```

### 2. Aborto por Calificación Inválida (Caso Alterno - Fuera de Rango)
* **Entrada:**
    ```json
    {
      "saga": [
        { "titulo": "Ciberespacio Origin", "puntuacion": 7.2 },
        { "titulo": "Ciberespacio: El Despertar", "puntuacion": 12.5 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "promedio": 0,
      "tendencia": "error de rango",
      "auditoria": {
        "totalPeliculas": 0,
        "patronSecuencial": "Evaluación suspendida por datos corruptos en el lote."
      }
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "saga": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "promedio": 0,
      "tendencia": "sin registros",
      "auditoria": {
        "totalPeliculas": 0,
        "patronSecuencial": "Procesamiento cancelado por falta de elementos."
      }
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) para sanear el flujo operativo antes de ejecutar reducciones numéricas, evitando el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). El cálculo de la media aritmética y el rastreo de variaciones consecutivas se optimizan en una sola pasada iterativa, garantizando una complejidad de tiempo de $O(n)$ en el peor de los casos y una complejidad espacial de $O(1)$ al operar sobre los datos primitivos directamente sin duplicar arreglos en memoria.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```