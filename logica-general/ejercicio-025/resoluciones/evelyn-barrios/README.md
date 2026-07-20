# Solución Ejercicio 25: Implementación de Paginación

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es implementar una función de paginación. Dada una lista de elementos, un número de página y un tamaño de página, la función debe devolver solo los elementos que corresponden a esa página específica.

La paginación es una técnica esencial para gestionar grandes volúmenes de datos de manera eficiente, mejorando tanto el rendimiento de la aplicación (al no enviar todos los datos a la vez) como la experiencia del usuario (al presentar la información en fragmentos manejables).

## 2. Diseño de la Solución

Para esta tarea, el método más directo y eficiente en JavaScript es `Array.prototype.slice()`. He diseñado una función `paginarResultados` que calcula los índices correctos y extrae la porción correspondiente del arreglo.

El algoritmo sigue estos pasos:

1.  **Validación de Entradas**: La función primero realiza una validación para asegurarse de que los parámetros de paginación (`pagina` y `tamanoPagina`) sean números positivos. Si no lo son, devuelve un arreglo vacío para evitar errores de cálculo.

2.  **Cálculo de Índices**: Se calculan los índices de inicio y fin para la porción del arreglo que necesitamos.
    *   `inicio`: Se calcula como `(pagina - 1) * tamanoPagina`. Se resta 1 a la página porque los índices de los arreglos en JavaScript comienzan en 0.
    *   `fin`: Se calcula como `inicio + tamanoPagina`.

3.  **Extracción con `slice()`**: Se utiliza el método `.slice(inicio, fin)` sobre el arreglo de `items`. Este método devuelve una copia superficial de una porción del arreglo en un nuevo arreglo, sin modificar el original. Es perfecto para esta tarea.

4.  **Manejo de Casos Borde**: El método `slice` maneja de forma nativa los casos en los que el índice `fin` excede la longitud del arreglo, simplemente tomando los elementos hasta el final. Esto simplifica el código y cubre el caso de la última página si esta no está completa.

Este enfoque es robusto, eficiente y muy legible.

## 3. Pruebas Implementadas

Para validar la función de paginación, se han creado varios casos de prueba:
*   Solicitar la primera página de resultados.
*   Solicitar una página intermedia.
*   Solicitar una página que excede el número total de elementos, lo que debería devolver un arreglo vacío.
*   Probar con parámetros de paginación inválidos.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-025/resoluciones/evelyn-barrios/evelyn-barrios.js
```