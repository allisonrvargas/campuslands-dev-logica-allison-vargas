# Plantilla de solucion

## Analisis 

- Entrada:
    - `duracion_minutos` (int): Tiempo de ejecucion total de la pelicula de miedo expresado en minutos.

- Proceso:
    1. Calcular el residuo de dividir la duracion entre 13 utilizando el operador aritmetico de modulo (`duracion_minutos % 13`). Si el residuo es estrictamente igual a 0, la condicion de divisibilidad es verdadera.
    2. Calcular el residuo de dividir la duracion entre 2 (`duracion_minutos % 2`) para determinar la paridad de la variable.
    3. Evaluar los resultados mediante una estructura de control condicional anidada (`if-elif-else`) para categorizar la pelicula segun los patrones matemticos encontrados.

- Salida:
    - `es_divisible_13` (booleano: `True` o `False`).
    - `es_par` (booleano: `True` o `False`).
    - `clasificacion_maraton` (cadena de texto con el veredicto organizativo del festival).

## Reglas identificadas

1. **La naturaleza del operador modulo:** El modulo (`%`) no devuelve el conciente de la division, sino el residuo sobrante. La divisibilidad exacta se demuestra unica y exclusivamente cuando el residuo mapeado es equivalente a cero ($A \pmod B = 0$).
2. **Criterio de interseccion matemativa (doble validacion):** Para calificar en el rango mas alto del festival, el dato de entrada debe satisfacer simultaneamente dos criterios de divisibilidad inconexos (modulo 13 AND modulo 2), lo que algebraicamente significa que el numero debe ser multiplo de 26.
3. **Jerarquia del Flujo Condicional:** Las evaluaciones logicas es ordenan y ejecutan desde la mas restrictiva y especifica (`and`) hacia las mas generales, impidiendo que una pelicula de categoria doble sea erroneamente clasificado en un bloque simple.

## Pruebas

### Caso normal 

Entrada:
- `duracion_minutos`: 13

Resultado esperado:
- `¿Divisible entre 13?`: `True` *(Cálculo manual: 13 / 13 = 1, residuo = 0)*
- `¿Es par?`: `False` *(Cálculo manual: 13 / 2 = 6, residuo = 1)*
- `Veredicto`: "Ritmo Maldito (Ideal para funciones nocturnas exclusivas)" *(Cálculo: Satisface la divisibilidad del 13 superando el cero, pero al dejar residuo en el módulo 2, el sistema lógico la desplaza correctamente fuera del bloque par)*

## Explicacion final 

Esta solucion funcional porque el operador de modulo es la herramienta digital definitiva para encontrar patrones ciclicos y de divisibilidad exavta sin depender de aproximaciones de punto flotante. Al encapsular el flujo dentro de un bloque estructurado de control de errores, garantizaqmos que el sistema de asignacion de maratones mantenga su integridad logica ante cualquier tipo de entrada en la terminal, automatizando las reglas del negocio de manera transparente.