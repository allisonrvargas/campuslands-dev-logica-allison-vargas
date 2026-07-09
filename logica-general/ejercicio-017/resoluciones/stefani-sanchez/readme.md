# Solucion ejercicio 017 - Tablas de decision

## Como pense el problema

Analice las condiciones necesarias para aprobar un proyecto de arquitectura 3D. Luego construí una tabla de decisión donde cada proyecto se evalúa según su presupuesto y la disponibilidad de un terreno.

## Entradas

- Lista de proyectos.

Cada proyecto contiene:

- Nombre.
- Presupuesto.
- Disponibilidad de terreno.

## Reglas aplicadas

1. La lista debe contener proyectos.
2. El presupuesto debe ser igual o superior a 50000.
3. Debe existir un terreno disponible.
4. Si ambas condiciones se cumplen, el proyecto es aprobado.
5. Si alguna condición falla, se indica el motivo.

## Salidas

- Resultado de cada proyecto.
- Mensaje cuando la lista está vacía.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Resultado esperado:

```text
Casa Moderna: Proyecto aprobado.
Edificio: Presupuesto insuficiente.
Villa: No existe un terreno disponible.
```

### Caso borde

Resultado esperado:

```text
No hay proyectos registrados.
```