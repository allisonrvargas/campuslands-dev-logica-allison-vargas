# Ejercicio 025 - Ordenamiento de prioridades

## ¿Cómo pensé el problema?

El objetivo era organizar una lista de trabajos de un taller mecánico según su nivel de prioridad. Primero identifiqué las entradas y después definí una regla para ordenar los trabajos.

## Entradas

- Lista de trabajos.
- Cada trabajo contiene:
  - Nombre del trabajo.
  - Prioridad (alta, media o baja).

## Reglas aplicadas

- Prioridad alta se atiende primero.
- Prioridad media se atiende después.
- Prioridad baja se atiende al final.
- Si la lista está vacía, se informa que no existen trabajos para ordenar.

## Salida

Una lista ordenada según la prioridad de atención.

## Casos de prueba

### Caso normal

Entrada:

```text
Cambio de aceite - media
Reparación de frenos - alta
Lavado - baja
Cambio de batería - alta
```

Salida:

```text
Reparación de frenos
Cambio de batería
Cambio de aceite
Lavado
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
No hay trabajos para ordenar.
```

## Ejecución

Abrir una terminal en la carpeta del ejercicio y ejecutar:

```bash
node stefani-sanchez.js
```