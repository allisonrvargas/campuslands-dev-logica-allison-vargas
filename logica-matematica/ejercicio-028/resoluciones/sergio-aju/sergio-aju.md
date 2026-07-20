# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis

- **Entrada:** Un arreglo `puntuaciones` (números del 0 al 10).
- **Proceso:** Calcular el promedio para medir la aceptación general y la dispersión ($max - min$) para medir qué tan polarizadas están las opiniones.
- **Salida:** Un objeto con el promedio, la dispersión, el patrón identificado y una breve explicación.

## Reglas identificadas

1. **Película de Culto:** Promedio >= 8 y dispersión <= 2 (opiniones muy similares y altas).
2. **Película Polarizante:** Dispersión >= 5 (hay críticos que aman la película y otros que la odian).
3. **Película de Taquilla:** Cualquier otro caso (aceptación estándar).

## Pruebas

### Caso normal (Culto)

**Entrada:**
```javascript
puntuaciones: [9, 8, 9, 10, 9]