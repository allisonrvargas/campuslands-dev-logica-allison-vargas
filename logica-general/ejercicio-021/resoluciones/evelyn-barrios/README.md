# Solución Ejercicio 21: Filtro Avanzado de Productos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es implementar una función de filtrado que pueda procesar una lista de productos y devolver solo aquellos que cumplan con un conjunto de criterios dinámicos. Estos criterios pueden incluir un precio máximo, una categoría específica o si el producto está en stock.

Esta es una funcionalidad clave en cualquier aplicación de comercio electrónico o catálogo, donde los usuarios necesitan refinar las búsquedas.

## 2. Diseño de la Solución

Para esta tarea, la herramienta más adecuada y expresiva en JavaScript es el método `Array.prototype.filter()`. He diseñado una función `filtrarProductos` que utiliza este método para construir una solución limpia y eficiente.

El algoritmo funciona de la siguiente manera:

1.  **Función Principal**: La función `filtrarProductos` recibe dos argumentos: el arreglo de `productos` a filtrar y un objeto de `filtros` que contiene los criterios.

2.  **Uso de `filter()`**: Se invoca el método `.filter()` sobre el arreglo de productos. Este método crea un nuevo arreglo que contiene únicamente los elementos para los cuales la función de callback que se le pasa devuelve `true`.

3.  **Lógica de Filtrado**: Dentro de la función de callback, para cada `producto`, se evalúan todos los criterios definidos en el objeto `filtros`:
    *   **Filtro por Precio**: Si el filtro `precioMaximo` está definido, se comprueba que el precio del producto sea menor o igual a este valor.
    *   **Filtro por Categoría**: Si el filtro `categoria` está definido, se comprueba que la categoría del producto coincida exactamente.
    *   **Filtro por Stock**: Si el filtro `enStock` es `true`, se comprueba que la propiedad `stock` del producto sea mayor que 0.

4.  **Condiciones Acumulativas**: Todas las condiciones se encadenan con el operador `&&` (Y lógico). Esto significa que un producto solo se incluirá en el resultado final si cumple **todos** los criterios activos. Si un criterio no se especifica en el objeto de filtros, no se aplica.

5.  **Resultado**: La función devuelve el nuevo arreglo con los productos filtrados. Si ningún producto cumple los criterios, devuelve un arreglo vacío.

Este enfoque es declarativo, fácil de extender con nuevos filtros y mantiene el código legible.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un filtro que combina categoría y precio máximo.
*   Un filtro que busca solo productos en stock.
*   Un filtro más restrictivo que no encuentra ningún producto, devolviendo un arreglo vacío.
*   Una llamada sin filtros, que debe devolver la lista original de productos.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-021/resoluciones/evelyn-barrios/evelyn-barrios.js
```