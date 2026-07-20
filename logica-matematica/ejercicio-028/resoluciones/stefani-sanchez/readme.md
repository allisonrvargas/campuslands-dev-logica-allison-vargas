# Ejercicio 028 - Patrones de puntuación

## ¿Cómo pensé el problema?

Analicé que debía calcular el puntaje final de cada participante aplicando un bono y una penalización. Para ello recorrí la lista de puntajes y realicé el cálculo correspondiente.

## Entradas

- Lista de puntajes.
- Bono.
- Penalización.

## Reglas aplicadas

- A cada puntaje se le suma el bono.
- Luego se resta la penalización.
- Si la lista está vacía, se informa al usuario.

## Salida

Una lista con los puntajes finales.

## Casos de prueba

### Caso normal

Entrada:

```text
Participantes: [12, 18, 25, 30]
Bono: 8
Penalización: 3
```

Salida:

```text
[17, 23, 30, 35]
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
No hay participantes.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```