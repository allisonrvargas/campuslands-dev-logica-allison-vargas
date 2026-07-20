# Ejercicio 039: Validaciones Numéricas - Fórmulas Químicas

**Camper:** Antonio Canux

## Analisis

- Entrada: Tres valores numéricos que representan el estado de una mezcla en el laboratorio: `ph` (nivel de acidez/alcalinidad), `temperaturaC` (grados Celsius) y `concentracionPorcentaje` (porcentaje de soluto).
- Proceso: El núcleo del algoritmo es una serie de barreras de validación (guard clauses). Se evalúa si cada entrada respeta los límites físicos y matemáticos establecidos por la ciencia. Si alguna validación falla, la ejecución se detiene de inmediato y retorna un error específico. Si todas las validaciones son superadas, el programa procesa los datos para clasificar la sustancia según su nivel de pH.
- Salida: Un objeto que contiene un valor booleano `estado_validacion` (true si los datos son correctos, false si hay un error numérico), una cadena de texto `clasificacion` (el tipo de error o el tipo de solución), y una `explicacion` detallada.

## Reglas identificadas

1. **Límites de pH:** La escala tradicional de pH abarca estrictamente desde 0 hasta 14. 
   Fórmula de validación: $0 \le \text{pH} \le 14$
2. **Límite de Temperatura:** Según las leyes de la termodinámica, la temperatura más baja posible en el universo es el cero absoluto.
   Fórmula de validación: $\text{Temp} \ge -273.15$
3. **Límites de Porcentaje:** Una concentración no puede ser nula/negativa, ni puede exceder el todo (100%).
   Fórmula de validación: $0 < \text{Concentración} \le 100$
4. **Clasificación Química (si es válida):**
   - Si $\text{pH} < 7$: "solucion acida"
   - Si $\text{pH} = 7$: "solucion neutra"
   - Si $\text{pH} > 7$: "solucion alcalina"

## Pruebas

### Caso normal

Entrada:
- ph: `2.5`
- temperaturaC: `25`
- concentracionPorcentaje: `15`

Resultado esperado:
- estado_validacion: `true`
- clasificacion: `"solucion acida"`
- explicacion: `"Solucion validada correctamente a 25°C con un 15% de concentracion. Se clasifica como 'solucion acida'."`

### Caso borde

Entrada:
- ph: `7`
- temperaturaC: `-300`
- concentracionPorcentaje: `100`

Resultado esperado:
- estado_validacion: `false`
- clasificacion: `"error termodinamico"`
- explicacion: `"La temperatura (-300°C) es imposible. No puede ser menor al cero absoluto (-273.15°C)."`

## Explicacion final

La solución implementa un patrón de diseño conocido como "Guard Clauses" (Cláusulas de Guarda). En lugar de anidar múltiples bloques `if/else` (lo que generaría un código en forma de pirámide o *callback hell*), verificamos primero las condiciones de error. Si un dato numérico es inválido (por ejemplo, un porcentaje del 150%), la función retorna el objeto de error y detiene su ejecución inmediatamente gracias a la instrucción `return`. Esto hace que el código sea extremadamente seguro, fácil de leer y robusto para procesar fórmulas químicas en una base de datos científica sin corromper la información.