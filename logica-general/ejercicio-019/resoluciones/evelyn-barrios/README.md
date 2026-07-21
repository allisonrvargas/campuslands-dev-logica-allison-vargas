# Solución Ejercicio 19: Agregador de Datos de Transacciones

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es procesar una lista de transacciones de venta y generar un resumen que agrupe los datos por categoría. Para cada categoría, debemos calcular el monto total de ventas y el número total de transacciones.

Este es un problema clásico de agregación de datos, fundamental en la creación de reportes, dashboards y análisis de negocio.

## 2. Diseño de la Solución

Para implementar esta lógica, diseñé una función `generarResumenPorCategoria`. Mi enfoque utiliza un objeto como si fuera un "mapa" o "diccionario" para ir acumulando los resultados de manera eficiente mientras se recorre la lista de transacciones.

El algoritmo funciona de la siguiente manera:

1.  **Inicialización**: La función comienza creando un objeto vacío llamado `resumen`. Este objeto almacenará los resultados finales.

2.  **Iteración**: Se recorre cada `transaccion` en el arreglo de entrada usando un bucle `for...of`. Este tipo de bucle es muy legible y directo para trabajar con arreglos.

3.  **Lógica de Agregación**: Dentro del bucle, para cada transacción:
    *   Se extrae la `categoria` y el `monto`.
    *   Se verifica si ya existe una entrada para esa `categoria` en nuestro objeto `resumen`.
    *   **Si no existe**: Se crea una nueva entrada para esa categoría, inicializando el `montoTotal` con el monto de la transacción actual y el `numeroTransacciones` en 1.
    *   **Si ya existe**: Se actualiza la entrada existente, sumando el `monto` actual al `montoTotal` y aumentando en 1 el `numeroTransacciones`.

4.  **Resultado Final**: Una vez que el bucle ha procesado todas las transacciones, la función devuelve el objeto `resumen` completo.

Este método es eficiente porque solo necesita recorrer la lista de transacciones una vez (complejidad O(n)), y las operaciones dentro del bucle son muy rápidas.

## 3. Pruebas Implementadas

Para validar la solución, he incluido un bloque de pruebas con un conjunto de datos de ejemplo que incluye:
*   Múltiples transacciones para la misma categoría (`Electronica`, `Libros`).
*   Una categoría con una sola transacción (`Ropa`).
*   Transacciones con diferentes montos para probar la suma.

Esto asegura que la lógica de creación y actualización de categorías funciona correctamente.

## 4. Ejecución

El código es JavaScript puro y autocontenido. Para probarlo, puedes usar un archivo `prueba.html` y ver la salida en la consola del navegador (F12), o ejecutarlo con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-019/resoluciones/evelyn-barrios/evelyn-barrios.js
```