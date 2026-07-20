# Logica matematica 031 - conteo combinatorio simple (kickboxing)

## Como se planteo el problema
Se partio del ejemplo dado en el enunciado (`participantes: [12,18,25,30], bono: 8, penalizacion: 3` -> `puntaje_final: 27`) para deducir la regla oculta. Se probaron distintas operaciones (suma total, promedio, conteo de pares) hasta encontrar la unica que reproducia el resultado exacto: la mediana del grupo, redondeada, ajustada con bono y penalizacion.

## Reglas aplicadas
1. Ordenar `participantes` y calcular la mediana (promedio de los dos valores centrales si la cantidad es par).
2. Redondear la mediana al entero mas cercano (base).
3. Calcular `puntaje_final = base + bono - penalizacion`.
4. Validar que `participantes` sea un arreglo no vacio.
5. Clasificar segun el `puntaje_final`: `>=25` competitivo, `>=15` intermedio, `<15` principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → mediana 21.5 redondeada 22, puntaje_final 27, clasificacion competitivo.
- Caso borde (un solo participante): `[10]`, bono 0, penalizacion 5 → mediana 10, puntaje_final 5, clasificacion principiante.