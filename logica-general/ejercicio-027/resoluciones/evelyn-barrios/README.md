# Solución Ejercicio 27: Composición de Datos Asíncronos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es simular un escenario en el que una aplicación necesita obtener datos de múltiples fuentes (endpoints de una API) de forma concurrente para construir una vista completa. Por ejemplo, para mostrar el "dashboard" de un usuario, necesitamos obtener su perfil y su historial de compras al mismo tiempo.

La función debe orquestar estas llamadas asíncronas y combinar los resultados en un solo objeto una vez que todas las peticiones hayan finalizado con éxito.

## 2. Diseño de la Solución

Para manejar múltiples promesas concurrentes de manera eficiente, la herramienta estándar en JavaScript es `Promise.all()`. He diseñado una solución que utiliza este método para optimizar la obtención de datos.

El algoritmo es el siguiente:

1.  **Funciones de API Simuladas**: Primero, se crean dos funciones asíncronas (`obtenerPerfil` y `obtenerHistorial`) que simulan llamadas a diferentes endpoints. Cada una devuelve una `Promesa` que se resuelve con datos específicos después de un tiempo de espera.

2.  **Función Orquestadora**: Se crea una función principal `obtenerDashboardCompleto(usuarioId)`. Esta función es la encargada de invocar las llamadas individuales.

3.  **Ejecución Concurrente con `Promise.all()`**:
    *   Dentro de la función orquestadora, se llama a `obtenerPerfil` y `obtenerHistorial` sin usar `await` todavía. Esto inicia ambas operaciones de red al mismo tiempo.
    *   Las dos promesas pendientes se colocan en un arreglo, que se pasa a `Promise.all([promesaPerfil, promesaHistorial])`.
    *   `Promise.all()` devuelve una única `Promesa` que se resolverá solo cuando **todas** las promesas del arreglo se hayan resuelto. El valor de resolución es un arreglo con los resultados de cada promesa, en el mismo orden.

4.  **Manejo de Resultados y Errores**:
    *   Se utiliza `await` sobre `Promise.all()` para esperar a que todas las operaciones finalicen.
    *   Un bloque `try...catch` maneja el flujo. En el `try`, si `Promise.all` se resuelve, se desestructuran los resultados (perfil e historial) y se combinan en un objeto de "dashboard".
    *   En el `catch`, se captura cualquier error. `Promise.all` tiene un comportamiento de "fallo rápido": si una sola de las promesas es rechazada, `Promise.all` se rechaza inmediatamente con el error de esa promesa.

Este enfoque es mucho más eficiente que usar `await` en cada llamada de forma secuencial, ya que los tiempos de espera de la red no se suman, sino que corren en paralelo.

## 3. Pruebas Implementadas

Para validar la función, se han creado dos escenarios de prueba:
*   Una llamada con un `id` de usuario válido para verificar que los datos de ambas APIs se combinan correctamente.
*   Una llamada con un `id` de usuario que causa un fallo en una de las APIs, para verificar que `Promise.all` maneja el error correctamente.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-027/resoluciones/evelyn-barrios/evelyn-barrios.js
```