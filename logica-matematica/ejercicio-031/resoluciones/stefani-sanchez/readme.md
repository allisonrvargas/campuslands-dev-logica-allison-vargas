# Ejercicio 031 - Conteo combinatorio simple

## ¿Cómo pensé el problema?

Primero identifiqué las entradas del problema: una lista de participantes, un bono y una penalización. Después calculé cuántas combinaciones de dos participantes podían formarse utilizando la fórmula de combinaciones simples.

## Reglas aplicadas

- Contar las combinaciones posibles entre los participantes.
- Sumar el bono.
- Restar la penalización.
- Clasificar el resultado final:
  - Competitivo: 10 o más.
  - Intermedio: entre 5 y 9.
  - Básico: menos de 5.

## Entradas

- Lista de participantes.
- Bono.
- Penalización.

## Salidas

- Número de combinaciones.
- Puntaje final.
- Clasificación.
- Explicación.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

```text
Participantes: [12, 18, 25, 30]
```

Resultado:

```text
Combinaciones: 6
Puntaje final: 11
Clasificación: Competitivo
```

### Caso borde

```text
Participantes: []
```

Resultado:

```text
Combinaciones: 0
Puntaje final: 5
Clasificación: Básico
```

## Conclusión

La solución calcula correctamente el número de combinaciones posibles, aplica el bono y la penalización, clasifica el resultado y valida el caso donde no existen participantes suficientes.