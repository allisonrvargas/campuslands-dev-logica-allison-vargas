# Ejercicio 012: Motor de Auditoría Estadística y Rendimiento de Saques Deportivos

## Análisis del Problema

El objetivo es desarrollar un componente de software para análisis de analíticas deportivas que procese el historial de saques de un jugador, calcule la frecuencia relativa de éxito utilizando la ley clásica de Laplace y determine su categoría de rendimiento aplicando programación defensiva para evitar indeterminaciones matemáticas.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `historialSaques`: Array de Objetos (Cada objeto representa un saque con la propiedad: `resultado` [String, cuyos valores válidos son `"Efectivo"` o `"Fallido"`]).
* **Proceso:** 1. Validar que la entrada sea una lista válida y contenga al menos un registro mediante cláusulas de guarda para evitar la división por cero.
    2. Inicializar variables acumuladoras en `0` (`saquesEfectivos`, `saquesFallidos`) para contar las jugadas por categorías.
    3. Utilizar un ciclo indexado `for` o métodos iterativos nativos de alta velocidad ($O(n)$) para evaluar de forma secuencial cada saque.
    4. Aplicar la ley clásica de Laplace para determinar la frecuencia relativa de éxito, multiplicando por 100 para obtener el porcentaje.
    5. Redondear y acotar el flotante resultante a dos posiciones decimales (`.toFixed(2)`) para mantener la precisión.
    6. Determinar la categoría del jugador a través de una estructura condicional múltiple mutuamente excluyente.
* **Salida:** Un objeto con la estructura estricta: `{ auditoria: { totalSaques: number, efectivos: number, fallidos: number }, porcentajeExito: number, categoriaRendimiento: string }`.

---

## Reglas de Negocio

1. **Definición Probabilística (Ley de Laplace):** La probabilidad empírica de éxito se construye sumando los eventos observados (frecuencia relativa) sobre el total de la muestra:
    $$\text{Porcentaje de Éxito} = \left( \frac{\text{saquesEfectivos}}{\text{totalSaques}} \right) \times 100$$
2. **Escala de Rendimiento Estricta:** La clasificación deportiva se segmenta según los siguientes umbrales porcentuales:
    * Porcentaje $\ge 80\%$: `"Nivel Profesional"`
    * Porcentaje $\ge 50\%$ y $< 80\%$: `"Nivel Intermedio"`
    * Porcentaje $< 50\%$: `"En Entrenamiento"`
3. **Control Anti-Indeterminación (Caso Borde):** Si el vector de entrada no registra saques (arreglo vacío), el sistema realiza una parada segura para prevenir un error de división por cero ($0/0$), devolviendo la clasificación `"sin registros"`.

---

## Casos de Prueba

### 1. Evaluación de Historial Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "historialSaques": [
        { "resultado": "Efectivo" },
        { "resultado": "Fallido" },
        { "resultado": "Efectivo" },
        { "resultado": "Efectivo" },
        { "resultado": "Fallido" }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "auditoria": {
        "totalSaques": 5,
        "efectivos": 3,
        "fallidos": 2
      },
      "porcentajeExito": 60.00,
      "categoriaRendimiento": "Nivel Intermedio"
    }
    ```

### 2. Activación de Guarda por Historial Vacío (Caso Borde)
* **Entrada:**
    ```json
    {
      "historialSaques": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "auditoria": {
        "totalSaques": 0,
        "efectivos": 0,
        "fallidos": 0
      },
      "porcentajeExito": 0.00,
      "categoriaRendimiento": "sin registros"
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de **Cláusulas de Guarda** al inicio de la función para interceptar colecciones vacías o parámetros nulos, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). La clasificación y el conteo por categorías se unifican en un único ciclo iterativo optimizado, asegurando que la complejidad de tiempo se mantenga en un estricto $O(n)$ en el peor de los casos y una complejidad espacial de $O(1)$ al operar sobre los datos primitivos directamente sin duplicar estructuras pesadas en memoria.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```