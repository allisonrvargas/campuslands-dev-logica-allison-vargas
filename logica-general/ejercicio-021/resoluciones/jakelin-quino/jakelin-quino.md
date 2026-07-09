## Analisis

- Entrada: Dos variables numéricas, una para el KDA y otra para las horas de juego.
- Proceso: Comparar los valores mediante una estructura de control (if, else if, else) para asignar una categoría.
- Salida: El nombre de la categoría y una explicación simple del motivo.

## Reglas identificadas

1. Si el KDA es 3.0 o más Y las horas son más de 100, es "Veterano Élite".
2. Si solo tiene 2.0 o más de KDA, es "Competitivo".
3. Si no cumple lo anterior, es "En formación".

## Pruebas

### Caso normal

Entrada:
kda: 3.5
horas: 150

Resultado esperado:
categoria: Veterano Élite
motivo: Alto KDA y experiencia significativa.

### Caso borde

Entrada:
kda: 1.5
horas: 200

Resultado esperado:
categoria: En formación
motivo: Necesita mejorar métricas base.

## Explicacion final

Solo declaré las variables de entrada, usé una estructura 'if' para evaluar las condiciones una por una y luego guardé el resultado en variables simples para imprimirlas al final. Es fácil de leer y permite ver el proceso lógico paso a paso.