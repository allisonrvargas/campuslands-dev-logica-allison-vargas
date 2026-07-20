# Ejercicio 030 - Redondeo y precisión

## ¿Cómo pensé el problema?

Primero identifiqué las entradas del problema: una lista de participantes, un bono y una penalización. Luego calculé el promedio de los participantes y apliqué las reglas del ejercicio.

## Reglas aplicadas

- Calcular el promedio de los valores.
- Sumar el bono.
- Restar la penalización.
- Redondear el resultado a dos decimales.
- Clasificar el puntaje final:
  - Competitivo: 25 o más.
  - Intermedio: entre 15 y 24.99.
  - Básico: menos de 15.

## Entradas

- Arreglo de participantes.
- Bono.
- Penalización.

## Salidas

- Promedio.
- Puntaje final redondeado.
- Clasificación.
- Explicación del resultado.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

```text
Participantes: [12,18,25,30]
Bono: 8
Penalización: 3
```

Resultado:

```text
Promedio: 21.25
Puntaje final: 26.25
Clasificación: Competitivo
```

### Caso borde

```text
Participantes: []
```

Resultado:

```text
Promedio: 0
Puntaje final: 5
Clasificación: Básico
```

## Conclusión

La solución calcula correctamente el promedio, aplica el bono y la penalización, redondea el resultado a dos decimales y clasifica el puntaje según las reglas establecidas.