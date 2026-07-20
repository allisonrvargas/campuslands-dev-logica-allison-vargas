# Solución Ejercicio 23: Extractor de Elementos Únicos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es implementar una función que reciba un arreglo y devuelva un nuevo arreglo que contenga únicamente los elementos únicos del original, eliminando cualquier duplicado.

Esta es una tarea de limpieza de datos fundamental y muy frecuente, necesaria para preparar conjuntos de datos antes de realizar análisis, mostrar filtros en una interfaz de usuario o simplemente para asegurar la integridad de la información.

## 2. Diseño de la Solución

Para resolver este problema de una manera moderna, concisa y eficiente, decidí utilizar una de las estructuras de datos más poderosas de JavaScript para esta tarea: el objeto `Set`.

El algoritmo de la función `obtenerElementosUnicos` es notablemente simple gracias a las propiedades de `Set`:

1.  **Creación de un `Set`**: La función recibe un arreglo `items` como entrada. El primer paso es crear un nuevo `Set` a partir de este arreglo (`new Set(items)`). La característica principal de un `Set` es que, por definición, solo puede contener valores únicos. Al crear el `Set` desde el arreglo, JavaScript automáticamente descarta todos los elementos duplicados.

2.  **Conversión de `Set` a Arreglo**: El `Set` ya contiene los valores únicos que necesitamos, pero el formato de salida requerido es un arreglo. Para convertir el `Set` de nuevo a un arreglo, utilizo el **operador de propagación (spread operator `...`)**. La sintaxis `[...miSet]` toma todos los elementos del `Set` y los coloca dentro de un nuevo arreglo.

Este enfoque es altamente preferido sobre los bucles manuales con `indexOf` o `includes` porque es mucho más legible y tiene un rendimiento superior (generalmente O(n)), especialmente con grandes conjuntos de datos.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba que cubren diferentes escenarios:
*   Un arreglo de números con varios duplicados.
*   Un arreglo de strings con duplicados y diferencias de mayúsculas/minúsculas (notando que "Hola" y "hola" son considerados únicos).
*   Un arreglo que ya contiene solo elementos únicos, para asegurar que no se modifica.
*   Un arreglo vacío, que debe devolver un arreglo vacío.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-023/resoluciones/evelyn-barrios/evelyn-barrios.js
```