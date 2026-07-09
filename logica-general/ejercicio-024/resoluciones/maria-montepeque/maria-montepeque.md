# Ejercicio 024: Motor de Auditoría y Estabilidad de Inventario de Motos

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión logística de bodegas que procese el stock diario de unidades. El sistema determinará la volatilidad del inventario mediante el cálculo del rango entre valores máximos y mínimos, clasificará el estado operativo de la bodega y aplicará programación defensiva para garantizar la integridad de los datos financieros.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `stockDiario`: Array de números (Cantidad de motos registradas diariamente).
* **Proceso:** 1. Validar la existencia y integridad del arreglo mediante cláusulas de guarda para evitar excepciones.
    2. Filtrar o limpiar anomalías (valores negativos) para asegurar la consistencia logística.
    3. Calcular los valores extremos (`stockMaximo` y `stockMinimo`) mediante métodos de reducción lineal ($O(n)$).
    4. Determinar la amplitud de variación (rango) para evaluar la estabilidad del inventario.
    5. Clasificar el comportamiento del stock bajo una escala cualitativa preestablecida.
* **Salida:** Un objeto con la estructura estricta: `{ stockMaximo: number, stockMinimo: number, rangoFluctuacion: number, estado: string }`.

---

## Reglas de Negocio

1. **Ecuación de Fluctuación:** El rango de variación se obtiene mediante la diferencia de los valores extremos:
    $$\text{rango} = \text{stockMaximo} - \text{stockMinimo}$$
2. **Escala de Estabilidad Logística:**
    * Rango $> 20$: `"Alta volatilidad"`
    * Rango $11$ a $20$: `"Fluctuación moderada"`
    * Rango $\le 10$: `"Inventario estable"`
3. **Restricción de Integridad (Caso Borde):** Cualquier registro negativo se considera un error de sistema. El arreglo no puede estar vacío; de lo contrario, se debe disparar un reporte de error controlado.

---

## Casos de Prueba

### 1. Auditoría de Inventario con Fluctuación Moderada (Caso Normal)
* **Entrada:**
    ```json
    {
      "stockDiario": [5, 12, 8, 25, 10]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "stockMaximo": 25,
      "stockMinimo": 5,
      "rangoFluctuacion": 20,
      "estado": "Fluctuación moderada"
    }
    ```

### 2. Auditoría de Inventario Estable (Caso Borde)
* **Entrada:**
    ```json
    {
      "stockDiario": [10, 10, 10]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "stockMaximo": 10,
      "stockMinimo": 10,
      "rangoFluctuacion": 0,
      "estado": "Inventario estable"
    }
    ```

### 3. Activación de Guarda por Estructura Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "stockDiario": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "error": "Procesamiento cancelado. El registro de inventario está vacío o es inválido."
    }
    ```

---

## Arquitectura de la Solución

La solución implementa una arquitectura basada en **Cláusulas de Guarda** para interceptar errores de datos en tiempo de ejecución. La selección de valores extremos se realiza mediante métodos de reducción óptimos ($O(n)$) para garantizar que el rendimiento sea constante incluso con grandes volúmenes de datos históricos. Esta implementación evita el uso excesivo de memoria al operar directamente sobre los valores primitivos del arreglo.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo.
2. Abre la consola o terminal en el directorio raíz.
3. Ejecuta el script con el comando:
    ```bash
    node maria-montepeque.js
    ```