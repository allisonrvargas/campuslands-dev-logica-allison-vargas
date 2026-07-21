# Ejercicio 034 - Áreas y Perímetros

## ¿Cómo pensé el problema?

Primero identifiqué qué figura geométrica se iba a calcular. Después apliqué la fórmula correspondiente para obtener el área y el perímetro.

## Reglas aplicadas

- Cuadrado
  - Área = lado × lado
  - Perímetro = 4 × lado
- Rectángulo
  - Área = base × altura
  - Perímetro = 2 × (base + altura)
- Círculo
  - Área = π × radio²
  - Perímetro = 2 × π × radio
- Si la figura no existe, se muestra un mensaje de error.

## Entradas

- Tipo de figura.
- Medidas necesarias.

## Salidas

- Figura.
- Área.
- Perímetro.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Prueba 1

```text
Entrada:
Cuadrado de lado 8

Salida:
Área = 64
Perímetro = 32
```

### Prueba 2

```text
Entrada:
Rectángulo 12 x 6

Salida:
Área = 72
Perímetro = 36
```

### Prueba 3

```text
Entrada:
Círculo de radio 5

Salida:
Área ≈ 78.54
Perímetro ≈ 31.42
```

### Caso borde

```text
Entrada:
Triángulo

Salida:
Figura no válida.
```