# Solución Ejercicio 26: Simulación de API Asíncrona

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que simule la obtención de datos de un usuario desde una API remota. La función debe ser asíncrona, lo que significa que no devolverá el resultado inmediatamente. En su lugar, devolverá una `Promesa` que, después de un tiempo de espera simulado, se resolverá con los datos del usuario si se encuentra, o se rechazará con un error si el usuario no existe.

Este es un pilar del desarrollo web moderno, donde las aplicaciones necesitan solicitar datos a servidores sin bloquear la interfaz de usuario.

## 2. Diseño de la Solución

Para implementar esta funcionalidad asíncrona, he utilizado el objeto `Promise` de JavaScript, que es el estándar para manejar operaciones que pueden tardar en completarse.

El algoritmo de la función `obtenerDatosDeUsuario` es el siguiente:

1.  **Base de Datos Simulada**: Se define un pequeño arreglo de objetos que actúa como nuestra base de datos de usuarios.

2.  **Función Asíncrona**: La función `obtenerDatosDeUsuario` recibe un `id` de usuario y retorna una `new Promise()`.

3.  **Simulación de Red**: Dentro de la promesa, se utiliza `setTimeout` para simular una latencia de red de 1.5 segundos. Esto asegura que la operación no sea instantánea.

4.  **Lógica de Búsqueda**: Pasado el tiempo de espera, la función busca en la base de datos simulada un usuario cuyo `id` coincida con el proporcionado.
    *   **Éxito**: Si se encuentra el usuario, la promesa se resuelve (`resolve(usuarioEncontrado)`) entregando el objeto del usuario.
    *   **Fallo**: Si no se encuentra ningún usuario con ese `id`, la promesa se rechaza (`reject(...)`) con un mensaje de error claro.

5.  **Consumo de la Promesa**: Para probar la función, se utiliza una función `async` autoejecutable. Dentro de ella, se usa un bloque `try...catch` con `await` para esperar el resultado de la promesa. Esto permite manejar el caso de éxito en el `try` y el caso de error en el `catch` de una manera muy limpia y legible.

## 3. Pruebas Implementadas

Para validar la función, se han creado dos escenarios de prueba principales:
*   Una llamada con un `id` de usuario válido (ej: 2) para verificar el camino de éxito.
*   Una llamada con un `id` de usuario que no existe (ej: 99) para verificar que la promesa se rechaza correctamente y el error es capturado.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-026/resoluciones/evelyn-barrios/evelyn-barrios.js
```