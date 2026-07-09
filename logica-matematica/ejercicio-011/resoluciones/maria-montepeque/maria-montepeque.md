# Ejercicio 011: Motor de Análisis Combinatorio y Simulación de Ráfagas de Ataque

## Análisis del Problema

El objetivo es desarrollar un componente de software para simuladores tácticos o videojuegos de lucha que calcule el número total de combinaciones únicas posibles en una ráfaga de ataques (combos). El sistema procesará el set de movimientos del peleador y la longitud de la serie, generando una bitácora del desarrollo multiplicativo paso a paso bajo principios de control algorítmico y programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `tecnicasDisponibles`: Number (Variedad de golpes o patadas que conoce el peleador).
    * `longitudSerie`: Number (Cantidad de movimientos o profundidad en la ráfaga de ataque).
* **Proceso:** 1. Validar mediante cláusulas de guarda condicionales que ambas variables de entrada pertenezcan al dominio de los enteros y sean estrictamente mayores a cero para evitar bucles indeterminados o sin sentido físico.
    2. Inicializar una variable acumuladora en `1` para almacenar el producto iterativo de posibilidades.
    3. Ejecutar un bucle `for` de rendimiento óptimo que itere exactamente tantas veces como indique la `longitudSerie`.
    4. En cada ciclo, multiplicar el acumulador por la cantidad de `tecnicasDisponibles`, simulando que para cada nuevo golpe la paleta completa de opciones vuelve a estar disponible, y registrar la iteración en un arreglo de historial.
* **Salida:** Un objeto con la estructura estricta: `{ configuracion: { tecnicas: number, longitud: number }, bitacora: string[], totalCombinaciones: number }`.

---

## Reglas de Negocio

1. **Principio Multiplicativo con Repetición:** El orden de los factores altera el resultado (ej: no es lo mismo la secuencia `Jab-Hook` que `Hook-Jab`) y las técnicas se pueden repetir de forma indefinida dentro de la misma ráfaga de ataque. Matemáticamente se define como:
    $$\text{Total} = (\text{tecnicasDisponibles})^{\text{longitudSerie}}$$
2. **Uso de Estructuras de Control Explicitas:** El cómputo no debe delegarse a una función de potencia directa (`Math.pow()` o el operador `**`), sino procesarse secuencialmente mediante un ciclo y un acumulador aritmético para simular la construcción de la bitácora paso a paso.
3. **Restricción de Vaciedad (Caso Borde):** Un peleador que no registre técnicas o una serie configurada con cero golpes produce un escenario combinatorio inválido de `0` variantes. La compuerta de validación inicial intercepta el flujo retornando un estado controlado.

---

## Casos de Prueba

### 1. Simulación de Ráfaga Estándar (Caso Normal)
* **Entrada:**
    ```json
    {
      "tecnicasDisponibles": 4,
      "longitudSerie": 3
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "configuracion": {
        "tecnicas": 4,
        "longitud": 3
      },
      "bitacora": [
        "Movimiento 1: 1 * 4 = 4 posibilidades.",
        "Movimiento 2: 4 * 4 = 16 posibilidades.",
        "Movimiento 3: 16 * 4 = 64 posibilidades."
      ],
      "totalCombinaciones": 64
    }
    ```

### 2. Activación de Guarda por Configuración Inválida (Caso Borde)
* **Entrada:**
    ```json
    {
      "tecnicasDisponibles": 0,
      "longitudSerie": 5
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "configuracion": {
        "tecnicas": 0,
        "longitud": 5
      },
      "bitacora": ["Error: Parámetros de simulación inválidos. Se requieren valores mayores a cero."],
      "totalCombinaciones": 0
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de **Cláusulas de Guarda** al inicio de la función para interceptar estados nulos, negativos o vacíos, eliminando el anidamiento innecesario de bloques condicionales (*Arrow Anti-pattern*). Siguiendo las restricciones de negocio, se implementa un bucle explícito cuya complejidad de tiempo escala de forma estrictamente lineal $O(n)$ respecto a la `longitudSerie`, y una complejidad espacial de $O(n)$ para alojar las cadenas de texto del historial iterativo de la bitácora de combate.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```