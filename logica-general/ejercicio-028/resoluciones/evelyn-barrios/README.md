# Solución Ejercicio 28: Gestor de Reintentos para API

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo es construir una función robusta que pueda interactuar con una API inestable. La función debe intentar realizar una operación asíncrona (como obtener datos) y, si esta falla debido a un error transitorio (como un problema de red), debe reintentar la operación automáticamente un número determinado de veces antes de darse por vencida y propagar el error.

Esta es una técnica de resiliencia fundamental para crear aplicaciones fiables que se comunican con servicios externos.

## 2. Diseño de la Solución

Para resolver este problema, he diseñado una función `gestorDeReintentos` que actúa como un "envoltorio" de alto orden. Recibe como argumentos la función asíncrona que se debe ejecutar y el número máximo de reintentos.

El algoritmo funciona de la siguiente manera:

1.  **API Inestable Simulada**: Primero, se crea una función `obtenerDatosInestables` que simula una API que falla aleatoriamente. Devuelve una `Promesa` que tiene un 50% de probabilidad de resolverse con éxito y un 50% de ser rechazada.

2.  **Función Envoltorio `gestorDeReintentos`**:
    *   Esta es una función `async` que contiene la lógica principal.
    *   Utiliza un bucle `for` para controlar el número de intentos. El bucle se ejecuta desde 1 hasta el número máximo de reintentos.
    *   Dentro del bucle, un bloque `try...catch` intenta ejecutar la operación.
    *   **En el `try`**: Se usa `await` para llamar a la función de API. Si la llamada tiene éxito, la función retorna el resultado inmediatamente, finalizando el proceso.
    *   **En el `catch`**: Si la API falla, se captura el error. Se imprime un mensaje en la consola indicando el intento fallido. Si es el último intento, se "relanza" el error (`throw error`) para que el código que llamó al gestor sepa que la operación fracasó definitivamente. Si no es el último intento, el bucle continúa para la siguiente iteración.

3.  **Consumo del Gestor**: Para probar el sistema, se llama al `gestorDeReintentos` dentro de otro bloque `try...catch`. Esto permite ver cómo el gestor maneja internamente los reintentos y cómo el código principal solo recibe el resultado final (ya sea el éxito o el fracaso definitivo).

Este diseño encapsula la lógica de reintentos de forma limpia, permitiendo que cualquier función asíncrona se vuelva más robusta con solo "envolverla" en el gestor.

## 3. Pruebas Implementadas

Para validar la función, se han creado dos escenarios de prueba:
*   Una llamada al gestor que probablemente tendrá éxito después de uno o más reintentos.
*   Se incluye una explicación de cómo se probaría un fallo definitivo (aumentando la probabilidad de error en la API simulada).

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-028/resoluciones/evelyn-barrios/evelyn-barrios.js
```