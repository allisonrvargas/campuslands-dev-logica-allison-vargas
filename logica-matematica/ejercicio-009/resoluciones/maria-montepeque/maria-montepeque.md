# Ejercicio 009: Motor de Optimización de Grilla Horaria y Aritmética Modular para Cines

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión de complejos cinematográficos que procese la duración de una cartelera de películas y optimice su distribución en una grilla horaria dividida en bloques fijos de tiempo. El sistema calculará bloques completos consumidos y minutos residuales aplicando aritmética modular y programación defensiva para asegurar la sincronización exacta.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `cartelera`: Array de Objetos (Cada objeto representa una película con las propiedades: `titulo` [String] y `duracionMinutos` [Number]).
    * `intervaloBloque`: Number (Longitud en minutos de los segmentos fijos en los que se dividirá la grilla horaria).
* **Proceso:** 1. Validar defensivamente el divisor (`intervaloBloque`) mediante cláusulas de guarda condicionales para anular ejecuciones que provoquen indeterminaciones matemáticas.
    2. Recorrer la colección empleando bucles indexados secuenciales o iteradores nativos optimizados.
    3. Aplicar el operador de residuo aritmético módulo (`%`) para extraer la congruencia lineal del tiempo ($duracionMinutos \pmod{intervaloBloque}$).
    4. Truncar el cociente real a su valor entero inferior inmediato con `Math.floor()` para cuantificar los segmentos de tiempo íntegramente consumidos.
    5. Clasificar de manera dicotómica la exactitud horaria comparando el residuo de manera estricta contra el elemento neutro de la adición ($residuo \equiv 0$).
* **Salida:** Un Array de Objetos con la estructura estricta: `[{ titulo: string, bloquesCompletos: number, minutosSobrantes: number, perfectamenteSincronizado: boolean }]`.

---

## Reglas de Negocio

1. **Restricción de Magnitud del Divisor:** La constante del bloque del sistema debe satisfacer estrictamente la inecuación matemática:
    $$intervaloBloque > 0$$
2. **Criterio de Divisibilidad Exacta:** Un metraje cinematográfico se considera perfectamente divisible y acoplado a la grilla si y solo si el residuo de su división euclidiana es exactamente igual a cero.
3. **Aislamiento de Registros Corruptos:** Las películas con tiempos asignados nulos, inválidos o menores o iguales a cero ($\le 0$) son omitidas automáticamente del reporte final mediante directivas de control de flujo de salto interno (`continue`).

---

## Casos de Prueba

### 1. Optimización Horaria Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "cartelera": [
        { "titulo": "El Despertar de la IA Terrorífica", "duracionMinutos": 120 },
        { "titulo": "Ciberespacio Crítico", "duracionMinutos": 135 }
      ],
      "intervaloBloque": 30
    }
    ```
* **Resultado esperado:**
    ```json
    [
      {
        "titulo": "El Despertar de la IA Terrorífica",
        "bloquesCompletos": 4,
        "minutosSobrantes": 0,
        "perfectamenteSincronizado": true
      },
      {
        "titulo": "Ciberespacio Crítico",
        "bloquesCompletos": 4,
        "minutosSobrantes": 15,
        "perfectamenteSincronizado": false
      }
    ]
    ```

### 2. Activación de Guarda por Intervalo Inválido (Caso Borde)
* **Entrada:**
    ```json
    {
      "cartelera": [
        { "titulo": "El Despertar de la IA Terrorífica", "duracionMinutos": 120 }
      ],
      "intervaloBloque": 0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Parámetro de configuración inválido. El intervalo del bloque debe ser estrictamente mayor a cero."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** al inicio de la función para interceptar divisores nulos o negativos, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*) y previniendo desbordamientos lógicos en tiempo de ejecución. El análisis de la cartelera se realiza en una sola pasada iterativa con una complejidad de tiempo lineal $O(n)$ en el peor de los casos y una complejidad espacial de $O(n)$ dedicada de forma exclusiva a mapear el arreglo resultante, garantizando la máxima eficiencia en memoria.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```