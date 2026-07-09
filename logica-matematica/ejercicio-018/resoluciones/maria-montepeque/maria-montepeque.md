# Ejercicio 018: Analizador de Control de Calidad Industrial y Normalización de Ensayos de Soldadura

## Análisis del Problema

El objetivo es desarrollar un componente de software para control de calidad en ingeniería metalúrgica que procese las mediciones de laboratorio en probetas de soldadura. El sistema normalizará las notas desde una escala industrial base 150 a una base 100 estándar, sumará incentivos por optimización de gas, restará penalizaciones por porosidad visual y aplicará una contención (*clamping*) matemática para categorizar el rendimiento del taller bajo principios de programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `registrosSoldadura`: Array de Objetos (Cada objeto representa una probeta con las propiedades: `nombreOperario` [String] y `puntajeDirecto` [Number, de 0 a 150]).
    * `bonoGas`: Number (Incentivo añadido por optimización de insumos).
    * `penalizacionPorosidad`: Number (Castigo por debilidades detectadas en las costuras).
* **Proceso:** 1. Validar la existencia de elementos en la colección de entrada mediante cláusulas de guarda de corto circuito.
    2. Aplicar una transformación inmutable empleando la función nativa `.map()` para no corromper la matriz original de datos de control.
    3. Validar internamente la coherencia y rangos de la medición del dinamómetro industrial ($0 \le \text{puntajeDirecto} \le 150$).
    4. Realizar la conversión matemática escalar lineal para llevar la nota a una base porcentual estándar 100.
    5. Sumar el bono del gas inerte y restar la penalización correspondiente.
    6. Utilizar una contención perimetral matemática combinando `Math.max(0, Math.min(100, valor))` para evitar que desviaciones mecánicas extremas arrojen resultados fuera del intervalo cerrado $[0, 100]$.
    7. Clasificar el comportamiento del metal usando operadores ternarios eficientes y actualizar los contadores estadísticos globales.
* **Salida:** Un objeto con la estructura estricta: `{ resumenTaller: { totalProbedas: number, aprobados: number, rechazados: number, rendimientoPromedio: number }, resultadosIndividuales: [{ operario: string, notaFinal: number, certificacion: string }] }`.

---

## Reglas de Negocio

1. **Normalización Lineal de Ingeniería:** La conversión a porcentaje estándar responde estrictamente a la fórmula geométrica de proporción lineal:
    $$\text{Puntaje Base 100} = \left( \frac{\text{Puntaje Directo}}{150} \right) \times 100$$
2. **Ecuación Combinada con Límites Cerrados (Clamping):** La nota definitiva no puede exceder bajo ninguna circunstancia el intervalo lógico $[0, 100]$, modelándose matemáticamente como:
    $$\text{Nota Final} = \max(0, \min(100, \text{Puntaje Base 100} + \text{bonoGas} - \text{penalizacionPorosidad}))$$
3. **Métricas de Certificación y Suficiencia Técnica:** Las categorías de certificación metalúrgica se asignan bajo los siguientes umbrales estrictos:
    * Nota $\ge 85$: `"Certificación Alta (Suficiente)"`
    * Nota $\ge 70$ y $< 85$: `"Aceptable con Observación"`
    * Nota $< 70$: `"Rechazado por Defecto Mecánico"`

---

## Casos de Prueba

### 1. Control de Lote Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "registrosSoldadura": [
        { "nombreOperario": "Carlos Mendoza", "puntajeDirecto": 135 },
        { "nombreOperario": "Ana Palacios", "puntajeDirecto": 105 },
        { "nombreOperario": "Jorge Estévez", "puntajeDirecto": 75 }
      ],
      "bonoGas": 5,
      "penalizacionPorosidad": 2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resumenTaller": {
        "totalProbedas": 3,
        "aprobados": 2,
        "rechazados": 1,
        "rendimientoPromedio": 71.00
      },
      "resultadosIndividuales": [
        {
          "operario": "Carlos Mendoza",
          "notaFinal": 93.00,
          "certificacion": "Certificación Alta (Suficiente)"
        },
        {
          "operario": "Ana Palacios",
          "notaFinal": 73.00,
          "certificacion": "Aceptable con Observación"
        },
        {
          "operario": "Jorge Estévez",
          "notaFinal": 53.00,
          "certificacion": "Rechazado por Defecto Mecánico"
        }
      ]
    }
    ```

### 2. Contención de Notas por Desbordamiento Positivo (Caso Borde)
* **Entrada:**
    ```json
    {
      "registrosSoldadura": [
        { "nombreOperario": "Luis Arenas", "puntajeDirecto": 150 }
      ],
      "bonoGas": 10,
      "penalizacionPorosidad": 0
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resumenTaller": {
        "totalProbedas": 1,
        "aprobados": 1,
        "rechazados": 0,
        "rendimientoPromedio": 100.00
      },
      "resultadosIndividuales": [
        {
          "operario": "Luis Arenas",
          "notaFinal": 100.00,
          "certificacion": "Certificación Alta (Suficiente)"
        }
      ]
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "registrosSoldadura": [],
      "bonoGas": 5,
      "penalizacionPorosidad": 2
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. El lote de registros de soldadura no contiene elementos válidos."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio de la función para interceptar colecciones vacías o nulas, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). Se emplea una transformación inmutable con métodos iterativos nativos para mapear los resultados y reducir los totales en una sola pasada de complejidad de tiempo lineal $O(n)$, manteniendo una eficiencia espacial de $O(n)$ dedicada exclusivamente a estructurar el arreglo del reporte individualizado exigido por el negocio.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```