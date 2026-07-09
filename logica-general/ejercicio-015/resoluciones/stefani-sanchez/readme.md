# Solucion ejercicio 015 - Reglas de negocio

## Como pense el problema

El problema consiste en validar proyectos de dibujo digital aplicando reglas de negocio. Cada proyecto debe cumplir con un formato permitido y una resolución mínima para ser aceptado.

## Entradas

- Lista de proyectos.

Cada proyecto contiene:

- Cliente.
- Formato.
- Resolución.

## Reglas aplicadas

1. La lista debe contener proyectos.
2. Solo se aceptan formatos PNG y JPG.
3. La resolución mínima permitida es de 300 dpi.
4. Si el proyecto cumple ambas reglas, es aprobado.
5. Si no cumple alguna regla, se informa el motivo.

## Salidas

- Resultado de la validación de cada proyecto.
- Mensaje cuando no existen proyectos registrados.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Resultado esperado:

```text
Carlos: Proyecto aprobado.
Ana: Resolucion insuficiente.
Luis: Formato no permitido.
```

### Caso borde

Resultado esperado:

```text
No hay proyectos registrados.
```