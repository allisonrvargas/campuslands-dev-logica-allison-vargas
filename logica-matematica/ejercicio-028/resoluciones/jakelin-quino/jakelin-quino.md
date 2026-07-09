## Analisis
- **Entrada**: Una lista de números que representan las notas de una saga de películas.
- **Proceso**: Comparo cada nota con la anterior. Si una nota es más baja que la anterior, descarto la idea de que la saga "sube". Si es más alta, descarto que la saga "baja".
- **Salida**: Un mensaje que indica si la saga mejora, empeora o es inconsistente.

## Reglas aplicadas
1. **Sube**: Solo es verdadero si cada nota es mayor o igual a la anterior.
2. **Baja**: Solo es verdadero si cada nota es menor o igual a la anterior.
3. **Errática**: Si ninguna de las anteriores se cumple, significa que la saga tuvo subidas y bajadas.

## Pruebas
- **Caso Normal**: `[7.5, 8.0, 8.5, 9.0]` -> Resultado: "La saga está mejorando".
- **Caso Borde**: `[9.0, 7.0, 8.5]` -> Resultado: "Es una mezcla de buenas y malas".

## Explicacion para mi instructor
Elegí este método porque es fácil de seguir paso a paso. En lugar de usar funciones avanzadas de ordenamiento, preferí usar dos variables (`sube` y `baja`) como "banderas" que me avisan qué está pasando con la lista mientras la recorro con un ciclo `for`.