# Solución Ejercicio 20: Transformador de Datos de Usuario

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que transforme un arreglo de objetos de un formato de "datos crudos" a un formato de "perfil limpio". Esto implica seleccionar, renombrar y, en algunos casos, combinar propiedades de los objetos originales para crear una nueva estructura de datos.

Esta es una tarea esencial en el desarrollo de software, por ejemplo, al adaptar los datos recibidos de una API externa al formato que necesita nuestra aplicación.

## 2. Diseño de la Solución

Para esta tarea de transformación, la herramienta más idiomática y eficiente en JavaScript es el método `Array.prototype.map()`. Por ello, diseñé una función `transformarPerfilesDeUsuario` que se basa en este método.

El algoritmo es el siguiente:

1.  **Función Principal**: La función recibe como entrada un arreglo de objetos de usuario en su formato original.

2.  **Uso de `map()`**: Se invoca el método `.map()` sobre el arreglo de entrada. Este método recorre cada elemento del arreglo y ejecuta una función (callback) para cada uno. Lo más importante es que `.map()` no modifica el arreglo original, sino que devuelve un **nuevo arreglo** con los resultados de aplicar la función a cada elemento.

3.  **Lógica de Transformación**: Dentro de la función callback del `map`, para cada objeto `usuarioCrudo`, se realiza lo siguiente:
    *   Se crea y retorna un nuevo objeto con la estructura deseada.
    *   Se seleccionan las propiedades necesarias (`id`, `email`).
    *   Se combinan propiedades (`firstName` y `lastName`) para crear una nueva (`nombreCompleto`).
    *   Se renombra y se adapta una propiedad (`status` a `estaActivo`).

4.  **Manejo de Casos Borde**: El uso de `.map()` maneja elegantemente el caso de un arreglo de entrada vacío. Si el arreglo está vacío, `.map()` simplemente devolverá un nuevo arreglo vacío, que es el comportamiento correcto.

Este enfoque es declarativo, legible y sigue las mejores prácticas de la programación funcional en JavaScript.

## 3. Pruebas Implementadas

Para verificar la correcta transformación, el bloque de pruebas incluye:
*   Un arreglo con varios objetos de usuario para demostrar la transformación en un caso estándar.
*   Una prueba con un arreglo vacío para asegurar que el código no falla y devuelve un resultado coherente.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-020/resoluciones/evelyn-barrios/evelyn-barrios.js
```