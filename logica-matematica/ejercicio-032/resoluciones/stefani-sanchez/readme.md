# Ejercicio 032 - Probabilidad básica

## ¿Cómo pensé el problema?

Primero identifiqué las entradas del problema: una lista de participantes, un bono y una penalización. Luego calculé la probabilidad de que un participante cumpliera una condición específica.

## Reglas aplicadas

- Contar los participantes que cumplen la condición.
- Calcular la probabilidad.
- Convertirla a porcentaje.
- Sumar el bono.
- Restar la penalización.
- Clasificar el resultado.

### Clasificación

- Competitivo: 60 o más.
- Intermedio: entre 30 y 59.99.
- Básico: menor de 30.

## Entradas

- Lista de participantes.
- Bono.
- Penalización.

## Salidas

- Probabilidad.
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
Participantes: [12,18,25,30]
```

Resultado:

```text
Probabilidad: 50%
Puntaje final: 55
Clasificación: Intermedio
```

### Caso borde

```text
Participantes: []
```

Resultado:

```text
Probabilidad: 0%
Puntaje final: 5
Clasificación: Básico
```

## Conclusión

La solución calcula correctamente una probabilidad básica, aplica el bono y la penalización, clasifica el resultado y valida el caso donde no existen participantes.