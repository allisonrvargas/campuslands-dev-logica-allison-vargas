# Ejercicio 019: Motor de Auditoría Termoquímica y Clasificación de Estabilidad de Compuestos

## Análisis del Problema

El objetivo es desarrollar un componente de software para sistemas de gestión de laboratorios químicos (LIMS) que procese las métricas termodinámicas de un lote de compuestos. El sistema calculará el Índice de Estabilidad Combinado ($IEC$) atenuando la energía de activación según la entropía molecular, clasificará el riesgo de exotermia basándose en un límite de seguridad dinámico y generará indicadores de rendimiento globales aplicando programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `loteQuimico`: Array de Objetos (Cada objeto representa un compuesto con las propiedades: `formula` [String], `energiaActivacion` [Number], y `entropia` [Number]).
    * `limiteEnergiaMax`: Number (Valor límite que actúa como la barrera de seguridad del laboratorio).
* **Proceso:** 1. Utilizar una cláusula de guarda de corto circuito para validar que el arreglo de fórmulas posea datos válidos y no se encuentre vacío.
    2. Transformar los elementos mediante una función de mapeo inmutable para preservar el set de datos original.
    3. Validar internamente que no existan valores físicos incoherentes como energías de activación negativas o niveles de entropía absolutos iguales o menores a cero ($\le 0$).
    4. Calcular el Índice de Estabilidad Combinado ($IEC$) restando la influencia del desorden molecular a la energía de activación.
    5. Clasificar el compuesto químico mediante un operador ternario encadenado según los límites de tolerancia fijados.
    6. Acumular las métricas globales para construir las estadísticas descriptivas generales de la auditoría.
* **Salida:** Un objeto con la estructura estricta: `{ resumenLaboratorio: { totalCompuestos: number, compuestosSeguros: number, compuestosCriticos: number, compuestosInestables: number, promedioIEC: number }, desgloseDetallado: [{ formula: string, iecObtenido: number, dictamen: string }] }`.

---

## Reglas de Negocio

1. **Fórmula del Índice Combinado (IEC):** Se establece bajo la ecuación lineal de balance energético:
    $$IEC = \text{energiaActivacion} - (\text{entropia} \times 0.05)$$
2. **Escala de Dictamen Termoquímico:** Las soluciones se categorizan de manera excluyente según el comportamiento de su $IEC$ frente al límite de seguridad:
    * $IEC \le (\text{limiteEnergiaMax} \times 0.5)$: `"Altamente Estable (Reacción Segura)"`
    * $IEC \le \text{limiteEnergiaMax}$: `"Estabilidad Crítica (Requiere Control)"`
    * $IEC > \text{limiteEnergiaMax}$: `"Inestable (Riesgo de Exotermia)"`
3. **Garantía Estructural Física (Caso Borde):** El flujo temporal y termodinámico prohíbe compuestos sin nombre, energías de activación menores a cero ($E_a < 0$) o entropías negativas o nulas ($S \le 0$). Cualquier anomalía de estas interrumpe la ejecución devolviendo un estado de error controlado por consistencia de auditoría.

---

## Casos de Prueba

### 1. Evaluación Termodinámica de Lote Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "loteQuimico": [
        { "formula": "H2O (Agua)", "energiaActivacion": 42.5, "entropia": 188.8 },
        { "formula": "CO2 (Dióxido de Carbono)", "energiaActivacion": 85.0, "entropia": 213.7 },
        { "formula": "TNT (Trinitrotolueno)", "energiaActivacion": 165.0, "entropia": 320.1 }
      ],
      "limiteEnergiaMax": 100
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "resumenLaboratorio": {
        "totalCompuestos": 3,
        "compuestosSeguros": 1,
        "compuestosCriticos": 1,
        "compuestosInestables": 1,
        "promedioIEC": 85.03
      },
      "desgloseDetallado": [
        {
          "formula": "H2O (Agua)",
          "iecObtenido": 33.06,
          "dictamen": "Altamente Estable (Reacción Segura)"
        },
        {
          "formula": "CO2 (Dióxido de Carbono)",
          "iecObtenido": 74.32,
          "dictamen": "Estabilidad Crítica (Requiere Control)"
        },
        {
          "formula": "TNT (Trinitrotolueno)",
          "iecObtenido": 149.00,
          "dictamen": "Inestable (Riesgo de Exotermia)"
        }
      ]
    }
    ```

### 2. Aborto por Incoherencia Física de Entropía (Caso Borde)
* **Entrada:**
    ```json
    {
      "loteQuimico": [
        { "formula": "Compuesto Inestable Anómalo", "energiaActivacion": 50.0, "entropia": -10.5 }
      ],
      "limiteEnergiaMax": 100
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Evaluación suspendida. Se detectaron valores termodinámicos imposibles en el lote (energías negativas o entropía menor o igual a cero)."
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "loteQuimico": [],
      "limiteEnergiaMax": 100
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. El lote de registros químicos no contiene elementos válidos."
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** coordinado con retornos anticipados (*Early Returns*) al inicio del módulo para interceptar colecciones vacías o nulas, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). Se emplea una transformación inmutable mediante métodos iterativos nativos para mapear los resultados y reducir las métricas estadísticas en una sola pasada de complejidad de tiempo lineal $O(n)$, manteniendo una eficiencia espacial de $O(n)$ dedicada exclusivamente a estructurar el arreglo del desglose analítico exigido por la gerencia del laboratorio.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```