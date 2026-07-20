# Ejercicio 035 - Velocidad, Tiempo y Distancia

## ¿Cómo pensé el problema?

Identifiqué que la velocidad se calcula con la fórmula:

Velocidad = Distancia / Tiempo

Después clasifiqué el resultado según el valor obtenido y validé que el tiempo fuera mayor que cero para evitar errores.

---

## Reglas aplicadas

- La distancia no puede ser negativa.
- El tiempo debe ser mayor que cero.
- La velocidad se calcula como:

  velocidad = distancia / tiempo

- Clasificación:
  - Menor a 30 → Lento.
  - Entre 30 y 79.99 → Normal.
  - 80 o más → Rápido.

---

## ¿Cómo ejecutar?

1. Abrir una terminal.
2. Ubicarse en la carpeta del ejercicio.
3. Ejecutar:

```bash
node stefani-sanchez.js
```

---

## Casos probados

### Caso normal

Entrada:

- Distancia: 240 km
- Tiempo: 4 horas

Salida:

- Velocidad: 60 km/h
- Clasificación: Normal

### Caso borde

Entrada:

- Distancia: 100 km
- Tiempo: 0 horas

Salida:

- Error indicando que el tiempo debe ser mayor que cero.

---

## Explicación

La solución calcula la velocidad usando la fórmula matemática correspondiente, valida los datos de entrada y clasifica el resultado según el rango obtenido.