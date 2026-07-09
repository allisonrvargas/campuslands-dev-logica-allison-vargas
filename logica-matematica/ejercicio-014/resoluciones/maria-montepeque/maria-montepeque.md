# Ejercicio 014: Motor de Cotización Comercial y Análisis Métrico Geométrico para Tatuajes

## Análisis del Problema

El objetivo es desarrollar un componente de software para estudios de tatuajes que procese un conjunto de formas geométricas componentes de un diseño, calcule el área total de relleno y el perímetro total delineado utilizando fórmulas estándar, y aplique tasas de costo por centímetro y centímetro cuadrado para generar un presupuesto automatizado bajo principios de programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `componentesTatuaje`: Array de Objetos (Cada objeto representa una figura geométrica con las propiedades: `tipo` [String], `radio` [Number], `base` [Number], o `altura` [Number] según corresponda).
* **Proceso:** 1. Validar perimetralmente mediante cláusulas de guarda que el diseño no venga vacío o nulo para mitigar excepciones en tiempo de ejecución.
    2. Declarar variables acumuladoras en cero para el área total de relleno y el perímetro total delineado.
    3. Iterar sobre el arreglo utilizando métodos iterativos nativos u óptimos ($O(n)$).
    4. Implementar un selector condicional (`switch`) que evalúe y aplique las fórmulas geométricas estándar controlando valores inválidos.
    5. Acumular incrementalmente los resultados de cada componente con precisión decimal.
    6. Multiplicar las magnitudes totales por las tasas de costo del estudio para deducir la cotización monetaria final.
* **Salida:** Un objeto con la estructura estricta: `{ metricas: { areaTotalCm2: number, perimetroTotalCm: number }, presupuesto: { costoDelineado: number, costoRelleno: number, totalNeto: number } }`.

---

## Reglas de Negocio

1. **Fórmulas Geométricas Estándar:** El sistema procesa las magnitudes según las siguientes ecuaciones matemáticas:
    * **Círculo:** $A = \pi \cdot r^2$, $P = 2 \cdot \pi \cdot r$
    * **Rectángulo:** $A = b \cdot h$, $P = 2 \cdot (b + h)$
    * **Triángulo Rectángulo:** $A = \frac{b \cdot h}{2}$, $P = b + h + \sqrt{b^2 + h^2}$
2. **Restricción de Valores Reales:** Las dimensiones de las figuras (`radio`, `base`, `altura`) deben ser estrictamente mayores a cero ($> 0$). Cualquier magnitud negativa o nula detiene el proceso mediante un retorno anticipado.
3. **Separación de Conceptos Insumo-Costo:** El perímetro rige directamente el desgaste de agujas y tiempo de delineado, mientras que el área define el volumen de tinta de relleno utilizado.
4. **Control Extensible (Caso Borde):** El algoritmo debe ser modular y rechazar de manera segura figuras geométricas cuyo `tipo` no esté previamente programado e integrado en el selector condicional del sistema, clasificando el lote como `"diseño no soportado"`.

---

## Casos de Prueba

### 1. Cotización de Diseño Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "componentesTatuaje": [
        { "tipo": "circulo", "radio": 4 },
        { "tipo": "rectangulo", "base": 6, "altura": 8 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "metricas": {
        "areaTotalCm2": 98.27,
        "perimetroTotalCm": 53.13
      },
      "presupuesto": {
        "costoDelineado": 106.26,
        "costoRelleno": 196.54,
        "totalNeto": 302.80
      }
    }
    ```

### 2. Activación de Guarda por Tipo No Soportado (Caso Borde)
* **Entrada:**
    ```json
    {
      "componentesTatuaje": [
        { "tipo": "pentagono", "base": 5 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. Se detectó un componente con geometría no soportada por el sistema.",
      "tipoInvalido": "pentagono"
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) para interceptar colecciones vacías o parámetros nulos al inicio de la función, evitando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). La evaluación y acumulación métrica de las figuras se unifica dentro de un único ciclo lineal de complejidad de tiempo $O(n)$ respecto al número de componentes suministrados, garantizando una alta eficiencia espacial $O(1)$ al operar sobre datos primitivos directamente en memoria.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```