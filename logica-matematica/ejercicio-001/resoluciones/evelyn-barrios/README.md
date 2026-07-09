# Solución del Ejercicio 01: Operaciones Aritméticas Controladas

**Autora:** Evelyn Barrios

## Mi Proceso de Razonamiento

Para resolver este reto, no quise saltar directamente al código. Primero, seguí los pasos de análisis para entender verdaderamente qué se me pedía y cómo podía entregar una solución robusta y bien pensada.

### 1. Análisis del Problema

Leí el `README.md` varias veces y desglosé el problema en partes más pequeñas:

*   **Entradas:** Necesito recibir una lista de puntajes, un bono y una penalización.
*   **Proceso:** Debo calcular un promedio, sumarle el bono, restarle la penalización y, finalmente, comparar el resultado con un número (25) para tomar una decisión.
*   **Salidas:** Tengo que devolver un objeto que contenga el puntaje final, una clasificación y una explicación clara de cómo llegué a ese resultado.

### 2. El Descubrimiento de una Ambigüedad

Mientras resolvía el caso de ejemplo a mano, noté algo interesante. El cálculo matemático directo (`(12+18+25+30)/4 + 8 - 3`) daba `26.25`, pero el `README.md` esperaba un `27`.

Esto me indicó que había una regla no escrita: el **redondeo**. Tras analizarlo, llegué a la hipótesis de que el sistema redondea el promedio de los puntajes hacia el entero superior antes de aplicar los otros modificadores. Esta decisión de diseño es crucial y la incorporé como una regla explícita en mi solución.

### 3. Mi Estrategia de Solución (Paso a Paso)

Con el análisis completo y la ambigüedad resuelta, definí mi plan de acción en el código:

1.  **Función Principal:** Creé una función llamada `analizarRendimientoEquipo` que encapsula toda la lógica, haciendo el código limpio y reutilizable.
2.  **Validación Inicial:** Lo primero que hago es comprobar si la lista de participantes está vacía. Si lo está, devuelvo un resultado controlado para evitar errores matemáticos (como la división por cero).
3.  **Cálculo Base:** Uso `reduce` para sumar los puntajes y luego los divido para obtener el promedio.
4.  **Aplicación de la Regla de Redondeo:** Aplico `Math.ceil()` al promedio, siguiendo mi hipótesis del paso anterior.
5.  **Cálculo Final:** Al promedio ya redondeado, le sumo el bono y le resto la penalización.
6.  **Clasificación:** Uso un operador ternario (`? :`) por ser una forma limpia y directa de asignar la clasificación `"competitivo"` o `"en entrenamiento"`.
7.  **Reporte Detallado:** Devuelvo un objeto con todos los datos solicitados, incluyendo una explicación dinámica que muestra los valores calculados.

### 4. Pruebas que Diseñé

Para asegurar que mi lógica es correcta, creé tres escenarios de prueba:

*   **Prueba 1 (Caso del README):** Verifiqué que mi código produjera el `27` esperado, validando mi hipótesis del redondeo.
*   **Prueba 2 (Caso Borde):** Creé un escenario con puntajes más bajos para asegurar que la clasificación `"en entrenamiento"` funcionara correctamente.
*   **Prueba 3 (Caso de Seguridad):** Probé con una lista vacía para confirmar que mi validación inicial previene errores.

Esta metodología me permitió construir una solución que no solo funciona, sino que también está justificada en cada paso.