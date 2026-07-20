# Solución Ejercicio 18: Validador de Estructura de Datos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es construir una función que actúe como un validador de esquemas. Debe tomar un objeto de datos y un objeto "esquema" que define la estructura esperada (claves y tipos de datos), y determinar si el objeto de datos cumple con las reglas del esquema.

Este tipo de validación es fundamental en el desarrollo de software, especialmente al trabajar con APIs, para asegurar que los datos que recibimos o enviamos tienen la forma correcta antes de procesarlos.

## 2. Diseño de la Solución

Para resolver este problema, diseñé una función llamada `validarObjetoConEsquema`. Mi enfoque se basa en una serie de comprobaciones secuenciales para verificar la integridad del objeto de la manera más eficiente posible.

El algoritmo sigue estos pasos:

1.  **Comparación de Claves**: Primero, obtengo las listas de claves (propiedades) tanto del objeto de datos como del esquema. La primera y más rápida validación es comparar si ambos tienen exactamente el mismo número de claves. Si no coinciden, es imposible que la estructura sea la misma, por lo que la función retorna `false` inmediatamente.

2.  **Verificación de Propiedades y Tipos**: Si el número de claves es el mismo, procedo a iterar sobre cada una de las claves definidas en el esquema. Para cada clave, realizo dos comprobaciones críticas:
    *   **Existencia**: Verifico si la clave del esquema también existe en el objeto de datos. Esto se hace para asegurar que no falten propiedades requeridas.
    *   **Coincidencia de Tipo**: Si la clave existe, comparo el tipo de dato del valor en el objeto (`typeof`) con el tipo de dato esperado que se especifica como un string en el esquema.

3.  **Decisión Final**: Si durante la iteración alguna de estas comprobaciones falla, la función retorna `false` de inmediato, ya que no tiene sentido seguir verificando. Si el bucle se completa sin encontrar ninguna discrepancia, significa que el objeto es válido y la función retorna `true`.

Este enfoque de "fallo rápido" (fail-fast) es eficiente porque detiene la ejecución tan pronto como se encuentra una inconsistencia.

## 3. Pruebas Implementadas

Para asegurar que el validador es robusto, he creado un conjunto de pruebas que cubren los escenarios más comunes:

*   **Prueba de Éxito**: Un objeto que cumple perfectamente con el esquema.
*   **Prueba de Tipo Incorrecto**: Un objeto donde una de las propiedades tiene un tipo de dato diferente al esperado.
*   **Prueba de Clave Faltante**: Un objeto al que le falta una propiedad requerida por el esquema.
*   **Prueba de Clave Adicional**: Un objeto que tiene una propiedad extra que no está definida en el esquema.

## 4. Ejecución

El código es JavaScript puro. Para verificar la solución, puedes abrir un archivo `prueba.html` en un navegador y revisar la consola del desarrollador (F12), o ejecutar el script directamente con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-018/resoluciones/evelyn-barrios/evelyn-barrios.js
```