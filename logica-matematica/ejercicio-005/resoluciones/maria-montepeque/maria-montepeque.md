# Ejercicio 028: Motor de Reabastecimiento y Control de Criticidad de Refacciones

## Análisis del Problema

El objetivo es desarrollar un componente de software para la gestión de inventarios en talleres automotrices o de maquinaria que procese un lote de refacciones, identifique cuáles han roto su umbral mínimo de seguridad y determine cuál es la pieza más escasa numéricamente bajo principios de optimización y programación defensiva.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `refacciones`: Array de Objetos (Cada objeto representa un repuesto con las propiedades: `repuesto` [String], `cantidad` [Number], y `limiteMinimo` [Number]).
* **Proceso:** 1. Validar la integridad de la entrada mediante cláusulas de guarda que verifiquen si el arreglo cuenta con elementos para anular excepciones.
    2. Inicializar una variable de control numérico en el valor tope `Infinity` para rastrear de forma dinámica la disminución absoluta de existencias.
    3. Iterar a través de las refacciones utilizando un ciclo `for` tradicional o métodos iterativos nativos de alta velocidad ($O(n)$).
    4. Aplicar un condicional de límite: si `cantidad < limiteMinimo`, guardar el nombre en la lista de solicitudes urgentes.
    5. Aplicar un condicional de mínimo: si la cantidad evaluada es inferior a la menor cantidad guardada previamente, actualizar el puntero del artículo más crítico.
* **Salida:** Un objeto con la estructura estricta: `{ repuestosParaPedido: string[], articuloMasCritico: string | null }`.

---

## Reglas de Negocio

1. **Ruptura de Umbral de Seguridad:** Un repuesto entra inmediatamente en la lista de reabastecimiento si y solo si su stock disponible es estrictamente menor que su límite mínimo preestablecido ($c < l$).
2. **Definición de Criticidad Absoluta:** El artículo más crítico se determina localizando el menor valor absoluto de unidades en existencia dentro del almacén, independientemente de la diferencia con su umbral de seguridad.
3. **Inmunidad a Fallos por Vacío (Caso Borde):** Si la bodega no tiene registros (arreglo vacío), el sistema realiza una parada segura devolviendo un arreglo vacío en `repuestosParaPedido` y un valor `null` en `articuloMasCritico`.

---

## Casos de Prueba

### 1. Procesamiento de Refacciones (Caso Normal)
* **Entrada:**
    ```json
    {
      "refacciones": [
        { "repuesto": "Pastillas de freno", "cantidad": 3, "limiteMinimo": 5 },
        { "repuesto": "Filtro de aceite", "cantidad": 12, "limiteMinimo": 10 },
        { "repuesto": "Bujías", "cantidad": 1, "limiteMinimo": 8 }
      ]
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "repuestosParaPedido": ["Pastillas de freno", "Bujías"],
      "articuloMasCritico": "Bujías"
    }
    ```

### 2. Activación de Guarda por Bodega Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "refacciones": []
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "repuestosParaPedido": [],
      "articuloMasCritico": null
    }
    ```

---

## Arquitectura de la Solución

La solución adopta el patrón de diseño de **Cláusulas de Guarda** para sanear de inmediato el flujo de la aplicación ante parámetros inválidos o colecciones vacías, evitando el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La recolección de alertas y la búsqueda del mínimo absoluto se ejecutan en un único recorrido lineal de complejidad de tiempo $O(n)$ y complejidad espacial $O(1)$ (excluyendo el arreglo de salida), lo que optimiza el uso de la memoria en sistemas de alta concurrencia.

---

## Ejecución del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```